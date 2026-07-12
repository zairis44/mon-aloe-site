# Esprit Aloé — À ne pas oublier
*Mise à jour : 12 juillet 2026*

## 🔴 Priorité haute — prochaines séances

- [ ] **Collecter de vrais avis clients** pour les 3 fiches les plus vues sans avis :
  déodorant Ever Shield (34 imp.), dentifrice Bright Toothgel (27 imp.), savon
  liquide (21 imp.). 2-3 avis par produit suffisent (prénom + initiale, ville,
  note /5, témoignage). → Envoyer un SMS/WhatsApp personnalisé aux clients récents.
  Claude peut rédiger le message type (2 variantes : clients récents / fidèles).
- [ ] **Ajouter les blocs `avis:`** dans les fichiers .md dès que les retours arrivent
  (Claude fabrique les fichiers complets → zéro risque d'erreur YAML).
- [ ] **Surveiller l'apparition des étoiles** dans les SERP (schema déployé le 12/07,
  validé au test Google). Accélérer via inspection + demande d'indexation GSC sur
  Freedom, C9 vanille/choco et Pulpe d'aloe vera.

## 🟠 Priorité moyenne

- [ ] **Bloc "Mon retour personnel — Rafael"** sur les fiches produit : champ optionnel
  `retourPerso` dans le frontmatter, encart distinct des avis clients (angle E-E-A-T /
  Experience, 100 % légal car assumé comme distributeur). Idée validée le 12/07,
  à construire lors d'une séance dédiée.
- [ ] **Image paysage article franchise** : remplacer l'image carrée 1090×1078 de
  `forever-living-franchise-ou-vente-directe` par un visuel ~1200×600 (ratio 2:1).
  Rafael choisit l'image, Squoosh (1200px, WebP, qualité 75).
- [ ] **Renforcer l'article digestion** (`aloe-vera-digestion-bienfaits`) : position 33
  sur "aloe vera digestion" (32 imp., 3e mot-clé du site en volume). Contenu +
  maillage interne entrant.
- [ ] **Page Belgique** (`devenir-distributeur-forever-living-belgique`) : 24 impressions
  position 11,7 sans page dédiée. Même recette que la page Suisse.
- [ ] **Re-mesure GSC page distributeur** (fin juillet) : export filtré sur
  `/devenir-distributeur-forever-living/` avec comparaison 28j vs 28j précédents,
  pour juger l'effet du variant "revendeur".

## 🟡 Quand on aura le temps

- [ ] **Nettoyage `.gitignore`** : exclure les fichiers générés `.astro/` (6 fichiers
  committés au lieu de 2 le 12/07 — sans danger mais bruyant).
- [ ] **Mise à jour Astro 7** (actuellement 6.3.5, la 7.0.7 est dispo) : séance dédiée,
  jamais en pleine optimisation. Tester en local avant push.
- [ ] **Trancher les claims revenus** de la FAQ distributeur France (accord explicite
  de Rafael requis avant modification).
- [ ] **Dégeler aloe-mango et freedom** une fois la fenêtre de mesure GSC jugée propre.
- [ ] **Affiner encore le snippet accueil** si le CTR ne bouge pas d'ici fin août
  (meta déjà réécrite le 12/07 pour capter le rebond du site officiel).

## ✅ Fait le 12 juillet 2026 (pour mémoire)

- Redirections 301 des 3 URLs en 404 (`vercel.json`) + validation GSC
- Page bloquée robots.txt confirmée volontaire (pages légales)
- Analyse GSC complète : impressions x20 en 6 semaines, filon "avis" = 67 % des clics
- Meta description accueil réécrite (friction site officiel → opportunité)
- Schema `aggregateRating` + `review` sur le template produit, validé au test Google
