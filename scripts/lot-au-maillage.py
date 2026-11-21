"""
Lot AU (21/11/2026) : maillage éditorial vers les fiches orphelines, l'article
coup de soleil et les pages catégories.
Sources : uniquement des pages hors fenêtre de mesure (articles minceur, sport,
quelle boisson ; fiches anciennes). Chaque substitution vérifie une occurrence unique.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
B = ROOT / "src/content/blog"
P = ROOT / "src/content/produits"

EDITS = {
    # ── Articles ────────────────────────────────────────────────────────────
    B / "perdre-du-poids-naturellement-forever-programmes-minceur.md": [
        (
            "Ce guide compare les deux programmes principaux pour vous aider à choisir celui qui correspond à votre situation.",
            "Ce guide compare les deux programmes principaux pour vous aider à choisir celui qui correspond à votre situation. Tous les coffrets sont réunis dans la catégorie [programmes détox et minceur](/produits/programmes-detox/).",
        ),
        (
            "Le C9 est aussi idéal comme point de départ d'une transformation plus longue.",
            "Le C9 est aussi idéal comme point de départ d'une transformation plus longue : après les 9 jours, les programmes F15 prennent le relais sur 15 jours, en trois niveaux selon votre pratique sportive ([F15 Débutant](/produits/programme-f15-debutant-vanille/), [F15 Intermédiaire](/produits/programme-f15-intermediaire-vanille/) et [F15 Avancé](/produits/programme-f15-avance-vanille/)).",
        ),
        (
            "## Pour maximiser vos résultats\n",
            "**Hors programme**, deux compléments se prennent seuls, dans une démarche de contrôle du poids qui repose toujours sur l'alimentation et l'activité physique : [Forever Therm](/produits/forever-therm/) (thé vert, guarana et café vert, donc de la caféine) et [Forever Lean](/produits/forever-lean/) (nopal, haricot blanc et chrome, sans caféine). Aucun des deux ne fait maigrir à lui seul.\n\n## Pour maximiser vos résultats\n",
        ),
    ],
    B / "aloe-vera-sport-recuperation-musculaire.md": [
        (
            "\n### Un coup de pouce avant la séance\n",
            "\nSi vous préférez des capsules sans aloe vera, [Forever Move](/produits/forever-move/) associe la membrane de coquille d'œuf et un extrait de curcuma, 3 capsules par jour. Il contient de l'œuf, du poisson et du soja, et Forever le déconseille sous anticoagulant ; en cas de problème de foie ou de vésicule biliaire, demandez l'avis de votre médecin.\n\n### Un coup de pouce avant la séance\n",
        ),
        (
            "\n**[Forever FAB](/produits/forever-fab-active-boost/)** : une boisson à base d'aloe vera et de guarana",
            "\n**[Forever Aloe Cooling Lotion](/produits/forever-aloe-cooling-lotion/)** : un gel-crème à l'aloe vera, au menthol et à l'eucalyptus, pour un massage rafraîchissant après l'effort. Réservé aux adultes, déconseillé pendant la grossesse.\n\n**[Forever FAB](/produits/forever-fab-active-boost/)** : une boisson à base d'aloe vera et de guarana",
        ),
        (
            "\nVous hésitez entre deux produits ? [Écrivez-moi ou appelez-moi](/contact/)",
            "\nToute la gamme pour les sportifs est réunie dans la catégorie [sport et fitness](/produits/sport-et-fitness/).\n\nVous hésitez entre deux produits ? [Écrivez-moi ou appelez-moi](/contact/)",
        ),
    ],
    B / "quelle-boisson-aloe-vera-forever-choisir.md": [
        (
            "L'Aloe Mango associe le gel d'aloe vera à la mangue",
            "L'[Aloe Mango](/produits/forever-aloe-mango/) associe le gel d'aloe vera à la mangue",
        ),
        (
            "\n## Ce que choisissent mes clients\n",
            "\n## Et l'infusion Fleur d'Aloès ?\n\nForever propose aussi une tisane, l'[Infusion Fleur d'Aloès](/produits/forever-infusion-fleur-aloes/). Elle ne fait pas partie des quatre boissons ci-dessus : elle contient des fleurs d'aloès séchées et des épices, mais pas de gel d'aloe vera. Sans théine, elle se boit chaude ou glacée, en plus de votre verre de pulpe et non à sa place.\n\n## Ce que choisissent mes clients\n",
        ),
        (
            "Berry Nectar et mangue sont là pour varier. Les quatre se commandent",
            "Berry Nectar et mangue sont là pour varier. Toutes les références sont dans la catégorie [boissons aloe vera](/produits/boissons-aloe-vera/). Les quatre se commandent",
        ),
    ],
    # ── Fiches produit ──────────────────────────────────────────────────────
    P / "programme-f15-debutant-vanille.md": [
        (
            "Rien n'est présupposé : les séances commencent doux et progressent à votre rythme.",
            "Rien n'est présupposé : les séances commencent doux et progressent à votre rythme. Si vous vous entraînez déjà régulièrement, regardez plutôt le [F15 Intermédiaire](/produits/programme-f15-intermediaire-vanille/) ; si vous êtes un pratiquant confirmé, le [F15 Avancé](/produits/programme-f15-avance-vanille/).",
        ),
    ],
    P / "forever-therm.md": [
        (
            "et vous tolérez bien la caféine.",
            "et vous tolérez bien la caféine. Si la caféine ne vous convient pas, regardez [Forever Lean](/produits/forever-lean/), une formule sans caféine à base de nopal, de haricot blanc et de chrome.",
        ),
    ],
    P / "forever-daily.md": [
        (
            "Il ne remplace pas une alimentation équilibrée.\n",
            "Il ne remplace pas une alimentation équilibrée.\n\nForever le déconseille aux enfants : pour eux, à partir de 4 ans, la gamme propose [Forever Kids](/produits/forever-kids/), des comprimés à croquer. Si vous cherchez surtout du calcium et de la vitamine D, [Forever Calcium](/produits/forever-calcium/) est plus ciblé ; pour les oméga-3, voyez [Forever Arctic Sea](/produits/forever-arctic-sea/). Plusieurs nutriments se retrouvent d'un produit à l'autre : parlons-en avant de les cumuler. Les autres compléments sont dans la catégorie [nutrition](/produits/nutrition/).\n",
        ),
    ],
    P / "forever-absorbent-c.md": [
        (
            "Si vous prenez déjà Forever Daily, parlons-en avant de cumuler les deux.",
            "Si vous prenez déjà Forever Daily, parlons-en avant de cumuler les deux. Pour une formule qui associe la vitamine C à la vitamine D3 et au zinc, regardez [Forever ImmuBlend](/produits/forever-immublend/) : là aussi, évitez de la cumuler sans en parler.",
        ),
    ],
    P / "forever-royal-jelly.md": [
        (
            "À éviter en cas d'allergie aux produits de la ruche.",
            "À éviter en cas d'allergie aux produits de la ruche. Dans la même famille, [Forever Bee Propolis](/produits/forever-bee-propolis/) propose la propolis en comprimés à croquer.",
        ),
    ],
    P / "forever-aloe-body-wash.md": [
        (
            "les deux forment une routine corps simple.",
            "les deux forment une routine corps simple. Pour finir, le [déodorant Aloe Ever-Shield](/produits/forever-aloe-ever-shield-deodorant-stick/) est sans sels d'aluminium ni alcool.",
        ),
    ],
    P / "forever-aloe-liquid-soap.md": [
        (
            "Ce produit vous convient, du visage au corps.",
            "Ce produit vous convient, du visage au corps. Si vous préférez un pain de savon, l'[Aloe Avocado Soap](/produits/forever-aloe-avocado-face-and-body-soap/) associe l'aloe vera à l'huile d'avocat, pour le visage et le corps.",
        ),
    ],
    P / "forever-aloe-body-lotion.md": [
        (
            "L'été, elle sert aussi de soin hydratant après le soleil.",
            "L'été, elle sert aussi de soin hydratant après le soleil ; pour les bons gestes quand la peau a brûlé, lisez [aloe vera et coup de soleil : comment l'utiliser](/blog/aloe-vera-coup-de-soleil/).",
        ),
        (
            "gardez plutôt l'[Aloe Gelly](/produits/aloe-gelly-forever-gel-apaisant/).",
            "gardez plutôt l'[Aloe Gelly](/produits/aloe-gelly-forever-gel-apaisant/). En hiver, pensez aussi aux lèvres : le stick [Aloe Lèvres](/produits/forever-aloe-levres/) les hydrate et les protège du froid et du vent.",
        ),
    ],
    P / "forever-logic-aloe-gel-nettoyant.md": [
        (
            "parfaitement préparée à recevoir vos soins hydratants ou anti-âge.\n",
            "parfaitement préparée à recevoir vos soins hydratants ou anti-âge.\n\nPour compléter la routine : après le nettoyage, l'[Essence Tonifiante Logic](/produits/forever-logic-aloe-essence-tonifiante/) prépare la peau à recevoir vos soins. Une à deux fois par semaine, ajoutez un gommage doux avec l'[Aloe Scrub](/produits/forever-aloe-scrub/) ; le soir, 2 à 3 fois par semaine, le [Masque-Gel de Nuit](/produits/forever-masque-gel-de-nuit/) convient bien aux peaux mixtes. Toute la gamme est dans la catégorie [soins de la peau à l'aloe vera](/produits/cremes-et-gels/).\n",
        ),
    ],
    B / "forever-living-franchise-ou-vente-directe.md": [
        (
            "Rien à voir avec la création d'une soci",
            "Pour le détail des démarches, voyez [la vente à domicile et le statut VDI](/blog/vente-a-domicile-aloe-vera-vdi/). Rien à voir avec la création d'une soci",
        ),
    ],
    P / "forever-argi-pls.md": [
        (
            "La L-arginine est un acide aminé. ARGI+ l'associe",
            "La [L-arginine](/glossaire/arginine/) est un acide aminé. ARGI+ l'associe",
        ),
    ],
    P / "forever-apres-shampoing-aloe-jojoba.md": [
        (
            "c'est ce temps de pose qui fait la différence au démêlage.",
            "c'est ce temps de pose qui fait la différence au démêlage. Sur les pointes sèches ou la barbe, terminez par quelques gouttes d'[Huile Capillaire Nourrissante](/produits/forever-huile-capillaire-nourrissante/), une huile sèche sans rinçage.",
        ),
    ],
}

for path, subs in EDITS.items():
    s = path.read_text(encoding="utf-8")
    for old, new in subs:
        n = s.count(old)
        assert n == 1, f"{path.name}: {n} occurrence(s) de {old[:60]!r}"
        s = s.replace(old, new)
    path.write_text(s, encoding="utf-8")
    print(f"ok  {path.relative_to(ROOT)}  ({len(subs)} lien(s))")
