# Agent autonome Esprit Aloe (Windows) - lance Claude Code en mode headless,
# ecrit un rapport date dans rapports\ et envoie un resume sur Telegram.
#
# Usage :  .\scripts\agent-run.ps1 -Mission audit-seo
#   missions : audit-seo | veille | analytics

param(
    [ValidateSet('audit-seo', 'veille', 'analytics', 'concurrence')]
    [string]$Mission = 'audit-seo'
)

$ErrorActionPreference = 'Stop'

$RepoDir = Split-Path -Parent $PSScriptRoot
Set-Location $RepoDir

# Chargement du .env (KEY=VALUE)
$EnvFile = Join-Path $RepoDir '.env'
if (Test-Path $EnvFile) {
    Get-Content $EnvFile | ForEach-Object {
        if ($_ -match '^\s*([^#=\s]+)\s*=\s*(.*)$') {
            Set-Item -Path "Env:$($Matches[1])" -Value $Matches[2].Trim('"').Trim("'")
        }
    }
}

$Stamp   = Get-Date -Format 'yyyy-MM-dd'
$OutDir  = Join-Path 'rapports' $Mission
$OutFile = "rapports/$Mission/$Stamp.md"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$Prompt = switch ($Mission) {
    'audit-seo' {
        "Lis d'abord A-NE-PAS-OUBLIER.md pour connaitre les pages gelees et les fenetres de mesure en cours. Puis lance l'agent seo-content pour un audit SEO complet du site : titres et meta-descriptions manquants ou dupliques, hierarchie de titres, images sans alt, liens internes casses, pages orphelines, maillage produitsLies/articlesLies incomplet, articles obsoletes, draft oublies. Ecris le rapport dans $OutFile (markdown, classe par impact, chemin de fichier + correctif precis), en signalant explicitement les points qui concernent une page gelee. Termine par un resume de 5 lignes maximum pour une notification Telegram. Ne modifie aucun fichier du site."
    }
    'veille' {
        "Site espritaloe.fr : aloe vera, bien-etre, distribution Forever Living, marche francais. Fais une veille : sujets et requetes qui montent en ce moment en France, compares aux articles deja presents dans src/content/blog et aux fiches de src/content/produits. Propose 5 sujets non encore traites, avec pour chacun l'intention de recherche, l'angle, et les liens internes evidents (produitsLies / articlesLies). Ecris le tout dans $OutFile, puis termine par un resume de 5 lignes maximum. Ne modifie aucun fichier du site."
    }
    'analytics' {
        "Lance l'agent analytics sur espritaloe.fr : verifie que le snippet GA4 G-BNF9DV82DN est present sur toutes les pages via le layout global, que le sitemap est genere et que les redirections de vercel.json sont intactes. Relis A-NE-PAS-OUBLIER.md pour les fenetres de mesure en cours et leur date de verdict. Analyse ensuite les exports presents dans data/analytics/ s'il y en a. Ecris le rapport dans $OutFile et termine par un resume de 5 lignes maximum. Si les exports manquent, dis quels exports recuperer. Ne modifie aucun fichier du site."
    }
    'concurrence' {
        "Lance l'agent concurrence sur espritaloe.fr. Lis les exports Search Console les plus recents dans data/analytics/ et identifie les 3 requetes les plus prometteuses : position moyenne entre 5 et 20, impressions significatives, CTR faible. Pour chacune, analyse les 5 premiers resultats Google, releve leurs forces et leurs failles exploitables, compare a notre page existante et propose un plan d'action concret rattache aux fichiers du repo. Ecris le rapport dans rapports/concurrence/ et termine par un resume de 5 lignes maximum. Ne modifie aucun fichier du site."
    }
}

# Rafraichir les donnees Search Console avant les missions qui s'en servent
if ($Mission -in @('analytics', 'concurrence') -and $env:GSC_SITE_URL -and $env:GSC_KEY_FILE) {
    try {
        & node (Join-Path $RepoDir 'scripts\gsc-export.mjs')
    } catch {
        Write-Host "Export GSC echoue, on continue avec les donnees existantes : $_"
    }
}

$LogFile = Join-Path 'rapports' 'agent.log'
"[$(Get-Date -Format o)] mission=$Mission -> $OutFile" | Tee-Object -FilePath $LogFile -Append

$Output = & claude -p $Prompt `
    --permission-mode acceptEdits `
    --allowedTools "Read,Write,Edit,Glob,Grep,Bash,WebSearch,WebFetch,Agent" 2>&1

$Output | Out-File -FilePath $LogFile -Append -Encoding utf8
$Summary = ($Output | Select-Object -Last 40) -join "`n"

if ($env:TELEGRAM_BOT_TOKEN -and $env:TELEGRAM_CHAT_ID) {
    try {
        Invoke-RestMethod -Method Post `
            -Uri "https://api.telegram.org/bot$($env:TELEGRAM_BOT_TOKEN)/sendMessage" `
            -Body @{
                chat_id = $env:TELEGRAM_CHAT_ID
                text    = "Esprit Aloe - $Mission ($Stamp)`n`n$Summary"
            } | Out-Null
    } catch {
        "Notification Telegram echouee : $_" | Tee-Object -FilePath $LogFile -Append
    }
}

"[$(Get-Date -Format o)] termine" | Tee-Object -FilePath $LogFile -Append
