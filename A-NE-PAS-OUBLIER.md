# Esprit Aloé — À ne pas oublier
*Mise à jour : 28 août 2026*

## 🔴 Priorité haute — fenêtres de mesure actives

- [ ] **Titre de la page avis — à changer dès le verdict de début septembre.**
  Analyse concurrentielle complète : `rapports/concurrence/2026-08-29-cluster-avis-dangereux.md`.
  Constat : la page `/blog/forever-living-avis-produits-france/` est en position 6,4 avec
  2 169 impressions mais **2,21 % de CTR**, parce que son H1 (« ce que les clients français
  disent vraiment ») ne correspond pas à la requête n°1 du site (« les produits forever
  sont-ils dangereux », 229 impressions). Le concurrent en tête reprend la question mot pour mot.
  Preuve interne : sur « forever avis négatif », où intention et titre coïncident, le CTR monte
  à 6,52 %. → Réécrire title + meta description autour de la question de la sécurité.
  Objectif mesuré : 4-5 % de CTR à position équivalente, fenêtre de 4 semaines, ne rien
  modifier d'autre sur la page pendant la mesure.
- [ ] **Section sécurité à écrire** sur cette même page : aucun concurrent ne cite le règlement
  (UE) 2021/468 (interdiction des dérivés hydroxyanthracéniques dans les denrées alimentaires),
  qui est pourtant le cœur factuel de la question « l'aloe vera est-il dangereux ». Angle
  réglementaire et vérifiable — pas d'angle médical. **À valider par Rafael avant rédaction.**
- [ ] **Variante sans tiret** : « les produits forever sont ils dangereux » fait 63 impressions
  et 0 clic en position 6,3. Faire apparaître cette formulation naturellement dans une question
  de FAQ de la page.
- [ ] **Lot technique de l'audit** (rapport complet : `rapports/audit-seo/2026-08-28.md`) :
  entrée de menu « Nutrition » cassée dans `Header.astro` L36-42 et `404.astro` L60 ;
  H1 dupliqué sur les 34 fiches produit (`src/pages/produits/[slug].astro` L230 → `<p>`) ;
  23 `lienCommande` en `http://` à passer en `https://` ; compteur « 25 produits » faux (34) ;
  image manquante `public/images/recettes/shaker-fraises-chocolat.webp`.
- [ ] **CTR, pas position.** Search Console 28/07→25/08 : 51 clics, 3 207 impressions,
  **CTR global 1,59 %** alors que le site est en position 4-8 sur ses requêtes principales.
  Le problème est le clic, pas le classement → réécrire les 9 `title` > 60 caractères et
  les 5 `description` > 160 (liste dans le rapport d'audit), hors pages gelées.
- [ ] **Conclusion manquante** : `aloe-vera-sport-recuperation-musculaire.md` a perdu sa
  section finale quand les faux témoignages ont été retirés → ajouter « Ce qu'il faut retenir ».
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

- [ ] **Fiches produit invisibles** : toutes en position 40+ dans la GSC. Pas d'optimisation
  ponctuelle à faire tant que le problème est structurel — à traiter comme un chantier à part.
- [ ] **Doublon www** : `www.espritaloe.fr/` et `espritaloe.fr/` apparaissent séparément dans
  la GSC. Le canonical est correct (Google consolidera), mais une redirection 301 au niveau
  du domaine Vercel serait plus propre. Non urgent.
- [ ] **`.gitattributes`** avec `* text=auto eol=lf` : le passage sur Windows provoque des
  avertissements CRLF sur tout le repo, qui produiront un jour un diff illisible.
- [ ] Page Suisse orpheline et `/recettes-c9/` quasi-orpheline : correctifs de maillage
  rapides, mais **5 impressions et 0 impression** respectivement — l'audit les surévaluait.
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

## ✅ Fait le 28 août 2026 (mise en place des agents + passe conformité)

**Environnement de travail (nouveau)**
- Site désormais développé **sous Windows** (fin du travail sous Ubuntu), repo cloné dans
  `C:\Users\rafae\OneDrive\Desktop\SiteWeb\mon-aloe-site`
- VS Code + extension Claude Code + CLI v2.1.251 ; config dans `.vscode/`
  (extensions recommandées, tâches en un clic pour build / agents / export GSC)
- **5 sous-agents** dans `.claude/agents/` : `seo-content`, `astro-dev`, `fiches-produits`,
  `analytics`, `concurrence`. Chacun lit CE FICHIER en premier et ne touche pas aux pages gelées.
- Agent planifié Windows : `scripts/agent-run.ps1` + `scripts/install-taches.ps1`
  (missions audit-seo / veille / concurrence / analytics). **Pas encore installé** — à activer
  seulement quand les rapports manuels auront prouvé leur utilité.

**Search Console branchée**
- `scripts/gsc-export.mjs` (zéro dépendance npm) exporte requêtes, pages, croisement
  page × requête et évolution quotidienne dans `data/analytics/`
- Compte de service Google `lecteur-gsc@espritaloe-seo.iam.gserviceaccount.com`, autorisé en
  lecture dans la Search Console ; clé JSON **hors du repo** dans `C:\Users\rafae\.secrets\`
- Config dans `.env` (ignoré par git) ; procédure complète dans `GSC-SETUP.md`

**Conformité — corrigé**
- **Avis clients fictifs supprimés** dans 3 fichiers : `index.astro` (Sylvie M. / Karim B. /
  Élodie R.), `aloe-vera-stress-sommeil-naturel.md`, `aloe-vera-sport-recuperation-musculaire.md`.
  Sur l'accueil, remplacés par un encart renvoyant vers `/mon-journal-c9/` (vécu réel documenté).
  → Risque DGCCRF écarté, et cohérence avec un positionnement entièrement fondé sur la confiance.
- **Allégations de revenus retirées** de `devenir-distributeur-forever-living.astro` :
  « 500 à 2000 € par mois » supprimé, « 9,3 Mds$ » non sourçable remplacé, plusieurs formulations
  alignées sur la prudence de la page Suisse.

**6 articles tronqués complétés** (troncatures antérieures, présentes dans le dépôt d'origine —
elles étaient visibles en production) : `aloe-vera-stress-sommeil-naturel`,
`aloe-vera-cheveux-cuir-chevelu-bienfaits`, `aloe-vera-systeme-immunitaire-defenses-naturelles`,
`forever-freedom-aloe-vera-articulations-mobilite`,
`perdre-du-poids-naturellement-forever-programmes-minceur`, `aloe-vera-peau-beaute-bienfaits-forever`.
Deux d'entre elles coupaient **au milieu d'une mise en garde santé** — avertissements rétablis
intégralement. Conformité CE 1924/2006 vérifiée.

**Décision éditoriale** : pas de contenu à angle médical sur le site. La requête « avis médical /
avis médecin » (≈100 impressions/mois, position 5-8, aucune page dédiée) est **volontairement
laissée de côté** — Rafael n'est pas médecin et ne souhaite pas se placer sur ce terrain.

**Analyse concurrentielle du cluster avis/dangereux** réalisée le 29 août — rapport dans
`rapports/concurrence/2026-08-29-cluster-avis-dangereux.md` (priorités septembre ci-dessus).

**Pages gelées : aucune touchée.** `forever-living-avis-produits-france.md`,
`mon-journal-c9.astro`, `c9-aout-2026.md`, l'article franchise et le bouton « Commander »
n'ont reçu aucune modification. Le lien interne vers la page en mesure a été conservé.

**Risque signalé, à trancher mi-septembre** : `c9-forever-avis.md` cible le mot-clé suivi
dans la fenêtre de mesure du journal C9 — à aligner une fois le verdict rendu.

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
