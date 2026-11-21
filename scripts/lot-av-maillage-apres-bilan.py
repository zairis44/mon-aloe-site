"""
Lot AV : maillage à poser APRÈS le bilan du 9 décembre 2026.
Toutes les pages modifiées ici sont en mesure jusqu'au 9/12 : ne pas lancer avant.
Préparé le 21/11/2026 (voir lot AU dans A-NE-PAS-OUBLIER.md).

Lancement : python3 scripts/lot-av-maillage-apres-bilan.py && npm run build
Chaque substitution vérifie une occurrence unique : si une page a changé
depuis le 21/11, le script s'arrête avant d'écrire quoi que ce soit.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
B = ROOT / "src/content/blog"

EDITS = {
    # Groupe C9 : ancre explicite vers c9-forever-avis (cannibalisation sur
    # « cure c9 forever avis » : avis Forever pos. 6, c9-forever-avis pos. 28).
    # /produits/ : première ancre descriptive (pos. 24-25 sur « forever aloe vera »).
    B / "forever-living-avis-produits-france.md": [
        (
            "[mon avis détaillé sur le C9](/blog/c9-forever-avis/)",
            "[mon avis détaillé sur la cure C9 Forever](/blog/c9-forever-avis/)",
        ),
        (
            "à des concentrations allant de 90 à 99,7 % selon les produits.",
            "à des concentrations allant de 90 à 99,7 % selon les produits. Vous pouvez comparer les teneurs sur [la gamme de produits Forever Aloe Vera](/produits/).",
        ),
    ],
    # Visage → sérums, article bakuchiol, Scrub, Masque-Gel de Nuit
    B / "aloe-vera-visage.md": [
        (
            "Le soir, une crème plus riche si votre peau est sèche.",
            "Le soir, une crème plus riche si votre peau est sèche. Pour aller plus loin, deux sérums de la gamme se posent avant la crème : le [sérum vitamine C](/produits/forever-vitamin-c/) le matin, le [sérum au bakuchiol](/produits/forever-bakuchiol/) le soir (il contient aussi un rétinoïde : prudence pendant la grossesse). Pour choisir, lisez [bakuchiol ou rétinol](/blog/bakuchiol-ou-retinol/).",
        ),
        (
            "\n## Les erreurs à éviter\n",
            "\nPour un soin plus complet, le [Masque-Gel de Nuit](/produits/forever-masque-gel-de-nuit/) se garde toute la nuit, 2 à 3 soirs par semaine, et l'[Aloe Scrub](/produits/forever-aloe-scrub/) apporte un gommage doux une à deux fois par semaine.\n\n## Les erreurs à éviter\n",
        ),
    ],
    # Cheveux → shampoing (produit phare de Rafael, absent de l'article) et huile capillaire
    B / "aloe-vera-cheveux-cuir-chevelu-bienfaits.md": [
        (
            "Une option douce si les shampoings classiques vous irritent le cuir chevelu.",
            "Une option douce si les shampoings classiques vous irritent le cuir chevelu. Au quotidien, le plus simple reste le [Shampoing Aloe-Jojoba](/produits/forever-shampoing-aloe-jojoba/), avec l'aloe vera en premier ingrédient, suivi de son [après-shampoing](/produits/forever-apres-shampoing-aloe-jojoba/).",
        ),
        (
            "Laissez poser 30 minutes sous une serviette chaude.",
            "Laissez poser 30 minutes sous une serviette chaude. Entre deux masques, quelques gouttes d'[Huile Capillaire Nourrissante](/produits/forever-huile-capillaire-nourrissante/) sur les pointes, sans rinçage.",
        ),
    ],
    # Immunité → ImmuBlend, Absorbent-C ; stress/sommeil (0 lien dans le texte)
    B / "aloe-vera-systeme-immunitaire-defenses-naturelles.md": [
        (
            "l'alimentation (viande, poisson, œufs, légumineuses, céréales complètes) reste la base.",
            "l'alimentation (viande, poisson, œufs, légumineuses, céréales complètes) reste la base. Si vous voulez un complément ciblé, [Forever ImmuBlend](/produits/forever-immublend/) associe vitamine C, vitamine D3 et zinc, et [Absorbent-C](/produits/forever-absorbent-c/) apporte de la vitamine C à croquer : demandez conseil avant de les cumuler avec une autre formule vitaminée.",
        ),
        (
            "une **gestion du stress**, et le suivi",
            "une **gestion du stress** (voir [aloe vera, stress et sommeil](/blog/aloe-vera-stress-sommeil-naturel/)), et le suivi",
        ),
    ],
    # Peau → coup de soleil, visage
    B / "aloe-vera-peau-beaute-bienfaits-forever.md": [
        (
            "en cas de blessure, de brûlure sérieuse ou de cicatrice, demandez conseil à un professionnel de santé.",
            "en cas de blessure, de brûlure sérieuse ou de cicatrice, demandez conseil à un professionnel de santé. Les bons gestes après un coup de soleil sont détaillés dans [aloe vera et coup de soleil](/blog/aloe-vera-coup-de-soleil/).",
        ),
        (
            "Sa légèreté en fait une bonne base sous vos soins suivants.",
            "Sa légèreté en fait une bonne base sous vos soins suivants. Le détail selon votre type de peau est dans [l'aloe vera sur le visage](/blog/aloe-vera-visage/).",
        ),
    ],
    # Gelly 8 usages → coup de soleil, visage, comparatif des crèmes
    B / "aloe-vera-gelly-utilisation.md": [
        (
            "chez un jeune enfant, demandez l'avis d'un pharmacien ou d'un médecin.",
            "chez un jeune enfant, demandez l'avis d'un pharmacien ou d'un médecin. Les premiers gestes sont détaillés dans [aloe vera et coup de soleil](/blog/aloe-vera-coup-de-soleil/).",
        ),
        (
            "Sur une peau mixte à grasse, le Gelly peut suffire seul.",
            "Sur une peau mixte à grasse, le Gelly peut suffire seul. La routine complète selon votre peau est dans [l'aloe vera sur le visage](/blog/aloe-vera-visage/).",
        ),
        (
            "sa texture plus riche garde l'hydratation en place pendant la nuit.",
            "sa texture plus riche garde l'hydratation en place pendant la nuit. Pour comparer les textures, voyez mon [comparatif des crèmes à l'aloe vera](/blog/creme-aloe-vera-laquelle-choisir/).",
        ),
    ],
}

# Vérifier toutes les substitutions avant d'écrire le moindre fichier.
textes = {}
for path, subs in EDITS.items():
    s = path.read_text(encoding="utf-8")
    for old, _ in subs:
        n = s.count(old)
        assert n == 1, f"{path.name}: {n} occurrence(s) de {old[:60]!r}"
    textes[path] = s

for path, subs in EDITS.items():
    s = textes[path]
    for old, new in subs:
        s = s.replace(old, new)
    path.write_text(s, encoding="utf-8")
    print(f"ok  {path.relative_to(ROOT)}  ({len(subs)} modification(s))")
