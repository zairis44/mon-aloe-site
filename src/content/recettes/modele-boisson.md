---
titre: "[NOM DE VOTRE BOISSON]"
slug: "modele-boisson"
categorie: "boisson"
description: "[UNE OU DEUX PHRASES : dans quel contexte vous la servez, ce qu'elle apporte]"
image: "/images/recettes/modele-boisson.webp"
imageAlt: "[DESCRIPTION DE CE QU'ON VOIT SUR LA PHOTO] — recette aloe vera"
tempsPreparation: "[ex : 5 minutes]"
portions: "[ex : 1 verre]"
ingredients:
  - "[Ingrédient 1 avec la quantité]"
  - "[Ingrédient 2 avec la quantité]"
  - "[etc.]"
etapes:
  - "[Première étape]"
  - "[Deuxième étape]"
astuce: "[Votre conseil personnel : une variante, une erreur à éviter, un moment idéal pour la servir]"
ordre: 1
draft: true
---

MODE D'EMPLOI — à supprimer une fois la recette écrite
======================================================

Ce fichier est un modèle. Pour créer une nouvelle recette :

1. Dupliquez ce fichier dans src/content/recettes/
2. Renommez-le (ex : mojito-aloe-vera.md)
3. Remplacez tout ce qui est entre crochets
4. Changez le champ "slug" pour qu'il soit unique
5. Passez "draft" à false pour qu'elle apparaisse sur le site

Le champ "categorie" accepte trois valeurs :
  - repas    → section Les repas du C9
  - shaker   → section Les shakers améliorés
  - boisson  → section Les boissons à l'aloe vera

Le champ "ordre" détermine la position dans sa section (1 = en premier).

Les photos vont dans public/images/recettes/, converties en WebP
(largeur 1200px, qualité 75 sur Squoosh).

Tant que "draft" reste à true, la recette n'apparaît pas sur le site —
pratique pour préparer une recette tranquillement avant de la publier.
