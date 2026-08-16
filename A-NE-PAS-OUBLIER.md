# Esprit Aloé — À ne pas oublier
*Mise à jour : 15 août 2026*

## 🔴 Priorité haute — fenêtres de mesure actives

- [ ] **FAQ "dangereux"** (déployée le 9 août) : verdict prévu début septembre.
  Page `forever-living-avis-produits-france` **gelée**, ne pas toucher avant la mesure.
- [ ] **Journal C9** (`/mon-journal-c9/`, live depuis aujourd'hui) : nouvelle fenêtre
  de mesure GSC à ouvrir — comparer impressions/clics avant vs après sur les requêtes
  type "avis C9 Forever", "C9 Forever jour par jour". Première vraie mesure possible
  mi-septembre (le temps que Google indexe et que le journal avance vers le Jour 9).
- [ ] **Continuer le journal C9** jusqu'au Jour 9, puis rédiger l'article de synthèse
  ("Mon avis C9 après l'avoir testé") qui capitalisera sur le contenu du journal.
- [ ] **Ajouter les vraies photos** dans `public/images/journal/` — les 6 emplacements
  utilisent actuellement des placeholders "Photo à venir" générés automatiquement.

## 🟠 Priorité moyenne

- [ ] **Franchise cluster** / requête navigationnelle "forever" : re-évaluation
  prévue fin septembre (fenêtre insuffisante avant cette date).
- [ ] **Collecter de vrais avis clients** pour les fiches les plus vues sans avis
  (déodorant Ever Shield, dentifrice Bright Toothgel, savon liquide). Templates
  SMS/WhatsApp déjà rédigés dans une session précédente.
- [ ] **Image paysage article franchise** : remplacer l'image carrée 1090×1078 de
  `forever-living-franchise-ou-vente-directe` par un visuel ~1200×600 (ratio 2:1).
- [ ] **Renforcer l'article digestion** (`aloe-vera-digestion-bienfaits`) : position
  historiquement faible sur "aloe vera digestion", 3e mot-clé du site en volume.
- [ ] **Page Belgique** (`devenir-distributeur-forever-living-belgique`) : même
  recette que la page Suisse (qui, elle, est déjà live et ranke ~position 9).

## 🟡 Quand on aura le temps

- [ ] **Mise à jour Astro** (actuellement 6.3.5, la 7.2.2 est dispo) : séance dédiée,
  jamais en pleine optimisation. Tester en local avant push.
- [ ] **`npm audit fix`** : 8 vulnérabilités signalées (1 low, 7 high) au dernier
  `npm install`. Pas urgent, mais à traiter un jour calme, séparément du reste.
- [ ] **Bouton "Commander" du menu principal** : volontairement laissé tel quel
  (pas de produit précis associé) pendant qu'on observe les clics sortants vers
  Forever via le tracking GA4 mis en place aujourd'hui.

## ✅ Fait le 15 août 2026 (session complète C9 + conversion)

**Journal C9 (nouvelle collection Astro `journal`)**
- Nouvelle page `/mon-journal-c9/`, publiée en cours de rédaction (Jours 1-5/9)
- Design dédié ton violet (façon boîte C9), distinct du reste du site
- Sections : mensurations de départ, mon histoire, journal jour par jour (onglets
  CSS purs, zéro JS), galerie photos par jour, points à ne pas négliger, synthèse
  (masquée jusqu'au Jour 9)
- Maillage interne bidirectionnel : blog index (encadré dédié), guide C9, fiches
  produit vanille-pêche et chocolat-pêche ↔ journal

**Conversion**
- Popup site entier -15% (code `BIENVENUE15`, min. 50€, offre évènementielle
  Forever) — déclenchement exit-intent desktop / scroll ou délai mobile,
  anti-spam localStorage (7j, jamais après conversion)
- Code fidélité `FIDELE15` envoyé aux clients existants via le système Forever
  (email + relance automatique gérés par Forever)
- Composant **`CtaCommander.astro`** : menu à 3 choix (lien direct Forever en
  premier, appel téléphonique, formulaire contact), natif `<details>/<summary>`,
  zéro JS sauf auto-scroll à l'ouverture. Déployé sur : fiche produit (×4
  emplacements), cartes catégories, sidebar + bloc mobile des articles de blog.
- Bouton sticky "achat rapide" sur la page journal (photo + prix tirés
  automatiquement de la fiche produit liée)

**Tracking**
- Suivi des clics sortants vers `foreverliving.fr` via événement GA4
  `click_lien_forever` (page d'origine + URL cliquée), intégré au Layout global —
  couvre automatiquement tous les nouveaux boutons CtaCommander sans réglage
  supplémentaire

## 📌 Pour mémoire — avant le 15 août

- FAQ "fiables" (26 juillet) : validée, génère des clics (CTR 7%+)
- Redirections 301, schema `aggregateRating`/`review`, meta accueil réécrite,
  page Suisse live et validée (~position 9)
- Décision technique : suivi des clics finalement fait via GA4 (déjà en place
  sur le site) plutôt que Umami, envisagé un temps dans une session antérieure
