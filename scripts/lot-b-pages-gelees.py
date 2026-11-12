#!/usr/bin/env python3
"""
scripts/lot-b-pages-gelees.py
Lot B (confiance et conformité) — corrections réservées aux pages sous fenêtre de mesure.

À lancer depuis la racine du dépôt, UNIQUEMENT quand la mesure est close :
  - /blog/forever-living-avis-produits-france/  (title/description du 29/09)
  - fiche forever-pulpe-daloe-vera              (seoTitle du 29/08)
  - journal C9 (/mon-journal-c9/)               (fenêtre ouverte en septembre)

    python3 scripts/lot-b-pages-gelees.py

Chaque remplacement vérifie qu'une seule ligne correspond avant d'écrire.
Si une assertion échoue, rien n'est à corriger à la main : le texte a déjà changé,
relire le fichier concerné.
"""
B = 'src/content/blog/'; P = 'src/content/produits/'

def rl(path, prefix, new):
    lines = open(path, encoding='utf-8').read().split('\n')
    idx = [i for i, l in enumerate(lines) if l.strip().startswith(prefix)]
    assert len(idx) == 1, (path, prefix, len(idx))
    i = idx[0]
    indent = lines[i][:len(lines[i]) - len(lines[i].lstrip())]
    lines[i] = indent + new
    open(path, 'w', encoding='utf-8').write('\n'.join(lines))

# ── Article « avis » : IASC présentée pour ce qu'elle est
A = B + 'forever-living-avis-produits-france.md'
rl(A, 'reponse: "Oui sur le plan de la fabrication',
   'reponse: "Oui sur le plan de la fabrication : la gamme boissons est certifiée IASC, l\'association professionnelle du secteur dont Forever Living est membre fondateur, sur la base d\'audits et d\'analyses en laboratoire, et Forever Living contrôle sa filière de la culture de l\'aloe vera à la mise en bouteille. La fiabilité des effets dépend ensuite de la régularité : comptez 4 semaines minimum pour évaluer honnêtement un produit."')
rl(A, "L'IASC (International Aloe Science Council) est l'organisme indépendant",
   "L'IASC (International Aloe Science Council) est l'association professionnelle du secteur de l'aloe vera : elle délivre un sceau de qualité aux produits qui passent ses contrôles. Forever Living est l'un des membres fondateurs de cet organisme et fait certifier l'ensemble de sa gamme boissons.")
rl(A, 'Cette certification implique des contrôles réguliers',
   "Ce sceau s'appuie sur des analyses en laboratoire et des audits de conformité. Il faut toutefois le lire pour ce qu'il est : une certification portée par une association du secteur, dont Forever fait partie, et non par une autorité publique. Elle atteste de la conformité des produits aux critères de l'IASC ; elle ne remplace pas un contrôle des autorités sanitaires.")
rl(A, '**Les produits Forever sont-ils fiables ?**',
   "**Les produits Forever sont-ils fiables ?** Oui, sur le plan de la fabrication : la gamme boissons est certifiée IASC, association professionnelle du secteur dont Forever Living est membre fondateur (audits et analyses en laboratoire), et l'entreprise contrôle toute sa filière, de la culture de l'aloe vera au Texas et aux Canaries jusqu'à la mise en bouteille. La fiabilité des effets, elle, dépend surtout de votre régularité : comptez 4 semaines minimum de consommation quotidienne pour évaluer honnêtement un produit.")

# ── Fiche pulpe d'aloe vera : superlatifs et promesses santé
F = P + 'forever-pulpe-daloe-vera.md'
rl(F, 'description:',
   'description: "La pulpe d’aloe vera à boire chaque matin : 99,7 % de gel stabilisé, sans conservateur, certifié IASC. Une base simple pour démarrer une cure d’aloe vera. Réf. 815."')
rl(F, 'seoDescription:',
   'seoDescription: "Forever Aloe Vera Gel (Réf. 815) : 99,7 % de gel d\'aloe vera pur, sans conservateur, riche en vitamine C. Livraison 48–72h en France."')
rl(F, 'Forever Living a affiné ce produit pendant quarante ans.',
   "Forever Living a affiné ce produit pendant quarante ans. La version actuelle réunit 99,7 % de gel d’aloe vera stabilisé, prélevé dans la pulpe intérieure de la feuille, débarrassé de l’écorce et de son aloïne. Aucun conservateur artificiel : la vitamine C et le conditionnement Tetra Pak suffisent à protéger le gel. L’emballage se recycle à 100 %, et le sceau IASC, délivré par l’association professionnelle du secteur dont Forever est membre, atteste de la teneur en aloe vera.")
rl(F, 'reponse: "Beaucoup de personnes notent un transit plus régulier',
   'reponse: "Beaucoup de personnes adoptent la pulpe pour leur confort digestif et leur routine du matin. La vitamine C contribue au fonctionnement normal du système immunitaire et aide à réduire la fatigue. Les effets s’installent avec la régularité, pas en un jour."')
rl(F, 'contenu: "Vous buvez la même plante utilisée depuis des siècles',
   'contenu: "Vous buvez la même plante utilisée depuis des siècles, sous une forme prête à l’emploi. Le gel concentre vitamines A, B, C et E, des minéraux comme le zinc, le magnésium et le sélénium, des enzymes digestives et des acides aminés. L’acémannane est son polysaccharide principal. Beaucoup de personnes l’adoptent pour le confort digestif et la routine bien-être du matin."')

# ── Journal C9 : IASC
rl(P.replace('produits', 'journal') + 'c9-aout-2026.md', 'texte: "C\'est la base du programme',
   'texte: "C\'est la base du programme, celle qu\'on prend matin et soir pendant les 9 jours. Le gel Forever porte le sceau IASC, délivré par l\'association professionnelle du secteur dont Forever est membre. Il fait partie de la routine digestive du programme. À boire de préférence à jeun, et bien secouer la bouteille avant chaque prise. Une fois ouverte, elle se garde au frais."')
print('Corrections des pages gelées appliquées.')
