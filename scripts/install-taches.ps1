# Enregistre les taches planifiees Windows pour les agents Esprit Aloe.
# A lancer UNE FOIS depuis la racine du repo :  .\scripts\install-taches.ps1
# Pas besoin d'etre administrateur.

$ErrorActionPreference = 'Stop'
$RepoDir = Split-Path -Parent $PSScriptRoot
$Script  = Join-Path $RepoDir 'scripts\agent-run.ps1'

if (-not (Test-Path $Script)) { throw "agent-run.ps1 introuvable dans $RepoDir\scripts" }

$Missions = @(
    @{ Nom = 'audit-seo'; Trigger = (New-ScheduledTaskTrigger -Daily -At 3am) }
    @{ Nom = 'veille';    Trigger = (New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At 7am) }
    @{ Nom = 'analytics'; Trigger = (New-ScheduledTaskTrigger -Weekly -DaysOfWeek Saturday -At 8am) }
)

$Settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -DontStopIfGoingOnBatteries `
    -AllowStartIfOnBatteries `
    -ExecutionTimeLimit (New-TimeSpan -Hours 1)

foreach ($m in $Missions) {
    $TaskName = "EspritAloe-$($m.Nom)"
    $Action = New-ScheduledTaskAction `
        -Execute 'powershell.exe' `
        -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Script`" -Mission $($m.Nom)" `
        -WorkingDirectory $RepoDir

    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false -ErrorAction SilentlyContinue

    Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $m.Trigger `
        -Settings $Settings -Description "Agent Esprit Aloe - mission $($m.Nom)" | Out-Null

    Write-Host "Tache enregistree : $TaskName"
}

Write-Host ""
Write-Host "Verifier         : Get-ScheduledTask -TaskName 'EspritAloe-*'"
Write-Host "Lancer a la main  : Start-ScheduledTask -TaskName 'EspritAloe-audit-seo'"
