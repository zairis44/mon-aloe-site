# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Visiteur prioritaire : l'acheteur qui découvre.** Il arrive de Google, le plus souvent sur mobile, par un article de blog ou une fiche produit (« aloe vera à boire », « programme C9 », « aloe vera sport »). Il veut savoir par quoi commencer, ce que ça coûte, si c'est fait pour lui, puis commander sans friction. Exemples documentés dans `rapports/ux/2026-11-13-audit-6-personas.md` : Julie (34 ans, prendre soin de soi), Thomas (32 ans, sportif), Nathalie (47 ans, se reprendre en main avec le C9).

Publics secondaires, servis sans passer devant l'acheteur :
- **Le sceptique** (Marc) : cherche « Forever dangereux », « pyramidal », « avis » et veut des preuves de sérieux.
- **La cliente fidèle locale** (Sophie) : veut payer moins, recommander vite, connaître la livraison.
- **Le futur distributeur** (Karim) : cherche un revenu complémentaire, veut savoir le coût, le temps et les gains.

## Product Purpose

espritaloe.fr est le site vitrine de Rafael Avenard, distributeur indépendant Forever Living Products depuis 2016, basé à Saint-Joachim (Loire-Atlantique). Le site ne vend pas lui-même : il oriente les visiteurs venus de Google France vers la boutique officielle Forever via le lien de Rafael.

Objectif business : générer des ventes passives grâce au référencement naturel, sans publicité.

Le succès se mesure à deux actions :
1. **Clic vers la boutique Forever** (lien boutique client de Rafael).
2. **Inscription distributeur** via son lien de parrainage (`join.foreverliving.fr/ref/330001628607`).

La prise de contact (téléphone, WhatsApp, formulaire, rendez-vous) existe comme accompagnement, mais n'est pas le but en soi.

## Positioning

Ce qu'un autre site de distributeur Forever ne peut pas reprendre tel quel :
- **Conseil personnel** : Rafael écoute, s'adapte au client, reste disponible avant et après l'achat, et se déplace dans toute la Loire-Atlantique pour faire tester les produits.
- **Honnêteté** : le site parle des contre-indications et de la question « pyramidal ou légal », reste prudent sur les allégations santé, et oriente vers d'autres gammes plutôt que vendre un produit inadapté.
- **Contenu pédagogique** : guides, glossaire des ingrédients, page « Quel produit Forever choisir », journal C9 vécu par Rafael.
- **Avantage prix** : code MYFOREVER, −15 % dès 50 € pour les nouveaux clients inscrits via son lien boutique.

## Operating Context

- Trafic majoritairement mobile (audit fait en 390 px de large).
- Parcours type : article de blog → fiche produit → `/commander/` → boutique foreverliving.fr. La commande, le paiement et la livraison se passent chez Forever, hors du site.
- Marché : France en priorité ; parrainage valable aussi en Suisse et en Belgique (page Suisse dédiée).
- Pages par intention : accueil = « Forever Living France / distributeur », `/commander/` = commander/acheter en ligne, `/catalogue-forever/` = catalogue et prix.
- Livraison Forever : point relais 3,90 € sous 50 €, offert dès 50 € ; domicile Chronopost 13 €.
- Horaires de conseil : lun.–ven. 8h–19h, sam. 9h–16h. Seule la commande en ligne est 7j/7.

## Capabilities and Constraints

- Site statique Astro (Tailwind CSS v4, collections de contenu : blog, produits, glossaire, recettes, journal), hébergé sur Vercel.
- Zéro JavaScript par défaut : pas de React ni de Vue sans raison valable. La performance (Lighthouse, Core Web Vitals) fait partie du produit.
- Mesure : Umami (sans cookie) et Vercel Analytics toujours actifs ; GA4 seulement après consentement (bandeau RGPD).
- Allégations santé : uniquement les allégations autorisées ou « en attente » de la liste officielle (DGCCRF). Jamais de promesse thérapeutique.
- Dose de référence des boissons aloe vera, partout : 60 à 90 ml par jour.
- Seul le code MYFOREVER est affiché (pas d'autres codes promo).
- Le 4-Pack n'est jamais présenté comme une économie.
- Rafael choisit lui-même les photos ; elles peuvent être recadrées pour le format du site.
- Décision ouverte : vente directe sur espritaloe.fr (paiement sur le site, commande passée par Rafael). Non tranchée, ne pas concevoir pour.

## Brand Commitments

- Nom : **Esprit Aloé**. Logo choisi : rosette d'aloe de 5 feuilles en relief sur fond vert foncé (`public/logo.svg`, `public/logo.png`).
- Voix : vouvoiement, voix active, ton direct de distributeur qui parle en son nom, sans discours marketing gonflé.
- Rafael est une vraie personne identifiable (portrait `public/images/rafael/rafael-avenard-portrait.webp`, coordonnées, adresse pro, fiche Google Business).

## Evidence on Hand

- Expérience réelle de Rafael : distributeur depuis 2016, a commencé après une recommandation du programme C9 par son ostéopathe ; journal C9 (`src/content/journal/`).
- Ses produits les plus recommandés : Programme C9, pulpe aloe à la pêche, Aloe Gelly, déodorant, shampoing, Aloe Cooling Lotion.
- Photos produit et photos du parcours de commande (`public/images/produits/`, `public/images/commander/`).
- Audit UX par personas : `rapports/ux/2026-11-13-audit-6-personas.md`.
- **Absence à respecter** : pas encore d'avis clients réels publiés sur le site. Ne jamais inventer d'avis, de note, d'étoiles ni de témoignage ; ne pas afficher d'étoiles pleines sans avis réels.
- Pas de chiffres de revenus distributeur publiés : Rafael préfère en parler en rendez-vous.

## Product Principles

1. L'acheteur qui découvre passe en premier : chaque page doit l'aider à choisir et à rejoindre la boutique sans détour.
2. La confiance avant la vente : dire les limites, les contre-indications et les vrais prix vaut mieux qu'un argument de plus.
3. Une personne, pas une marque : Rafael est présent, joignable et identifiable sur le parcours.
4. Rapide et léger : le site reste statique et sans JavaScript inutile, parce que le SEO est le seul canal d'acquisition.
5. Jamais de preuve inventée : ni avis, ni chiffres, ni allégation non autorisée.
