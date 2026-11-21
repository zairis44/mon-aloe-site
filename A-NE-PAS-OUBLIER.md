# Esprit Aloé — À ne pas oublier
*Mise à jour : 21 novembre 2026 (lien de parrainage distributeur)*

- **/a-propos/ (20/11, demande de Rafael)** : la photo du profil devient le même portrait que `/contact/` (`rafael/rafael-avenard-portrait.webp`, 256 × 256, affiché en 288 × 288 : légèrement agrandi). À remplacer par une version plus grande avec la photo prévue après le coiffeur. L'encadré auteur des articles utilise encore l'ancienne `rafael-avenard.webp`.

## Lot AN du 21 novembre 2026 — lien de parrainage distributeur

- **Lien d'inscription distributeur** donné par Rafael (21/11) : `https://join.foreverliving.fr/ref/330001628607`. Il n'apparaissait nulle part sur le site (seul le lien boutique client `foreverliving.fr/ref/…` était utilisé). Constante partagée `LIEN_PARRAINAGE` dans `src/lib/forever.ts` (avec `LIEN_BOUTIQUE`), `rel="sponsored noopener noreferrer"`.
- **`/devenir-distributeur-forever-living/`** : 3 emplacements. En-tête : bouton « M'inscrire comme distributeur » (remplace « Voir les étapes », gardé en lien texte dessous). Section « Démarrer en 4 étapes » : « Déjà décidé ? Inscris-toi en ligne… » sous le bouton d'appel (l'appel reste l'action principale : Rafael préfère en parler avant). CTA final : 3e bouton « M'inscrire en ligne ».
- **Pied de page** (toutes les pages, donc aussi l'accueil) : lien « Devenir distributeur Forever avec moi : inscription en ligne ↗ » sous le téléphone.
- **Suivi** : le domaine `join.foreverliving.fr` est déjà compté par GA4 (`click_lien_forever`) et Umami (`clic-boutique`) ; filtrer sur le lien `join.foreverliving.fr` pour isoler les clics d'inscription.
- **Pas fait** : bloc distributeur du corps de l'accueil (page en mesure jusqu'au 9/12, décision de Rafael attendue) ; page Suisse (lien valable pour la Suisse ? à confirmer par Rafael) ; article pyramidal (en mesure : le point ouvert « lien d'inscription distinct du lien boutique » est maintenant résolu, à intégrer après le bilan).

## Lot AM du 20 novembre 2026 (soir) — groupe « Acheter Forever en France » (plan validé par Rafael)

- **Constat** (Semrush France, 20/11) : l'accueil porte seul tout le groupe : « forever living » 1 900–2 400/mois (pos. 11), « forever living products france » 1 300 (11), « forever living france » 590 (7-8), « foreverliving france » 480 (17), « forever france » 170 (12), « forever commande en ligne » 140 (8). `/commander/` et `/catalogue-forever/` ne sortaient sur **aucune** requête. Le top 5 est tenu par Forever (foreverliving.fr/.com, Facebook, Instagram, Wikipédia) : objectif réaliste = **1er distributeur**, devant aloeveraforever (page dédiée `/forever-living-products-france/`) et aloe-vera-pour-tous (`/france`, `/commander-vos-produits-forever`).
- **Découpage par intention** : accueil = « Forever Living France / distributeur » ; `/commander/` = « commander / acheter / boutique en ligne » ; `/catalogue-forever/` = « catalogue / liste des produits / prix » ; `/produits/` garde « produits forever » (390/mois).
- **`/commander/`** : title « Commander Forever en ligne : boutique Forever Living France », H1 « Acheter et commander les produits Forever Living en France », meta réécrite. Ajouts : encadré « l'essentiel » (où, avec qui, MYFOREVER, livraison), pas-à-pas en 5 étapes (lien, compte, panier, MYFOREVER, livraison et paiement), tarifs de livraison chiffrés (référence canonique), section « boutique officielle, Amazon ou revendeur », FAQ passée de 6 à 9 questions (où acheter, sans distributeur ?, code, livraison, Amazon/pharmacie, Belgique/Suisse/DOM-TOM), schéma BreadcrumbList ajouté. Aucun moyen de paiement ni condition de retour Forever cité (non vérifiés).
- **`/catalogue-forever/`** : title « Catalogue Forever 2026 : liste des produits et prix », H1 « Catalogue Forever Living 2026 », meta réécrite. Nouvelle section `#liste-prix` : tableau des 49 produits par gamme (nom, référence, prix, lien fiche, « dès » si les versions ont des prix différents), généré depuis la collection produits. FAQ de 4 questions (PDF, prix identiques, commander, débuter) avec schéma FAQPage.
- **Maillage** (pages hors mesure) : articles « choisir un distributeur fiable » (→ commander + liste des prix), « quelle boisson choisir » (→ commander), « FBO comment ça marche » (→ commander ; correction : le client n'achète pas « directement », il est rattaché à un distributeur), `/code-promo-forever/` (→ commander), `/quel-produit-forever-choisir/` (→ catalogue + commander).
- **Pas de capture d'écran** dans le pas-à-pas pour l'instant : à ajouter si Rafael envoie des captures de l'inscription sur la boutique.
- **Mesure : démarre le 20/11** pour `/commander/` et `/catalogue-forever/`. À ajouter à `frozenPages` dans `espritaloe-seo` (non fait : accès au repo refusé dans la session du 20/11 soir).
- **Après le 9/12 (accueil)** : H1 avec « Forever Living France » (aujourd'hui « L'aloe vera qui vous fait du bien »), title recentré « distributeur Forever Living France » **sans « commande »** (cannibalisation avec `/commander/`), bloc renvoyant vers `/commander/`. Puis `/produits/` sur « produits forever ».
- **Ensuite** : autorité (liens réels : fiche Google, Facebook, Instagram, partenaires locaux), seul levier pour passer de la 11e place au top 10 sur « forever living » et « forever living products france ».

## Lot AL du 20 novembre 2026 (soir) — questions Google sans réponse

- **Analyse** : questions les plus posées (Semrush `phrase_questions` « aloe vera » + suggestions Google Ubersuggest sur « aloe vera », « gel aloe vera », « forever living », « c9 forever ») comparées aux ~830 H2/H3 et FAQ du site. Bien couvert : visage, utilisation, moment de prise, danger/effets indésirables, avis médecin, « que choisir », bébé/enfant, yeux, boutons.
- **Ajouté** (accord de Rafael) : 3 questions dans la FAQ de `/blog/gel-aloe-vera-bienfaits-utilisation/` : « Peut-on boire de l'aloe vera tous les jours ? » (210 + 110/mois), « Est-ce que l'aloe vera se mange ? » (90), « Pourquoi mon gel d'aloe vera devient-il marron ? » (variantes brunit / marron / sent mauvais dans les suggestions Google).
- **Après le 9/12** : ajouter « Peut-on boire de l'aloe vera tous les jours ? » en FAQ de `comment-boire-pulpe-aloe-vera` (page en mesure).
- **Non traité, à décider par Rafael** : entretien de la plante (quelle terre ~650/mois, entretenir ~680, où la placer 480, dehors l'hiver 430, bouture ~340, devient marron 170) : beaucoup de trafic, peu d'acheteurs. Questions animaux (chat, chien, cheval) : écartées (vétérinaire).
- Semrush : 4 000 unités utilisées (dont 2 000 perdues sur « forever », qui ramène des titres de chansons) ; ~15 200 restantes.

## Lot AK du 20 novembre 2026 (soir) — 3 fiches produit : Lean, Move, Calcium

- **Contexte** : Rafael voulait 3 fiches produit (et non 3 articles, lot AJ : malentendu ; Rafael a décidé le 20/11 de garder les 3 articles).
- **Choix** : produits absents du site les plus recherchés (Semrush 20/11) : Forever Lean (110/mois), Forever Move (70), Forever Calcium (50). Forever Kids (70) mis de côté : complément pour enfants, accord de Rafael à demander.
- **Fiches** (données officielles Forever du 20/11) :
  - `/produits/forever-lean/` (réf. 289, 44,49 €, 120 capsules, nutrition). Seule allégation : chrome (glycémie normale, métabolisme des macronutriments). Pas de « piège les graisses / bloque les sucres », pas de chiffre de perte de poids. Précautions grossesse, diabète/traitement glycémie. Comparaison Therm (caféine) / Lean (sans caféine).
  - `/produits/forever-move/` (réf. 551, 68,95 €, 90 capsules, sport et fitness). Aucune allégation (NEM, curcuma). Précautions : anticoagulants (Forever), allergènes œuf/poisson/soja, prudence ANSES curcuma (foie, vésicule, traitements). Renvoie vers la fiche Freedom (gelée, non modifiée).
  - `/produits/forever-calcium/` (réf. 206, 35,61 €, 90 comprimés, nutrition). Allégations calcium, vitamine D, magnésium (os, muscles). Manganèse et vitamine C non repris : quantités par dose inconnues. Déconseillé aux moins de 18 ans, usage prolongé déconseillé (Forever).
- **Images** (choisies par Rafael, 20/11) : visuels officiels Forever en mise en scène (Move sur tapis de sport, Calcium avec arrosoir et marguerites, Lean sur plan de travail), carrés, webp q80.
- Associations et libellés dans `maillage.ts` (rien ajouté côté Freedom : fiche en mesure). 104 → 107 pages. **Mesure : démarre le 20/11.**

- **Fiche Forever Kids** (accord de Rafael, 20/11) : `/produits/forever-kids/` (réf. 354, 20,48 €, 120 comprimés à croquer, nutrition, dès 4 ans). Allégations enfants : vitamine D (croissance et développement osseux), fer (développement cognitif) ; B6, B12, C (immunité, fatigue). Mise en garde : ne pas cumuler avec vitamine D ou fer prescrits, boîte hors de portée (excès de fer). Précautions Forever reprises (grossesse, anticoagulants, surcharge en fer, thyroïde, sulfites, polyols). Pas de « tonus / fatigue de l'enfant ». Goût non précisé (Forever annonce fraise, la liste indique un arôme raisin). Image choisie par Rafael (visuel officiel Forever, enfants à table), 1200 × 1200.

## Lot AJ du 20 novembre 2026 (soir) — 3 articles beauté (cocon aloe vera par usage)

- **Choix** (Semrush, base France, 20/11) : « creme aloe vera » 1 600/mois ; « aloe vera coup de soleil » 880 + « aloe vera brulure » 390 + « aloe vera apres soleil » 210 (saisonnier, pic en été : publié maintenant pour être installé avant juin) ; « aloe vera visage » 1 000 + « gel aloe vera visage » 720. Écartés : « propolis bienfaits » (5 400) et « gelée royale bienfaits » (2 400), car doublon avec les pages glossaire et aucune allégation autorisée.
- **Nouveaux articles** (catégorie beauté, sans image : **à choisir par Rafael**, 1200 × 600) :
  - `/blog/creme-aloe-vera-laquelle-choisir/` : textures, lecture d'étiquette (aloe vera en tête, teneur, parfum, alcool), tableau chiffré de la gamme (Gelly, Aloe First, Moisturizing Lotion, Body Lotion, Propolis Crème), conseil par type de peau, Forever ou pharmacie.
  - `/blog/aloe-vera-coup-de-soleil/` : premiers gestes et signes de consultation d'après Santé.fr (fiche « Coup de soleil (érythème solaire) » du 12/08/2026, citée en source), place du gel, ce qu'il ne fait pas (pas d'indice, pas sur cloques), plante du jardin.
  - `/blog/aloe-vera-visage/` : tableau par type de peau, routine en 3 gestes (Logic Nettoyant, gel, crème), masque express, erreurs à éviter. Renvoie vers l'article peau (en mesure, non modifié) pour les généralités.
- Ajoutés aux guides de la catégorie crèmes et gels (`maillage.ts`) et à `public/llms.txt`. 101 → 104 pages.
- **Images** : coup de soleil = photo Pexels choisie par Rafael (dos, cœur de crème sur l'épaule), recadrée en 1200 × 600 (20/11). Crème : 1re photo refusée (feuille de cannabis/CBD, hors sujet) ; 2e photo Pexels (femme en serviette, pot de crème) passée de vertical à 1200 × 600 avec fond mural prolongé sur les côtés. Visage : photo Pexels choisie par Rafael (soin du visage en institut), recadrée en 1200 × 600 en retirant le logo « lèvres » du t-shirt.
- **Après le 9/12** : liens depuis l'article peau et l'article Gelly 8 usages vers ces 3 articles.
- **Mesure : démarre le 20/11.**

## Lot AI du 20 novembre 2026 (soir) — 3 nouvelles fiches produit

- **Méthode** : catalogue complet de foreverliving.fr relevé le 20/11 via l'API publique du site (~120 références), comparé aux fiches du site ; volumes Semrush (base France) des produits absents. Retenus : **Aloe First** (« aloe first forever » 110 + 10/mois), **Aloe Moisturizing Lotion / Crème Visage et Corps Aloès** (« aloe moisturizing lotion » 90/mois), **Forever Bee Propolis** (« forever bee propolis » + « forever propolis » 100/mois).
- **Nouvelles fiches** (données officielles Forever du 20/11 : prix client, contenance, INCI ou composition, mode d'emploi, précautions) :
  - `/produits/forever-aloe-first/` (réf. 40, 32,50 €, 473 ml, crèmes et gels). ~80 % d'aloe vera (fiche distributeur Forever), propolis, allantoïne, 11 extraits de plantes, pas de parfum dans l'INCI. Précautions ruche + astéracées. Retirés : « réparatrice des peaux lésées », « accélère la réparation des tissus » (allégations de Forever non reprises).
  - `/produits/forever-aloe-moisturizing-lotion/` (réf. 63, 24,40 €, 118 ml, crèmes et gels). 36 % d'aloe vera, collagène, élastine, acide hyaluronique, abricot, jojoba. Parfum + allergènes déclarés signalés. Pas de promesse anti-âge (collagène = hydratation de surface).
  - `/produits/forever-bee-propolis/` (réf. 27, 46,96 €, 60 comprimés, nutrition, ~1,57 €/jour). Aucune allégation (propolis : rien d'autorisé ni en attente). Précautions soja / antécédents de cancer du sein (mention Forever), ruche.
- **Aloe Moisturizing Lotion = nouveauté** (signalée par Rafael le 20/11 ; Forever la marque « nouveau » dans son API) : nouveau packaging fin 2026 et nom international à la place de « Crème Visage et Corps Aloès ». Mentionné en tête de fiche, dans la description, la meta et la FAQ. À retirer de la meta vers mars 2027, quand ce ne sera plus une nouveauté.
- **Images** (choisies par Rafael, 20/11) : visuels officiels Forever (Aloe First sur fond bleu, Moisturizing Lotion nouveau tube sur fond violet, Bee Propolis en mise en scène), carrés, webp q80.
- Maillage : associations et libellés dans `maillage.ts` (Aloe First ↔ Gelly / shampoing / Crème Aloès ; Crème Aloès ↔ Gelly / Propolis Crème / Aloe First). Glossaire : propolis (+ Aloe First, Bee Propolis), gelée royale (+ Bee Propolis), allantoïne (+ Aloe First, Crème Aloès), huile de jojoba (+ Crème Aloès), aloe vera stabilisé (+ Aloe First, Crème Aloès). 98 → 101 pages.
- **Écartés pour l'instant** : Forever Lean (110/mois) : vérifier d'abord dans le tableau DGCCRF si nopal et haricot blanc ont une allégation en attente, sinon fiche limitée à l'allégation du chrome ; Multi-Maca et Active Pro-B (déjà écartés, lot T) ; Forever Kids (70/mois, produit pour enfants : à voir avec Rafael).
- **Info** : l'Aloe Heat Lotion n'est **pas** vendue par Forever France (absente du catalogue du 20/11) : pas de fiche à créer.
- **Mesure : démarre le 20/11** pour les 3 fiches.

## Lot AH du 20 novembre 2026 (soir) — fiches et article tirés de la veille Semrush

- **Source** : relevé Semrush du 20/11 (doc projet `claude/veille-concurrentielle.md`, section « D'où vient leur trafic »). aloe-vera-pour-tous.com tire ~720 visites/mois de « aloe vera gelly cheveux » (2 900/mois, difficulté 19) avec sa fiche Gelly, ~1 030 de sa fiche Propolis, ~1 400 de son article « comment et pourquoi utiliser du gel d'aloe vera ». espritaloe.fr n'était positionné sur aucune de ces requêtes.
- **Fiche Aloe Vera Gelly** : nom/H1 « Forever Aloe Vera Gelly : gel d'aloe vera pour la peau et les cheveux », seoTitle « Aloe Vera Gelly Forever : bienfaits peau et cheveux », meta réécrite. Nouvelle section « Aloe Vera Gelly sur les cheveux : 3 façons de l'utiliser » (masque avant shampoing, gel coiffant léger, masque de nuit, d'après la fiche distributeur Forever). **Corrections factuelles** : l'ancien seoTitle disait « 100 % aloe » et la FAQ « sans additif » ; la composition réelle (fiche Forever #061) contient ~84 % de gel d'aloès, glycérine, carbomer, triéthanolamine, conservateurs. Composition et FAQ alignées. FAQ ajoutées : cheveux, pousse/chute (non), Gelly ou Propolis.
- **Fiche Aloe Propolis Crème** : nom/H1 « Forever Aloe Propolis Crème : crème à l'aloe vera et à la propolis », seoTitle « Aloe Propolis Crème Forever : crème aloe vera et propolis », meta réécrite. **Corrections factuelles** (fiche Forever #051) : la formule contient un **parfum (dont coumarine)** et de la **lanoline**, pas de vitamine A dans la liste INCI (vitamines C et E). Précautions allergie complétées, FAQ « parfum ? » et « Propolis ou Gelly ? », lien glossaire propolis.
- **Fiche Bee Pollen** : seoTitle « Bee Pollen Forever : pollen d'abeille en comprimés », `coutJour` (~0,68 €/jour), section « Ce que Bee Pollen ne promet pas » (aucune allégation pollen), FAQ Bee Pollen ou Royal Jelly, grossesse/enfants, liens glossaire gelée royale et propolis.
- **Nouvel article pilier** `/blog/gel-aloe-vera-bienfaits-utilisation/` (« Gel d'aloe vera : bienfaits, utilisation et comment bien le choisir ») : gel à appliquer vs pulpe à boire (tableau), peau, cheveux, boisson (allégation en attente digestion, 60 à 90 ml), tableau besoin → geste → produit, 5 points à lire sur l'étiquette (dont le mythe du « 100 % pur »), plante du jardin, précautions. Renvoie vers les articles détaillés (peau, cheveux, Gelly 8 usages, comment boire, dangers, comparatif). Image choisie par Rafael (photo Pexels verticale d'un plant d'aloe vera, recadrée en 1200 × 600 sur les feuilles, webp). Ajouté aux guides de la catégorie crèmes et gels (`maillage.ts`) et à `public/llms.txt`.
- **Mesure : démarre le 20/11** pour les fiches Gelly, Propolis, Bee Pollen et le nouvel article.
- **Non fait volontairement** : fiche Aloe Heat Lotion (pas vendue par Forever France, voir lot AI) ; fiche C9 (cluster C9 en attente : inspection de `/blog/c9-forever-avis/` et répartition des requêtes C9 avant de toucher la fiche) ; aucun lien ajouté depuis les articles en mesure (Gelly 8 usages, peau, cheveux, comment boire) vers le nouvel article : à faire après le bilan du 9/12.
- **À revoir après le 9/12** : l'article Gelly 8 usages dit de rincer le gel sur le cuir chevelu ; la fiche propose aussi un usage sans rinçage en gel coiffant léger (sur cheveux humides, petite dose). Harmoniser si besoin. La FAQ de la fiche C9 contient encore « relancer votre digestion, alléger l'organisme » : à reformuler lors de la prochaine retouche de la fiche.

## Lot AG du 20 novembre 2026 — outil SEO maison + fiche Freedom

- **Outil SEO maison** : repo privé `zairis44/espritaloe-seo` (collecte nocturne Search Console, sitemaps des 4 concurrents, Google Suggest ; tableau de bord Vercel protégé). Claude le pilote depuis le chat (doc projet `claude/outil-seo-mode-emploi.md`).
- **Fiche Forever Freedom** (pas en mesure jusqu'ici) : seoTitle « Forever Freedom : composition, posologie, effets secondaires » et meta réécrite, pour les requêtes « forever freedom posologie » (pos. 8,3) et « forever freedom effet secondaire » (pos. 9). Questions de la FAQ alignées. Allégation « aide à soutenir la digestion » retirée de la meta. **Mesure de la fiche : démarre le 20/11.**
- **Pages en mesure, à ne pas toucher avant le bilan du 9 décembre** : accueil (13/11), article stress/sommeil (13/11), avis Forever et avis C9 (14/11), `/produits/` et article Freedom (15/11), fiche Freedom (20/11).
- **À vérifier** : `/blog/c9-forever-avis/` n'a eu aucune impression depuis le 28/10 (30 au total depuis août). Les requêtes C9 sortent sur l'article avis et sur `/blog/`. Inspecter l'URL dans la Search Console (indexée ? canonique choisie par Google ?).
  - **Inspecté le 20/11 (soir)** : page **indexée**, canonique déclarée = canonique Google (pas de doublon), exploration autorisée. Mais **dernière exploration le 19 août 2026** : Google n'a pas revu les modifications des 12 et 14/11. Environ 10 liens internes y mènent (dont l'article avis Forever). Semrush (20/11) : « cure c9 forever avis » sort en pos. 6 sur l'article avis Forever et en pos. 28 sur `c9-forever-avis` → les deux pages se disputent la requête. **Actions** : demande d'indexation au prochain quota disponible ; après le bilan du 9/12, différencier les deux pages (renvoyer franchement les requêtes C9 de l'article avis Forever vers `c9-forever-avis`, ancre plus explicite).
- **Offre de bienvenue permanente** (confirmée par Rafael le 20/11) : **code MYFOREVER**, −15 % dès 50 € pour les nouveaux clients, à leur inscription sur la boutique Forever (commande passée à l'inscription). `OFFRE_BIENVENUE` dans `src/data/offres.ts`. La page `/code-promo-forever/` l'affiche quand aucune promotion datée n'est en cours, donc à partir du 1/12. Title et meta réécrits pour l'offre permanente (« Code promo Forever : −15 % pour les nouveaux clients »). FAQ « réduction toute l'année ». **Mesure de la page : démarre le 20/11.** Contexte : aloeprevention.fr affiche « 15 % permanent dès 30 € » (doc projet `claude/veille-aloeprevention.md`).
- **MYFOREVER partout** :
  - `OFFRE_PERMANENTE` (offres.ts) sert de secours au popup et au bandeau. Ils l'affichent automatiquement dès qu'aucune offre datée n'est active, à partir du 1/12 après le Black Friday.
  - Pour une future promo : remplacer seulement `OFFRE_EN_COURS`. MYFOREVER reprend la main à la fin de la promo.
  - Fiches produit : encadré « Nouveau client ? −15 %… code MYFOREVER » sous les boutons Commander (`MentionBienvenue.astro`).
- **Riposte concurrent (publiée le 20/11)** : nouvel article `/blog/choisir-distributeur-forever-fiable/` (« Comment choisir un distributeur Forever fiable ? »), écrit à partir des réponses de Rafael. Il répond à l'article d'aloe-vera-pour-tous du 20/11 « Comment choisir un conseiller en aloe vera fiable et adapté ? ». Contenu : prix identiques partout, signes d'un distributeur sérieux, tableau des signaux d'alerte, 5 questions à poser, méthode de Rafael (déplacement dans le 44 pour faire tester les produits, communauté de distributeurs, orienter vers une autre gamme plutôt que vendre un produit inadapté). Image choisie par Rafael (photo Pexels, recadrée sur les mains et les documents en 1200 × 600, webp).
- **Image ajoutée (choisie par Rafael, 20/11)** : `comment-boire-pulpe-aloe-vera.webp` (photo Pexels verticale passée en 1200 × 600, fond blanc prolongé sur les côtés pour garder le verre et l'aloès entiers). Le texte de l'article n'est pas touché (page en mesure depuis le 13/11).
- **Images recadrées en 1200 × 600 (accord de Rafael, 20/11)** : digestion, peau, sport, immunité (`*-paysage.webp`). Les anciennes images sont gardées si elles servent ailleurs. Franchise : visuel « 45 Years of Forever » remis en 1200 × 600 (visuel carré centré, fond bleu texturé prolongé sur les côtés, `-paysage.webp`), alt réécrit.
- **Image ajoutée (choisie par Rafael, 20/11)** : comparatif des pulpes (`pulpe-aloe-vera-comparatif-marques.webp`, recadrage paysage de la photo des 4 boissons Forever).
- **Image ajoutée (choisie par Rafael, 20/11)** : article Aloe Gelly (`aloe-vera-gelly-utilisation.webp`). Photo carrée passée en 1200 × 600, côtés prolongés en miroir pour garder le tube entier. Texte de l'article non touché (en mesure).
- **Image ajoutée (choisie par Rafael, 20/11)** : article vente à domicile / VDI (`vente-a-domicile-aloe-vera-vdi.webp`, recadrage 1200 × 600). Texte non touché (en mesure).
- **Photo de Rafael sur /contact/** (20/11) : portrait provisoire (photo de plage recadrée, sans son ami) à la place de l'emoji 🌿 dans la carte « Rafael Avenard », `public/images/rafael/rafael-avenard-portrait.webp` 256 × 256 (premier recadrage, choisi par Rafael). **À remplacer** par la photo prévue après le coiffeur.
- **Nouvel article (20/11)** : `/blog/quelle-boisson-aloe-vera-forever-choisir/`. Comparatif nature / pêche / Berry Nectar / mangue, avec l'avis de Rafael : la pêche est sa préférée, elle remplace les boissons sucrées, et il la conseille pour démarrer. Il la mélange aussi à la FAB Active Boost en « cocktail » sans alcool (précautions caféine ajoutées). Chez ses clients, le nature et la pêche dominent. Répond à l'article d'aloe-vera-pour-tous « Meilleures boissons à l'aloe vera » du 20/11. Image : la même que le comparatif des pulpes (choix de Rafael).
- **Page Loire-Atlantique** : section « se rencontrer » mise à jour. Rafael se déplace dans tout le 44, Nantes compris, pour faire tester les produits (avant : « Nantes = téléphone »). Ajout de MYFOREVER et d'un lien vers le nouvel article. **Mesure : démarre le 20/11.**

## Lot AF du 15 novembre 2026 (soir) — Umami, mesure sans cookie

- **Umami Cloud** (compte créé par Rafael, offre gratuite Hobby : 100K événements/mois, 1 site, 6 mois d'historique). Composant `src/components/MesureUmami.astro`, chargé dans le `<head>` de `Layout.astro` pour **tous** les visiteurs, sans bandeau. `data-domains="espritaloe.fr"` (aperçus Vercel et local non comptés), `data-do-not-track="true"`.
- Événement **`clic-boutique`** (page d'origine + lien sans paramètres) sur tout clic vers foreverliving.fr. Tableau de bord : cloud.umami.is → site → Événements.
- Cadre : exemption de consentement CNIL (lignes directrices du 04/07/2025, grille d'auto-évaluation ; plus de liste officielle depuis le 1er janvier 2026). Ne rien activer dans Umami qui sorte de la mesure d'audience (enregistrement de session, identifiant utilisateur…).
- **GA4 inchangé**, toujours derrière le bandeau (le Consent Mode avancé a été écarté : hors exemption CNIL, et la modélisation exige ~1 000 événements refusés/jour).
- Page `/confidentialite/` : section « Statistiques de fréquentation sans cookie (Umami) », mention en 2 et 7, date « novembre 2026 ». Région d'hébergement Umami : **UE** (confirmé par Rafael le 15/11), mentionnée sur la page. Exclure ses propres visites : ouvrir une fois `https://espritaloe.fr/?stats=off` dans chaque navigateur (`?stats=on` pour réactiver) → pose `localStorage umami.disabled=1`. Fait le 15/11 dans le navigateur intégré Claude ; reste Chrome Mac, PC Windows, téléphone.

## Lot AE du 15 novembre 2026 (soir) — Instagram, GA4, maillage

- **Instagram** : compte @esprit.aloe créé par Rafael (https://www.instagram.com/esprit.aloe/). Ajouté au `sameAs` (Layout, contact, à propos, page Loire-Atlantique) et en bloc sous Facebook sur `/contact/`. Reste côté Instagram : compte pro Entreprise, champ Nom, bio avec « Entrepreneur indépendant partenaire Forever Living Products », lien en bio `https://espritaloe.fr/?utm_source=instagram&utm_medium=social&utm_campaign=bio`, 3 posts épinglés. Pas de « Forever » ni « C9 » dans le @ ou le champ Nom (compliance Forever).
- **PageSpeed desktop** retesté par Rafael après le correctif CLS du lot AA : OK.
- **GA4** : `click_lien_forever` arrivait bien (visible dans Admin → Événements récents) mais n'était pas marqué. **Passé en événement clé le 15/11** → visible dans Rapports → Engagement → Événements clés sous 24–48 h. Pages d'origine et liens cliqués : dimensions prédéfinies « Chemin de la page » et « URL du lien » (pas de dimension personnalisée nécessaire). Limite : 15 utilisateurs GA4 sur 28 jours (bandeau de consentement), à lire comme une tendance, pas un total.
- **Maillage** : page Suisse (1 seul lien entrant) → + lien depuis `/a-propos/` et l'article franchise (paragraphe VDI). `/recettes-c9/` (2 liens entrants) → + lien depuis l'article minceur (section jours 3 à 9) et la fiche C9. Aucune page en mesure touchée.
- `PAGES_GELEES` (maillage.ts) vidé le 15/11 sur décision de Rafael : pulpe, FAB et savon avocat reçoivent à nouveau les blocs « produits associés » et guides.

## Lot AD du 15 novembre 2026 (soir) — article comparatif « pulpe d'aloe vera : comparatif des marques »

- **Nouvel article** `src/content/blog/pulpe-aloe-vera-comparatif-marques.md` (audit IA, levier n° 1 : contenu comparatif citable). 6 produits à plus de 99 % d'aloe vera, 1 L : Forever Aloe Vera Gel, Pur Aloé gel et jus bio, Superdiet gel bio, MKL gel bio, Nat&Form jus bio. Critères : teneur, forme, bio, IASC, additifs, prix au litre, coût par jour à 60–90 ml.
- **Conformité (publicité comparative, art. L122-1 Code de la consommation)** : déclaration d'intérêt en tête, données vérifiables avec sources et date de relevé (15/11/2026), aucun dénigrement, verdict par critère (Forever n'est pas présenté comme le meilleur en tout : plus cher ×2 à ×3, pas de label bio). Aucune allégation santé.
- LR non retenu : pas de prix public officiel trouvé en France. Aloïne : on cite le seuil de 1 ppm appliqué par les contrôles DGAL (campagne 2024 : 91 % conformes) ; la base européenne (règl. 2021/468) a été partiellement annulée par le Tribunal de l'UE fin 2024, donc pas de mention d'une règle européenne.
- **Prix à revérifier tous les 6 mois** (et `updatedDate`) ; prix Forever = celui de la fiche.
- CSS : les tableaux d'article défilent horizontalement dans leur cadre sur mobile (< 768 px) au lieu d'élargir la page (vaut pour tous les articles avec tableau, texte inchangé).
- `public/llms.txt` : article ajouté.
## Lot AC du 15 novembre 2026 (soir) — réponses directes sous les titres-questions, suivi IA

- **Réponses directes (audit IA, point 2)** : passage en revue des H2 en forme de question. La plupart commencent déjà par la réponse. Repris : FBO « Pourquoi Business Owner… » (réponse en première phrase) et « Client ou FBO : quelle différence ? » (réponse de ~50 mots avant la liste) ; Freedom « Pour qui… » (phrase de synthèse + renvoi à l'avis médical). `updatedDate: 2026-11-15` sur ces 2 articles (**mesure : repart du 15/11**).
- **Non touchés volontairement (en mesure)** : avis Forever, avis C9, dangers, digestion, pyramide, comment boire la pulpe, VDI, Gelly, guide C9 (attend la répartition des requêtes C9).
- **Article Freedom — allégations nettoyées (accord de Rafael, 15/11)** : retirés « premiers effets après 4 à 6 semaines », « bénéfice structurel sur le cartilage », « aide à maintenir l'intégrité du cartilage », « peut ralentir leur dégradation », l'intro « 10 millions d'arthrosiques / solution naturelle », « Aloe MSM Gel particulièrement efficace / apaisement en quelques minutes ». Ajouté : aucune allégation autorisée pour glucosamine, chondroïtine, MSM (EFSA) ; seule allégation conservée : vitamine C et collagène/cartilages (autorisée). Title, seoTitle et meta inchangés. Fiches Freedom et MSM Gel vérifiées : rien à corriger.
- **Suivi IA Ubersuggest** (10 questions max, toutes utilisées) : remplacement de 3 questions peu atteignables (2 sur les soins du visage, 1 générique articulations) par « Qui est distributeur Forever Living en Loire-Atlantique ? », « Le programme C9 de Forever Living fonctionne-t-il vraiment ? Quels sont les avis ? », « Forever Living est-il une pyramide ou une activité de vente légale ? ». Gemini : non suivi par l'abonnement actuel (`aisv_gemini_answers_tracked: false`), pas activable par l'outil. Mise à jour des réponses : mensuelle.

## Lot AB du 15 novembre 2026 — une page par programme (décision de Rafael), Bing, bilan C9

- **Fusion des pages saveurs** (audit : 94–96 % de texte commun) : 14 fiches → 5. Pages gardées (URL inchangées, les plus liées) : `programme-c9-forever-vanille-peche` (6 versions : aloe pêche / nature / Berry Nectar × shake vanille / chocolat), `programme-f15-debutant-vanille`, `programme-f15-intermediaire-vanille`, `programme-f15-avance-vanille` (vanille / chocolat), `forever-lite-ultra-vanille` (vanille / chocolat). Noms, title, meta et textes rendus neutres en saveur.
- Nouveau champ `variantes` (saveur, reference, price, lienCommande, image) dans `content.config.ts`. Le gabarit fiche affiche « Choisissez votre version » (un lien de commande Forever par version, `rel="sponsored"`) et publie un **ProductGroup** + `hasVariant` (une offre par référence).
- **9 fiches supprimées**, redirigées en 301 vers leur page principale (`vercel.json`, avec et sans `/`) ; les règles de l'ancien domaine qui visaient ces fiches pointent directement sur la page principale (un seul saut). Liens internes, `maillage.ts`, `besoins.ts`, `recommandes.ts` et `produitsLies` des articles mis à jour (hrefs seulement dans les articles en mesure : texte inchangé). 103 → 94 pages.
- **Ajouter une saveur** : une entrée de plus dans `variantes` de la page principale (pas de nouveau fichier).
- **Bing Webmaster Tools** : compte créé par Rafael (connexion Google), sitemap `https://espritaloe.fr/sitemap-index.xml` soumis le 15/11. **IndexNow** : clé `public/485bd7ec5f9cad7bacf57427ff613aed.txt`, envoi **automatique** après chaque déploiement Production réussi (`.github/workflows/indexnow.yml` → `scripts/indexnow.mjs --fichiers …` : seulement les pages des fichiers modifiés, tout le sitemap si gabarit/composants/styles/données/redirections changent ; journal visible dans l'onglet Actions de GitHub). Premier envoi complet fait le 15/11 au soir depuis le navigateur : 99 URL (dont les 9 fiches fusionnées) → HTTP 200. À la main si besoin : `npm run indexnow`.
- **/bilan-un-mois-apres-c9/** : le lien depuis le journal C9 est masqué (`BILAN_PUBLIE = false` dans `mon-journal-c9.astro`) tant que la page est en noindex. À la publication : passer à `true`, retirer le noindex et la ligne de filtre du sitemap dans `astro.config.mjs`.

## Lot AA du 15 novembre 2026 — corrections rapides de l'audit SEO / IA

- **CLS desktop** (0,211 dans PageSpeed) : polices de secours « Fraunces Fallback » (Georgia) et « Mulish Fallback » (Arial) aux dimensions des vraies polices (size-adjust / ascent / descent calculés avec fontTools sur les fichiers woff2), dans `src/styles/global.css` ; préchargement de `fraunces-latin-500` et `mulish-latin-400` dans `Layout.astro`. Mesure locale : CLS 0,002. **À retester dans PageSpeed (desktop) après déploiement.**
- **robots.txt** : plus de `Disallow` sur les pages légales (elles ont un noindex, que Google doit pouvoir lire).
- **404** : « Page introuvable » (au lieu de « Page en construction »), liens vers produits, guide C9, blog, contact, catégories (dont Nutrition) et catalogue.
- **Données structurées** : Organization avec email et adresse ; LocalBusiness (page Loire-Atlantique) rattaché par `parentOrganization`. Logo ajouté le 15/11 (rosette d'aloe en relief, choix « D » de Rafael) : `public/logo.png` 512 px déclaré en `logo` ImageObject ; `logo.svg` dans l'en-tête et le pied de page ; `favicon.svg`, `favicon-48x48.png`, `apple-touch-icon.png`. Source du dessin : script Python (rosette de 5 feuilles, dégradés aloe-300 → aloe-600, fond radial #2f603c → #152a1c). `sameAs` : Facebook + fiche Google déjà présents.
- **Accueil** : « Plus de trente produits » → nombre calculé automatiquement (51) ; `fetchpriority="high"` sur le visuel principal. Pas de changement de title/meta/H1.
- **Glossaire** : titres sous ~65 caractères (le suffixe « | Esprit Aloé » saute s'il fait dépasser). Title de l'article avis (73 car.) : non touché, page en mesure.

## Lot Z du 15 novembre 2026 — page /catalogue-forever/ (reprise de l'ancienne page catalogue)

- Nouvelle page `src/pages/catalogue-forever.astro`, même déroulé que l'ancienne `monaloeverabienetre.fr/catalogue-forever-2025` (lue dans Webflow le 15/11) : bandeau vert, intro + bouton vers le catalogue officiel (`https://ecat.foreverliving.fr/fra/`, pas de PDF proposé par Forever), « Que contient le catalogue ? », 5 gammes (texte + bouton catégorie + 4 fiches), bloc qualité + vidéo « De la plante au produit jusqu'à nous » (chargée au clic, youtube-nocookie), 3 pictos, bloc distributeur, appel final. Fil d'Ariane + JSON-LD BreadcrumbList. Lien ajouté dans le pied de page (Produits > Catalogue Forever).
- Textes de l'ancienne page remis aux règles actuelles : plus de « stimuler le métabolisme / charge psychique » ; seule allégation : « L'aloe vera aide à soutenir la digestion » ; cosmétiques = hydratent, nettoient, sensation de fraîcheur.
- Fiches affichées : produits recommandés par Rafael (`src/data/recommandes.ts`) puis produits phares ; programmes = sélection fixe (C9, DX4, F15 ×2).
- Redirections 301 : `/catalogue` et `/catalogue-forever-2025` → `/catalogue-forever/`, depuis l'ancien domaine **et** sur espritaloe.fr.
- **Chaque année** : changer `ANNEE_CATALOGUE` en tête de la page (title, H1, textes) quand le nouveau catalogue Forever sort.
- **Décision de Rafael (15/11) : « catalogue » est réservé à `/catalogue-forever/`.** `/produits/` : title « Produits Forever Living : toute la gamme aloe vera », H1 « Tous les produits Forever Living », meta « Tous les produits Forever Living en France… », lien vers `/catalogue-forever/` sous l'intro. Page Loire-Atlantique : bouton « Voir tous les produits ». **Mesure de `/produits/` : repart du 15/11.**

## Lot Y du 15 novembre 2026 — redirections 301 de monaloeverabienetre.fr, page par page

- `vercel.json` : 136 règles réservées à l'hôte `monaloeverabienetre.fr` / `www.monaloeverabienetre.fr` (condition `has` → `host` → `inc`), placées juste après la règle www d'espritaloe. Elles n'ont **aucun effet sur espritaloe.fr**.
- Source : `redirections-webflow-final.csv` (export de l'ancien site), corrigé : `/devenir-distributeur-forever` → `/devenir-distributeur-forever-living/` (au lieu de `/a-propos/`) ; dentifrice → `/produits/forever-bright-toothgel/` directement (l'ancienne cible était elle-même redirigée : 2 sauts). Ajout automatique de `/product/<slug>`, `/post/<slug>`, `/category/<slug>` pour chaque fiche, article et catégorie actuels.
- Filets de sécurité, dans cet ordre : `/robots.txt`, `/sitemap.xml` → `sitemap-index.xml`, `/product/*` et `/category/*` → `/produits/`, `/post/*` → `/blog/`, tout le reste → accueil. Toujours en 301, en un seul saut.
- Ancien guide `redirections-webflow.md` (saisie dans Webflow) : **obsolète**, Webflow n'héberge plus rien.
- **Les règles ne s'activent qu'une fois l'ancien domaine branché sur Vercel** (aujourd'hui le DNS pointe sur le service de redirection OVH, qui échoue en HTTPS) :
  1. Vercel → projet → Settings → Domains → ajouter `monaloeverabienetre.fr` et `www.monaloeverabienetre.fr`, **« Connect to an environment » = Production, sans l'option « Redirect to another domain »** (sinon Vercel redirige vers la même URL sur espritaloe.fr et les correspondances produit sont perdues).
  2. OVH → zone DNS de monaloeverabienetre.fr : désactiver la redirection web OVH, puis A `@` et CNAME `www` vers les valeurs affichées par Vercel. **Ne pas toucher** MX, autoconfig, autodiscover, les deux `_domainkey` (mails actifs).
  3. Attendre le certificat SSL (Vercel affiche « Valid Configuration »), puis tester : `curl -sI https://monaloeverabienetre.fr/product/forever-therm` → `301` + `location: https://espritaloe.fr/produits/forever-therm/`.
  4. Search Console, propriété monaloeverabienetre.fr → Paramètres → Changement d'adresse → espritaloe.fr.
  5. Garder l'ancien domaine (et ces règles) **au moins 1 an**, idéalement tant que le domaine est payé.
- **✅ Migration terminée le 15/11/2026 (faite par Claude dans le navigateur, validée par Rafael)** :
  - Vercel : `monaloeverabienetre.fr` et `www.monaloeverabienetre.fr` ajoutés au projet, Production, sans redirection (la case « Redirect apex to www » cochée par défaut a été retirée). Les deux en « Valid Configuration ».
  - OVH, zone de monaloeverabienetre.fr : redirection web OVH supprimée (A 213.186.33.5 ×2 et TXT « 4|https://espritaloe.fr » ×2) ; ajout de `A @ 216.198.79.1` et `CNAME www 079c675197933fae.vercel-dns-017.com.`. Mails intacts (MX, SPF, DKIM ×2, autoconfig, autodiscover, SRV ×3), TXT google-site-verification conservé.
  - Tests HTTPS réels OK : `/product/forever-therm` → fiche, `/post/…` → article, `/category/…` → catégorie, `/devenir-distributeur-forever` → page distributeur, `/catalogue-forever-2025` → `/catalogue-forever/`, page inconnue et `http://` → accueil.
  - Search Console : changement d'adresse monaloeverabienetre.fr → espritaloe.fr **lancé le 15/11/2026** (« Ce site est en cours de migration »). Seul avertissement : `http://` et `http://www.` pointent vers la même cible (l'accueil), normal. **Ne jamais cliquer sur « Annuler la migration ».**
- **🔴 Rappel — vers le 6–13 décembre 2026 : vérifier le transfert.** Dans la GSC : (1) propriété monaloeverabienetre.fr → les impressions doivent baisser ; (2) espritaloe.fr → Pages : les anciennes URL ne doivent pas apparaître en erreur, et les pages cibles (fiches, articles) doivent rester indexées ; (3) Inspection d'URL sur 2–3 anciennes URL (« Page avec redirection » attendu). Si une ancienne URL tombe en 404 ou sur l'accueil alors qu'une page équivalente existe, ajouter la règle dans `vercel.json`.
- Garder le domaine monaloeverabienetre.fr (renouvellement auto prévu en mai 2027) et ses règles au moins 1 an.
- Ajouter une page plus tard : si son URL existait sur l'ancien site, ajouter la ligne dans le CSV et relancer la génération (ou ajouter la règle à la main **avant** les filets de sécurité).

## Lot X du 14 novembre 2026 — glossaire des ingrédients

- Nouvelle rubrique **/glossaire/** (structure validée par Rafael sur maquette le 14/11) : collection `src/content/glossaire/` (1 fichier par ingrédient), pages `src/pages/glossaire/index.astro` et `[slug].astro`, outils `src/data/glossaire.ts`, bloc `src/components/IngredientsCles.astro` sur les fiches produit (sous les caractéristiques, **masqué sur les fiches de PAGES_GELEES**), lien « Glossaire des ingrédients » dans le pied de page, section dans `public/llms.txt`.
- 8 pages dédiées : aloïne, aloe vera stabilisé, acémannane, MSM, propolis, arginine, gelée royale, glucosamine et chondroïtine. 7 définitions courtes sur l'index : allantoïne, coenzyme Q10, guarana, huile de jojoba, thé vert, vitamine C, vitamines B6 et B12.
- Statuts vérifiés le 14/11 dans le tableau DGCCRF (xlsx officiel) : aucune allégation pour propolis, gelée royale seule (seuls des mélanges pollen + gelée royale y figurent), CoQ10, MSM, arginine, glucosamine. Avis EFSA cités : glucosamine 2009/2011/2012, MSM 2009, arginine 2011.
- Ajouter un ingrédient : créer `src/content/glossaire/<slug>.md` (`pageDediee: true` + corps pour une page, sinon définition courte). Un slug produit ou article faux fait échouer le build.
- **À surveiller** : arrêt de la Cour de justice dans l'affaire **C-38/25 P** (aloe et dérivés hydroxyanthracéniques, conclusions de l'avocate générale le 10/09/2026). Mettre à jour `/glossaire/aloine/` dès l'arrêt, et envisager une mise à jour de l'article dangers.
- Pistes : lier les articles existants vers le glossaire (aloïne dans l'article dangers, acémannane dans l'article digestion) une fois leurs fenêtres de mesure terminées ; nouvelles entrées (camomille, collagène marin, pollen, miel).

## Lot W du 14 novembre 2026 — pages avis renforcées (veille concurrentielle)

- Contexte : aloe-vera-pour-tous.com a publié le 5/11 « C9 Forever avis négatif » et le 7/11 « Les produits Forever sont-ils fiables ? », sur le cluster avis/danger. Veille complète : doc projet `claude/veille-concurrentielle.md` (4 concurrents : aloe-vera-pour-tous, aloeveragel, aloeveraforever, ghaloe). Plan d'action validé par Rafael le 14/11.
- **Décision de Rafael : appliquer tout maintenant**, même si la mesure des deux pages (ouverte les 12–13/11) repart. **Mesure de `forever-living-avis-produits-france` et `c9-forever-avis` : repart du 14/11.** Title, seoTitle et meta description inchangés.
- **Article avis Forever** : encadré « En bref : mon verdict » en tête (fabrication, prix par jour, 4 semaines, modèle de vente, déclaration d'intérêt) ; allégations retirées (« ballonnements réduits, transit régularisé », « 2 à 5 kg en 9 jours », « réduction des ballonnements », « meilleure récupération après l'effort », « réduction des petites irritations ») ; énergie rattachée aux vitamines B6/B12 de l'ARGI+ (lien vers la fiche) ; nouvelle section « Retour et remboursement » ; FAQ garantie (visible + JSON-LD) réécrite.
- **Article C9 avis** : encadré « En bref : mon verdict » ; plus de fourchette « 2 à 5 kg » (FAQ visible + JSON-LD), seuls les chiffres de Rafael restent ; paragraphe « Et si vous changez d'avis ? » sous la critique du prix.
- **Garantie, sources** : CGV Forever France (direct.foreverliving.fr) → rétractation 14 jours à compter du lendemain de la réception, via le FBO et le formulaire ; Company Policy Forever France (janv. 2025) → en cas d'achat via un FBO, le FBO est responsable de la satisfaction du client (échange, remboursement). La garantie 30 jours est présentée comme gérée par Rafael.
- **Garantie (correctif du 14/11, à la demande de Rafael)** : source officielle = CGV Forever France, mise à jour sept. 2026 (`foreverliving.fr/FR/fr/corporate/cgu-cgv`). Art. 8.2 : « satisfait ou remboursé » 30 jours à compter de la réception, contacter son FBO, remplacement ou remboursement au choix du client, retour à ses frais. Art. 9 : rétractation 14 jours. Les deux articles citent maintenant ces conditions avec un lien vers les CGV. Les CGV ne disent rien des produits entamés : ne rien affirmer à ce sujet.
- **Toujours en suspens** : mentions « Kosher et Halal » (avis + C9 avis), laissées en l'état sur décision de Rafael.

## C9 du 14 novembre 2026 — six versions et correctif de référence

- Information de Rafael : chaque C9 existe en déclinaisons boisson × shake. Références boutique Forever : **475** nature vanille, **476** nature chocolat, **629** pêche vanille, **630** pêche chocolat, **625** berry vanille, **626** berry chocolat (152,42 € chacune).
- 🔴 **Correctif** : la fiche C9 Chocolat Pêche portait la référence 475 (C9 nature vanille) : le bouton Commander menait au mauvais produit. Corrigée en 630.
- Nouvelles fiches : `programme-c9-forever-vanille` (475) et `programme-c9-forever-chocolat` (476). Le site a les six versions (51 produits).
- « Forever Garcinia Plus » remplacé par « Forever Lean » dans les fiches C9 Pêche (contenu actuel du coffret selon la boutique).
- Guide de la catégorie Programmes : mention des six versions.

## Nouveaux produits du 14 novembre 2026 — 5 fiches (49 produits au total)

- **Après-Shampoing Aloe-Jojoba** (réf. 641, 29,26 €), **Aloe Body Wash** (646, 28,31 €), **Aloe Body Lotion** (647, 28,08 €) : catégorie Beauté & Bien-être, photos mises en scène dans les décors salle de bain de Rafael (`scene2.py`). La fiche shampoing renvoie maintenant vers l'après-shampoing.
- **Programme C9 Berry Vanille** (625) et **C9 Berry Chocolat** (626), 152,42 € : version à l'Aloe Berry Nectar. Photos sur fond blanc (le coffret porte une pastille flottante, inadaptée à une mise en scène). Textes distincts des C9 Pêche (pas de contenu dupliqué), sans chiffre de kilos.
- Contenu du coffret repris de la boutique Forever : 2 Aloe Berry Nectar, 1 Lite Ultra, 18 Therm, 36 Forever Lean, 9 Fiber, livret numérique. La description Forever du C9 Berry Chocolat parle par erreur de « pulpes d'Aloe vera » et de shake vanille : la fiche suit le nom du produit et la pastille de la boîte (Berry Nectar + chocolat).
- **Non encore ajoutés** (repérés sur la boutique) : Huile Capillaire (642), Aloe Moisturizing Lotion (63), Gentleman's Pride (70), Aloe First (40), Sérum Hydratant (618), Protecting Day Lotion SPF 20 (645), Crème Régénératrice (650), Activateur Aloès (612), Forever Focus (622), iVision (624), parfums Alofa (643) et Malosi (644).
- **À revoir** : la description de la fiche C9 Vanille Pêche dit encore « relance votre organisme » et son nom « Cure détox 9 jours ».

## Lot V8 du 14 novembre 2026 — Devenir distributeur : « L'essentiel en 30 secondes »

- Encadré sous le haut de page : pour démarrer (premier pack à 345 €), temps à prévoir, revenus (aucun garanti, recruter facultatif), prise de contact.
- **Position de Rafael sur le temps** : pas de temps minimum ; plus on y consacre de temps, plus l'activité est bénéfique. Il préfère en parler lors d'un rendez-vous téléphonique ou physique : ne pas publier d'estimation d'heures ni d'exemple de revenu chiffré.
- Bouton d'appel fixe en bas d'écran mobile non fait (risque de chevauchement avec le bandeau cookies).

## Accueil du 14 novembre 2026 — formulations (décisions de Rafael)

- « +40 ans d'expertise » → « 1978 — Forever, depuis » (accueil et contact) : le chiffre désigne Forever, pas Rafael (2016).
- FAQ « certifiés ? » (texte + schéma) : limitée à ce qu'on sait, le sceau IASC des boissons à l'aloe vera. « Kosher et Halal » et « sans tests sur les animaux » retirés de l'accueil faute de source.
- « concentre vitamines, minéraux et acides aminés » → pulpe « riche en polysaccharides ».
- Choix par besoin (`besoins.ts`) : « Confort digestif » → « Digestion » (allégation en attente ajoutée), « Sport et confort articulaire » → « Sport et vie active », MSM Gel décrit comme gel de massage. Les ancres (`#sport-articulations`…) ne changent pas.
- **Reste** : l'article avis (`forever-living-avis-produits-france`, lignes 77–101) et `c9-forever-avis` affirment encore « Kosher, Halal ». Page la plus visitée : à traiter à part, avec une source ou en retirant la mention. La fiche Essence tonifiante mentionne Halal/Kasher (probablement repris de l'étiquette, à vérifier).

## Lot cosmétiques du 14 novembre 2026 — promesses de soin retirées

- Règle : un cosmétique hydrate, nettoie, rafraîchit, laisse une sensation de confort ; il ne soigne pas (brûlures, piqûres, rougeurs, cicatrices, muscles, articulations, gencives).
- **Aloe Gelly** : plus de « petites brûlures, piqûres d'insectes », « calme la sensation de brûlure », « calme les démangeaisons » ; usages « après le soleil / après l'épilation », renvoi au pharmacien si besoin.
- **Aloe MSM Gel** : devient « gel de massage » (nom, titres, FAQ, texte) ; plus de « soulagement immédiat », muscles, articulations, tissus conjonctifs.
- **Propolis Crème** : plus de « réparatrice », « cicatrices », « calme les irritations » ; mention allergie aux produits de la ruche.
- **Bright Toothgel** : plus d'action sur les gencives ; rappel honnête sur l'absence de fluor (en parler au dentiste, surtout pour les enfants).
- Retouches : savon liquide (arnica), savon avocat, déodorant, Essence tonifiante.
- Slug `aloe-gelly-forever-gel-apaisant` conservé (URL indexée).

## Lot V6 du 14 novembre 2026 — accueil réordonné

- Nouvel ordre : hero → « Quel produit Forever choisir ? » → produits phares → journal C9 (preuve) → Pourquoi l'aloe vera → bienfaits → devenir distributeur → FAQ. Le sélecteur par besoin passe du 3e au 2e écran sur mobile (avant : après les bienfaits). Aucun texte modifié, seulement l'ordre des blocs.
- Bouton « Voir toute la gamme » : nombre de produits calculé (affichait 25, il y en a 44). Sur-titre des bienfaits : « Au quotidien ».
- Title, H1 et meta inchangés : la mesure de l'accueil (Lot R) n'est pas réinitialisée.
- **À revoir (lot suivant)** : « concentre vitamines, minéraux et acides aminés essentiels », « +40 ans d'expertise », FAQ « tous certifiés IASC, Kosher et Halal » ; puces « Digestion », « Énergie », « Sport et articulations » du sélecteur.

## Correctif du 14 novembre 2026 — Mini Aloe Argi+ et F15

- Confirmé par Rafael : Mini Aloe Argi+ est un pack mini-briques de gel d'aloe vera + sticks ARGI+, pas un flacon enrichi en arginine. Fiche réécrite (quantités non indiquées : l'API Forever ne renvoie pas ce pack).
- **F15** : Rafael ne l'a pas encore fait, il prévoit de l'essayer en janvier après un C9. L'article « Après le C9 » (V9) attend son retour d'expérience.

## Lot V5 du 14 novembre 2026 — page Sport

- Catégorie Sport & Fitness : bloc « Aussi utilisés par les sportifs » (FAB, Mini Aloe Argi+, Freedom, Aloe Cooling Lotion), via la table `AUSSI` de `src/pages/produits/[categorie]/index.astro` (réutilisable pour d'autres catégories).
- Guide : routine type « avant / pendant / après / au quotidien » avec liens vers les fiches ; « confort articulaire » retiré ; description de catégorie élargie.

## Lot V3 du 13 novembre 2026 — prix par jour et comparatif des boissons

- **Nouveau champ `coutJour`** (schéma `produits`), affiché sous le prix des fiches (« Soit environ … »). Renseigné pour : pulpe, Pêche, Berry Nectar, Mango (2,25 à 3,35 € par jour à 60–90 ml), Freedom (≈ 4,60 € à 90 ml), C9 ×2 (≈ 17 €/jour sur 9 jours), F15 ×6 (≈ 12 €/jour sur 15 jours), FAB (≈ 4,30 € la canette). **À recalculer si un prix change.**
- **FAB** : prix corrigé 49,90 → 51,93 € (boutique Forever, 13/11).
- **Comparatif des boissons** sur `/produits/boissons-aloe-vera/` : goût, part d'aloe vera (99,7 / 84,5 / 90,7 / 86 %, étiquettes Forever), prix, coût par jour, pour qui ; conseil de choix et lien vers le 4-Pack Mix.
- Pas de coût par jour pour DX4, Argi+, Lite Ultra et les compléments : contenances ou posologies non vérifiées.

## Photos du 13 novembre 2026 — mises en scène des 10 nouvelles fiches (PR #40)

- Les 10 photos ajoutées le 13/11 (8 Nutrition, shampoing, Cooling Lotion) sont des mises en scène : photo officielle Forever détourée, posée sur une surface plane d'un décor choisi par Rafael, avec profondeur de champ (net au pied du produit, flou croissant vers le fond), étalonnage sur la lumière de la scène, ombre de contact, reflet sur marbre et parquet, grain commun.
- Décors (photos de Rafael, Téléchargements) : `cuisine.jpg` table en marbre (Arctic Sea, Absorbent-C, Royal Jelly, Bee Pollen), `cuisine 2.jpg` plan de travail (Daily, ImmuBlend, Lycium Plus), `salle de bain.jpg` (shampoing), `salle de bain 2.jpg` (Aloe Lèvres), `salle de sport.jpg` parquet (Cooling Lotion). `cuisine 3.jpg` non utilisée.
- Script : `scripts/scene2.py` (hors repo) — `compose(décor, point de pose, côté du recadrage, position du point, photo produit)`. Première version jugée « trop retouchée » par Rafael : la clé est le cadrage serré sur la surface et le flou progressif.

## Lot V2 du 13 novembre 2026 — allégations des fiches boissons, sport et programmes

- **Source de référence** : tableau officiel DGCCRF des allégations utilisables (`liste-des-allegations-de-sante-utilisables.xlsx`, onglet 2). Allégations « en attente » de l'aloe vera, utilisables sous la responsabilité de l'opérateur : santé gastro-intestinale (« aide à soutenir la digestion », « soutient le fonctionnement de l'intestin », ID 3721/3947/3957/3958), défenses immunitaires (« contribue aux défenses naturelles », ID 1996), peau (ID 1995), fatigue (ID 2634). Thé vert : contrôle du poids / métabolisme des lipides (ID 2716, 3698). Guarana : vitalité, vigilance (ID 2062, 2375). **Aucune** allégation pour : arginine, glucosamine, chondroïtine, MSM, cranberry.
- **Décision de Rafael** : on réutilise ces formulations « en attente » (récupère le vocabulaire digestion) ; jamais « ballonnements », « transit régulé », « muqueuses », « rétention d'eau », « élimine les toxines », ni chiffres de kilos promis.
- **Fiches réécrites** : Argi+, Therm, Freedom, FAB, Mini Aloe Argi+, Berry Nectar, Aloe Pêche, Aloe Mango (FAQ, caractéristiques, corps, meta). **Fiches corrigées** : pulpe (digestion réintégrée), C9 vanille et chocolat (plus de « 2 à 5 kg », renvoi au journal), DX4 (plus de « toxines », choline et fonction hépatique), Marine Collagen, Fast Break, Lite Ultra vanille et choco (allégation protéines / masse musculaire), 4-Pack, 4-Pack Mix.
- Menu : sous-titre Sport « Performance & récupération » → « Shakes, barres & compléments ».
- **Reste à faire (lot cosmétiques)** : Aloe Gelly (« petites brûlures, piqûres d'insectes »), Aloe MSM Gel (« soulagement immédiat », tensions musculaires), Propolis Crème (« réparatrices »), Bright Toothgel (gencives). Ce sont des cosmétiques : les allégations à visée thérapeutique y sont interdites aussi. Noms des programmes C9 (« Cure détox 9 jours ») conservés pour l'instant.

## Lot V4 du 13 novembre 2026 — offre visible, recommander en 1 clic, fiche shampoing

- **Bandeau « Offre du moment »** (`src/components/BandeauOffre.astro`) sous l'en-tête de l'accueil et des fiches produit. Il lit `offres.ts` comme le popup : non rendu au build si l'offre est finie, retiré dans le navigateur avant `debut` et après `fin` (testé au 01/12 : absent). Rien à faire le 1er décembre pour le masquer ; il réapparaîtra tout seul avec la prochaine offre saisie dans `offres.ts`.
- **« Recommander en 1 clic »** sur /commander/ : les produits que Rafael recommande le plus (`src/data/recommandes.ts`), avec lien direct vers le produit sur la boutique Forever (rel sponsored, suivi GA4 inchangé) et lien vers la fiche.
- **Nouvelle fiche** : Shampoing Aloe-Jojoba (réf. 640, 26,84 €, catégorie Beauté & Bien-être), photo officielle retouchée.
- **Fait (Lot V4b)** : fiche Forever Aloe Cooling Lotion (réf. 564, 17,98 €, lien fourni par Rafael), ajoutée comme 6e produit de `recommandes.ts`. Textes cosmétiques sans promesse de soin (Forever écrit « soulage les inconforts articulaires », non repris).

## Correctif du 13 novembre 2026 — horaires (« 7j/7 »)

- Décision de Rafael : les horaires de conseil sont ceux de la fiche Google (lun.–ven. 8h–19h, sam. 9h–16h, fermé le dimanche) ; seule la **commande en ligne** est 7j/7.
- Tous les « disponible 7j/7 » / « conseiller 7j/7 » remplacés (accueil, contact, À propos, livraison, page locale, fiches, blog, catalogue, meta par défaut). Page contact : horaires détaillés, réponse « sous 24 h du lundi au samedi ».
- Schéma LocalBusiness de la page Loire-Atlantique : horaires d'ouverture + adresse complète, identiques à la fiche Google.
- **Réflexe** : ne plus écrire « disponible 7j/7 » pour Rafael ; « commande en ligne 7j/7 » est correct.

## Lot V7 du 13 novembre 2026 — infos de Rafael (avis Google, mentions légales, ancienneté, coût de démarrage)

- **Avis Google** : `src/data/avis.ts` renseigné (lien direct « écrire un avis », place ID `ChIJnzdjPxUjcKARxSHWCBVjCao`). Bouton sur toutes les fiches sans avis + lien dans les coordonnées de /contact/. La fiche Google n'a encore aucun avis (13/11).
- **Mentions légales** : adresse pro (98 rue de Bais, 44720 Saint-Joachim), directeur de la publication, date de mise à jour. Pas de SIRET (Rafael : pas nécessaire pour l'instant).
- **Adresse complète** ajoutée aux schémas Person (À propos) et ContactPage, identique à la fiche Google (cohérence NAP).
- **Ancienneté : depuis 2016**, début avec le C9 conseillé par son ostéopathe. Mis à jour : À propos (paragraphe « tout a commencé par un produit »), Devenir distributeur, articles franchise et avis.
- **Coût de démarrage** : plusieurs packs, le premier à **345 €**, qui contient l'équivalent de plus de 345 € en produits. Remplace « adhésion symbolique » / « quelques dizaines d'euros » sur Devenir distributeur et dans les articles franchise et pyramidal.
- **À trancher** : la fiche Google affiche des horaires (lun.–ven. 8h–19h, sam. 9h–16h, fermé le dimanche) alors que le site dit « 7j/7 » partout.
- **Produits les plus recommandés par Rafael** (pour le Lot V4 « Recommander en 1 clic ») : Programme C9, pulpe à la pêche, Aloe Gelly, déodorant, shampoing, Aloe Cooling Lotion. Le shampoing et la Cooling Lotion n'ont pas encore de fiche.

## Lot V1 du 13 novembre 2026 — conformité et confiance (suite de l'audit 6 personas)

- Audit complet : `rapports/ux/2026-11-13-audit-6-personas.md` (6 personas, plan V1 à V9).
- **Accueil** : bloc « Les bienfaits au quotidien » réécrit avec des allégations autorisées uniquement (« Une peau hydratée », « Un rituel du matin », « De la vitamine C » : immunité + fatigue). Hero sans « prendre soin de votre digestion ». Titres des cartes passés en h3.
- **Freedom** : description (affichée sur l'accueil et en meta) sans « soutenir votre mobilité ». Le reste de la fiche Freedom relève du Lot V2.
- **Fiche pulpe** : intro, « À qui il s'adresse », FAQ (poids, moment, grossesse) et caractéristiques réécrites. Supprimés : transit, ballonnements, absorption, rétention d'eau, muqueuse intestinale, récupération sportive, « vitamines A, B, C, E, zinc, magnésium, sélénium, enzymes ». Vérifié sur l'étiquette Forever (réf. 815) : seule la vitamine C est déclarée (ajoutée). Allégations utilisées : immunité, fatigue, métabolisme énergétique.
- **Notre Aloé** : « vitamines du groupe B présentes dans la pulpe » remplacé par la vitamine C ; carte « Confort digestif » renommée « Polysaccharides ».
- **À propos** : « améliorer votre digestion, retrouver de l'énergie » reformulé.
- **Devenir distributeur** : texte provisoire « Photo à venir » supprimé, remplacé par un encart « D'où viennent les revenus » (3 sources, équipe facultative). « Les produits se vendent parce qu'ils fonctionnent… effets réels » reformulé.
- **Journal C9** : « on laisse le corps éliminer » retiré.
- **Fiches produit sans avis** : plus d'étoiles ★★★★★ pleines. Titre « Vous utilisez ce produit ? », bouton vers /contact/. **À compléter** : `src/data/avis.ts` → `LIEN_AVIS_GOOGLE` (lien « Demander des avis » de la fiche Google Business) ; le bouton « Laisser un avis Google » apparaît alors sur toutes les fiches.

## Lot U du 13 novembre 2026 — page contact enrichie

- **Hero** : H1 « Contacter votre distributeur Forever », Saint-Joachim/Brière mis en avant (la liste de villes Pornic, Ancenis, Châteaubriant… est retirée, cohérence avec la page locale) + lien vers `/distributeur-forever-living-loire-atlantique/`.
- **Carte Google Maps supprimée** : elle montrait seulement le département et chargeait Google (cookies) sans consentement. Remplacée par trois accès rapides : appel, SMS, e-mail.
- **« Pour quoi me contacter ? »** : 4 cartes (produit, commande, C9/DX4, devenir distributeur), chacune avec un lien vers la page du site qui répond déjà et un bouton qui pré-remplit l'objet du formulaire (petit script, testé).
- **« Que se passe-t-il après votre message ? »** (3 étapes) et **FAQ** de 5 questions avec schéma FAQPage. Une question rappelle que Rafael n'est pas professionnel de santé.
- Coordonnées : zone « Saint-Joachim », lien Facebook ; schéma ContactPage avec adresse (Saint-Joachim 44720).
- Title « Contacter un distributeur Forever Living | Esprit Aloé », meta description réécrite. Mesure de la page à repartir du 13/11.

## Correctif du 13 novembre 2026 — redirection Nutrition

- `vercel.json` contenait une ancienne redirection 301 `/produits/nutrition/` → `/produits/` (de l'époque où la catégorie n'avait pas de page). Vercel l'appliquait avant la page créée au Lot T : le menu Nutrition renvoyait vers le catalogue. Redirection supprimée.
- Une 301 est gardée en cache par le navigateur : tester en navigation privée. Google recrawlera seul ; demander l'indexation de `/produits/nutrition/` dans la Search Console accélère la prise en compte.
- **Réflexe** : avant de créer une page, vérifier que son URL n'est pas une `source` dans `vercel.json`.

## Lot T du 13 novembre 2026 — catalogue, catégorie Nutrition, 8 fiches, page locale (suite à l'analyse d'aloeveragel.fr)

- **Concurrent aloeveragel.fr** (WordPress) : 97 fiches produit, ~110 pages locales « distributeur Forever Living + département/ville » (pages satellites, à ne pas copier), une quinzaine de guides, blog figé depuis 2023.
- **`/produits/`** : title « Catalogue Forever Living : tous les produits », H1 « Le catalogue Forever Living », intro avec nombre de produits automatique. Descriptions détox et nutrition corrigées.
- **Nouvelle catégorie `/produits/nutrition/`** (existait dans le code, masquée faute de produits) : config + bloc « Comment choisir un complément Forever ? », liens dans le menu Produits et le pied de page.
- **8 nouvelles fiches** (données : API foreverliving.fr du 13/11 : prix client, composition, posologie, précautions officielles) : Arctic Sea (376), Forever Daily (439), Bee Pollen (26), Absorbent-C (48), ImmuBlend (355), Royal Jelly (36), Lycium Plus (72) en nutrition ; Aloe Lèvres (22) en beauté. Seules les allégations autorisées (vitamines, minéraux, EPA/DHA) ; aucune allégation pour pollen, gelée royale, goji, champignons.
  - **Images** : photos officielles récupérées sur foreverliving.fr à la demande de Rafael, retouchées (fond blanc, produit recentré à 78 % de la hauteur, 1600 × 1600, webp q80, 23–31 Ko) et branchées dans les 8 fiches. Lycium Plus n'existait qu'en 800 px chez Forever : agrandie et légèrement accentuée, à remplacer si une meilleure source apparaît. Script : `scripts/retouche.py` (hors repo).
- **Fiche produit** : le badge « Certifié IASC — Aloe vera garanti pur » n'apparaît plus sur les compléments sans aloe (catégorie nutrition sans « aloe » dans le nom). si `image` est vide, l'image OG par défaut est utilisée.
- **Page `/distributeur-forever-living-loire-atlantique/`** (existait déjà) : recentrée sur Saint-Joachim / Brière / Saint-Nazaire / Guérande, adresse ville + code postal dans le JSON-LD, nouvelle section « se rencontrer » (remise en main propre sur rendez-vous, déjà annoncée sur la page), nombre de produits automatique, « certifié » → « indépendant ».
- À vérifier par Rafael : le site Forever affiche « Livraison OFFERTE à partir de 50 € » (bandeau du 13/11) alors que nos pages disent relais gratuit dès 150 €. Promo temporaire ou nouvelle règle ?
- Écartés : Multi-Maca (allégations libido/ménopause non autorisées, précaution cancer du sein) et Active Pro-B (le mot « probiotique » est lui-même une allégation santé pour la DGCCRF).

## Lot S du 13 novembre 2026 — audit Ubersuggest (score 91/100) et PageSpeed

- **CLS sur ordinateur** : PageSpeed mesurait 0,211 (seuil Google : 0,1). Cause : le bandeau de consentement apparaissait avant le chargement des polices, puis changeait de hauteur, ancré en bas, ce qui le faisait bouger. Correctif dans `AnalyticsConsent.astro` : le bandeau s'affiche après `document.fonts.ready` (au plus 1,5 s). Mesure locale : 0,219 → 0,002 (article avis), 0,183 → 0,002 (fiche pulpe).
- **Contenu trop court** (< 200 mots) sur `/produits/programmes-detox/` et `/produits/sport-et-fitness/` : ajout d'un bloc « lequel choisir ? » (champ `guide` dans la config de `[categorie]/index.astro`), sans allégation. Descriptions de ces deux catégories corrigées (plus de « relancer votre métabolisme » ni de « performances »).
- Ignoré volontairement : title de l'avis à 73 caractères (page gelée), pages bloquées (bilan C9 en noindex, pages légales : voulu), « URL non optimisées » (faux positifs).
- **Le projet Ubersuggest suit encore monaloeverabienetre.fr** (ancien domaine) : ses suggestions de mots-clés portent sur l'ancien site. Rafael doit le basculer sur espritaloe.fr (plan gratuit = 1 projet).

## Lot R du 13 novembre 2026 — title de l'accueil + différenciation danger / avis (validé par Rafael)

- **Accueil** : title « Forever Living — Commander les Produits Aloe Vera en France » → « Forever Living : distributeur et commande d'aloe vera en France » (cible : « distributeur forever living » ×4, positions 17–18, SD 12). FAQ C9 de l'accueil (visible + JSON-LD) sans « nettoyer l'organisme / relancer le métabolisme ». **Mesure de l'accueil : repart du 13/11.**
- **Danger / avis** : l'article avis ne garde qu'une réponse courte à « dangereux ? » et renvoie vers l'article danger (premier lien avis → danger, ancre exacte). Le title et la meta de l'avis ne changent pas.
- L'article danger a un nouveau H1 (« … Aloïne, ANSES et précautions », pour ne plus chevaucher « aloe vera à boire », visé par l'autre article) et un encadré « En bref » en tête, qui donne la réponse directe (vise l'extrait optimisé).
- À surveiller dans GSC : la page qui sort sur « les produits forever sont ils dangereux » (avis en position 8 avant le lot R). Si l'avis perd la requête sans que l'article danger la reprenne sous 3–4 semaines, remettre la réponse longue dans l'avis.

## Lot Q du 13 novembre 2026 — premières données Ubersuggest

- Données complètes : `rapports/mots-cles/2026-11-13-donnees-ubersuggest.md`. Semrush : pas d'unités d'API. Ubersuggest gratuit : 3 recherches par jour.
- **Article `comment-boire-pulpe-aloe-vera` retargeté sur « aloe vera à boire » (2 900/mois, SD 17) et « jus aloe vera » (1 300, SD 16)** : nouveaux title, H1, description et tags, plus une section « Quels bienfaits attendre du jus d'aloe vera ? » (sans allégation). Le slug reste le même.
- **Fiche pulpe** : le seoTitle devient « Forever Aloe Vera Gel : pulpe d'aloe vera à boire » (cible : ~3 500/mois en positions 42–48). **La mesure de la fiche repart du 13/11.**
- Correction du rapport du matin : « comment boire aloe vera » = 10/mois, « code promo forever » et « vente aloe vera domicile » sans volume mesurable.
- **À valider par Rafael** : le title de l'accueil (proposition dans le rapport) et la cannibalisation danger/avis.

## Lot P du 13 novembre 2026 — Black Friday + 3 nouvelles pages (mots-clés n° 1, 2, 3)

- **Offre Black Friday** : code `BLACKFRIDAY`, −15 %, nouveaux clients, dès 50 €, jusqu'au dimanche 30/11/2026 23:59. Source unique : `src/data/offres.ts` (OFFRE_EN_COURS).
- **Popup** (`PopupRemise.astro`) : version Black Friday (fond noir, accents dorés), lit `offres.ts`. Ne s'affiche qu'entre `debut` et `fin` (contrôle dans le navigateur) : **à partir du 1er décembre, plus de popup** tant qu'une nouvelle offre n'est pas saisie dans `offres.ts`. BIENVENUE15 n'est plus affiché. Délai de réaffichage de 7 jours compté par code.
- **Nouvelle page `/code-promo-forever/`** : offre en cours, mode d'emploi, autres façons de payer moins cher, FAQ (JSON-LD FAQPage). Bascule seule sur « pas de code en cours » après la date de fin. Lien ajouté depuis `/commander/`.
  - **À faire le 1er décembre** : remplacer la meta description (elle cite le Black Friday) et saisir la prochaine offre dans `offres.ts`.
- **Nouvel article `vente-a-domicile-aloe-vera-vdi`** (mot-clé n° 1) : statut VDI, mandataire / acheteur-revendeur, vente en ligne via la boutique Forever uniquement, aucune promesse de revenu. Sources : Bpifrance Création, L-Expert-comptable.
- **Nouvel article `comment-boire-pulpe-aloe-vera`** (mot-clé n° 2) : dose 60–90 ml, moment, pur/dilué, durée, conservation, précautions.
- FAQ visibles en markdown + champ `faq` (le gabarit blog n'affiche pas le champ `faq`, il ne sert qu'au JSON-LD).
- `public/llms.txt` mis à jour (page code promo + 2 articles).
- Pas encore de liens entrants depuis les autres articles vers les 2 nouveaux articles (pages en mesure) : à ajouter après la lecture GSC.
- Images : aucune (à choisir par Rafael, champ `image` du frontmatter).

## Recherche de mots-clés du 13 novembre 2026

- 10 mots-clés où le site est absent, priorisés : `rapports/mots-cles/2026-11-13-10-mots-cles.md`. Volumes estimés sans outil dédié (à recalibrer avec Semrush/Ubersuggest si branché).
- Ordre conseillé : VDI aloe vera → comment boire la pulpe → code promo Forever → après C9 / F15 → DX4.

## Lot O du 13 novembre 2026 — allégations santé restantes dans le corps des articles

- 8 articles nettoyés (corps de texte, H1, H2, FAQ ; **aucun seoTitle ni meta description touché**) : sport, digestion, immunité, stress/sommeil, peau, cheveux, guide C9, perte de poids.
- Retiré : anti-inflammatoire / réduction inflammatoire, régénération cellulaire, « pénètre dans les 3 couches de la peau », stimulation de la pousse, propolis « cicatrisante », élimination des toxines, « relance le métabolisme », clarté mentale, acémannane « immunostimulant », zinc / vitamines B / magnésium présentés comme apportés par la pulpe (quantités négligeables), « sans interaction médicamenteuse connue », dose enfant à partir de 6 ans.
- Gardé et assumé : vitamine C de la pulpe (allégations autorisées : immunité, fatigue, système nerveux), vitamines B6/B12 de l'ARGI+, zinc/biotine du Marine Collagen.
- Article sport : section « Ce qu'il faut retenir » ajoutée (ligne du backlog close). H1 : « quelle place dans la récupération musculaire ? ».
- Digestion : méta-analyse 2018 replacée dans son contexte (3 petits essais ; Davis 2006 sans différence significative).
- H1 modifiés : sport, digestion, immunité, stress. Ancres `articlesLies` et `public/llms.txt` alignées (article avis et article Freedom : seul le texte d'une ancre de lien change).
- Mesure : ces pages avaient déjà changé le 12/11 ; le lot O décale leur début de mesure au 13/11 (un jour).
- **Décisions de Rafael du 13/11 (lot O2, même jour)** :
  - seoTitle digestion : « 5 bienfaits prouvés » → « Aloe vera digestion : bienfaits et limites » (garde « aloe vera digestion » et « bienfaits ») ; meta description adoucie en même temps. **Mesure digestion : repart du 13/11.**
  - Metas stress et immunité réécrites pour décrire le contenu réel. **Mesure : repart du 13/11.**
  - Dose des boissons aloe vera alignée sur **60–90 ml/jour** partout (correction de Rafael) : articles sport, digestion (texte, FAQ, JSON-LD), immunité, stress ; fiches Pulpe, Mango, Berry Nectar, 4-Pack Mix, Aloe Pêche (qui disait 90–120 ml). Hors champ : protocole C9 (120 ml matin et soir) et Freedom (90 ml).
- Encore à adoucir plus tard : metas cheveux (« chute de cheveux ») et peau (« anti-âge… ce que l'aloe vera fait vraiment »).
- Reste en backlog : allégations dans les **fiches produit** (Therm « thermogenèse », ARGI+ « circulation optimale », FAB « hydratation cellulaire », Freedom « entretiennent le cartilage »…) : lot dédié, fiche par fiche.

## Lot N du 12 novembre 2026 — GEO : sources, dates, llms.txt, identité

- 7 articles (peau, cheveux, sport, stress/sommeil, immunité, articulations, perte de poids) : section « Ce que disent les sources officielles » (NCCIH, févr. 2025 ; ANSES 2018 pour l'oral). Texte volontairement prudent : « preuves solides rares », pas de promesse.
- `updatedDate: 2026-11-12` sur ces 7 articles + 5 retouchés plus tôt (c9-avis, fbo, programme-c9, digestion, avis-produits). Mesure : lire ces pages séparément dans Search Console.
- `public/llms.txt` créé (liste des 15 articles : à regénérer à chaque nouvel article).
- Identité : Person `@id` (#rafael-avenard) partagé entre /a-propos/, les articles et l'Organization (founder) ; sameAs Facebook + fiche Google (Maps) sur l'Organization et la Person.
- Reste : sources externes pour les articles C9, fbo, franchise, avis (non faits : sujets peu « scientifiques »).

## Lot M3 du 12 novembre 2026 — réponses Forever dans l'article « pyramidal ou légal »

- Article `forever-living-pyramidal-ou-legal` : section « Mes réponses aux 7 questions » (tableau) + 2 FAQ (stock/minimum d'achat, arrêter).
- Réponses fournies par Rafael : pas de stock nécessaire, pas de minimum d'achat, on arrête quand on veut en ne commandant plus.
- Encore à confirmer : coût exact et contenu du kit, document d'information sur les revenus, adhésion FVD, expérience personnelle, lien d'inscription distributeur distinct du lien boutique.

## Lot M du 12 novembre 2026 — article « Forever Living : pyramidal ou légal ? »

- Nouvel article `forever-living-pyramidal-ou-legal` : grille de lecture (art. L122-15 Code de la consommation, sanctions L132-19/20, code de conduite FVD déc. 2021), 7 questions avant de s'inscrire, FAQ de 5 questions. Transparence : le texte dit que Rafael est parrain et a un intérêt.
- Liens de parrainage : lien boutique avec ID (`sponsored`), page /devenir-distributeur-forever-living/ et /contact/.
- **À confirmer par Rafael** (faits écrits « à ma connaissance ») : adhésion « quelques dizaines d'euros avec kit de démarrage », pas de droit d'entrée élevé, pas de stock obligatoire. Aucune promesse de revenu.
- Image ajoutée (choisie par Rafael) : `public/images/blog/forever-living-pyramidal-ou-legal.webp`, 1200 × 600, 62 Ko. Le formulaire visible est un document d'assurance en anglais (« Insurance policy ») : sans incidence SEO, mais à remplacer par une photo de contrat en français si possible. Pas de lien retour depuis les articles existants (mesure en cours).

## Lot L du 12 novembre 2026 — image de la recette shaker fraises

- `public/images/recettes/shaker-fraises-chocolat.webp` ajoutée (1200 × 800, 33 Ko, choisie par Rafael) : l'image manquante de `/recettes-c9/` est corrigée. Alt réécrit pour décrire ce que la photo montre (un shaker rose aux fraises, pas chocolaté).

## Lot K du 12 novembre 2026 — accessibilité et dimensions d'images

- Pied de page : titres `h4` → `h3` (plus de saut de niveau après les `h2`), aucun changement visuel.
- Nouveau `src/lib/imgSize.ts` : lit les dimensions réelles des images de `public/` au build (sharp) et renseigne `width`/`height` sur le journal C9 (23 images + bandeau sticky), les recettes C9, le bandeau journal du blog et les vignettes de `/produits/`. Pour une nouvelle page : `sizesIn(data)` ou `imgSize(src)`.
- **Image manquante** : `public/images/recettes/shaker-fraises-chocolat.webp` est référencée par la recette `shaker-fraises-chocolat` mais le fichier n'existe pas (image cassée sur /recettes-c9/). À fournir par Rafael (ou retirer le champ `image` de la recette).

## Lot J du 12 novembre 2026 — corrections de l'audit crawl

- Lien « Nutrition » supprimé (menu, pages catégorie, 404) : la catégorie n'existe pas, `/produits/nutrition/` redirigeait vers `/produits/` (la redirection reste dans vercel.json pour d'anciens liens externes).
- Fiches produit : un seul `<h1>` dans le DOM (le titre mobile est un `<p role="heading" aria-level="1">`). Touche toutes les fiches, y compris Pulpe, FAB et savon (mesure : la structure change au 12/11, pas le texte).
- Liens boutique du journal C9 et de la page Loire-Atlantique : https + `sponsored` (via `src/lib/forever.ts`). Plus aucun lien Forever sans sponsored dans le build.
- Page Suisse : lien depuis `/devenir-distributeur-forever-living/` (elle n'avait aucun lien entrant).
- Maillage : article « produits Forever dangereux » ajouté aux guides de la catégorie boissons ; page « Trouver mon produit » : 4-Pack Mix, recettes C9 et nouveau besoin « Hygiène et soins du quotidien » (toothgel, déodorant, savons).
- Titres : `/commander/` (48 car.) et guide C9 (59 car.) sous 60. L'article avis (73 car.) volontairement laissé : à décider après l'analyse avant/après GSC.
- Reste : titres de pied de page en h4 (saut de niveau, accessibilité), images sans width/height (journal C9 surtout).

## Lot I du 12 novembre 2026 — menu desktop

- `src/components/Header.astro` : le menu complet ne s'affiche qu'à partir de 1280 px (`xl`) ; en dessous, burger. Avec le lien « Trouver mon produit », les liens passaient à la ligne à 1000 px. Ajout de `whitespace-nowrap` sur logo, liens et boutons, espacements resserrés. Vérifié en captures à 390, 1000, 1100, 1280 et 1440 px, sans débordement horizontal.
- Si on ajoute un lien au menu : retester à 1280 px.

## Lot H du 12 novembre 2026 — page « Trouver mon produit »

- Nouvelle page `/quel-produit-forever-choisir/` (menu : « Trouver mon produit », en première position) : 6 besoins (débuter, digestion, énergie, sport et articulations, peau et soins, programmes), 19 cartes produit, guides liés, précautions. Données uniquement dans `src/data/besoins.ts` (une faute de slug fait échouer le build). Pas de prix sur la page.
- Accueil : section « Quel produit Forever choisir ? » avec 6 liens ancrés (avant « Produits phares »).
- Liens vers des fiches gelées (pulpe, FAB) : ajoutés uniquement en entrant (aucune modification des fiches).
- Pour ajuster : modifier `besoins.ts` (ajouter « cheveux », « minceur », etc.).
- Mesure : nouvelle page + lien dans le menu = tous les gabarits changent au 12/11 (menu sur toutes les pages).

## Lot G du 12 novembre 2026 — redirection www

- GSC montrait `https://www.espritaloe.fr/` indexée en parallèle (387 impressions). `vercel.json` : redirection 301 de `www.espritaloe.fr/*` vers `https://espritaloe.fr/*`, en première règle. Si Vercel (Settings > Domains) fait déjà cette redirection, la règle est sans effet.
- Bandeau analytics vérifié : 7 Ko, masqué au chargement, aucun script Google avant « Accepter ». Pas d'impact SEO attendu ; GA4 sous-compte les visites des refus (normal).

## Lot F du 12 novembre 2026 — article sécurité recentré sur « produits Forever dangereux »

- Données GSC (3 mois) : « les produits forever sont-ils dangereux » = 820 impressions (+200 variante), position ~6, CTR 1,8 %. L'article `aloe-vera-a-boire-danger-contre-indications` est recentré : seoTitle « Les produits Forever sont-ils dangereux ? », nouvelle section H2 + question FAQ en tête, description et tags mis à jour. Slug inchangé.
- Risque de cannibalisation avec l'article avis (qui répond déjà à cette requête via sa FAQ) : surveiller dans la GSC quelle page ressort pour cette requête avant d'ajouter un lien retour depuis l'article avis.
- Mesure : date du 12/11 (titre modifié le jour même de la demande d'indexation).

## Lot E du 12 novembre 2026 — sitemap et robots.txt

- `astro.config.mjs` : `/bilan-un-mois-apres-c9/` exclu du sitemap (noindex) — **retirer la ligne du filtre le jour de la publication du bilan** ; `/livraison/` de nouveau dans le sitemap ; `lastmod` réel pour les 14 articles (updatedDate sinon pubDate), aucun lastmod pour les autres pages ; `changefreq`/`priority` supprimés.
- `public/robots.txt` : `Disallow: /livraison` retiré (page de réassurance livraison/retours désormais crawlable). Les pages légales restent bloquées.
- Penser à renseigner `updatedDate` dans le frontmatter d'un article quand on le modifie en profondeur : c'est ce qui alimente son lastmod.

## Lot D2 du 12 novembre 2026 — encadré blog

- `src/pages/blog/index.astro` : encadré « Aloe vera à boire : est-ce dangereux ? » sous l'encadré du journal C9 (lien vers l'article sécurité). Retirer le bloc quand l'article ne sera plus à mettre en avant.

## Lot D du 12 novembre 2026 — article sécurité « aloe vera à boire danger »

- Nouvel article `aloe-vera-a-boire-danger-contre-indications` (requête informationnelle à fort volume, sert de preuve d'honnêteté / E-E-A-T). Sources citées : communiqué DGS/DGCCRF (2 août 2018), note ANSES 2018-SA-0188, avis EFSA 2018. Pas de prétention santé ; renvoi vers le médecin ; IASC décrite comme association du secteur.
- Maillage : l'article renvoie vers l'avis Forever, la fiche Pulpe, le guide digestion, /notre-aloe/ et /contact/. La fiche Pulpe (gelée) n'affiche pas de bloc retour (PAGES_GELEES). Les autres articles n'ont pas été modifiés (pas de lien retour ajouté, pour ne pas toucher de page en mesure).
- Pas d'image : à choisir par Rafael (champ `image` à ajouter dans le frontmatter).
- À faire plus tard : liens retour depuis `aloe-vera-digestion-bienfaits` et l'article avis quand la mesure sera close.

## Lot C du 12 novembre 2026 — nettoyage titres / descriptions / liens boutique

- 15 pages : titres ramenés à ≤ 60 caractères et descriptions à ≤ 160 (c9-forever-avis, fbo, contact, devenir-distributeur, loire-atlantique, livraison, fiches Gelly, Bright Toothgel, Fast Break, Essence Tonifiante, Gel Hydratant Logic, ARGI+, Freedom). Retrait de « circulation » (ARGI+) et « calme les irritations » (Gelly) dans les meta.
- Liens boutique du corps : `rel="sponsored noopener noreferrer"` sur l'article avis et la fiche Gel Hydratant (https).
- Non touchés volontairement : titre de l'article avis (73 car., changé le 29/09 → mesure), guide C9 (61) et /commander (61) à 1 caractère près.
- Mesure : changements de titres au 12/11 — à noter pour la lecture GSC (15 pages en même temps : lire page par page).
## Lot B2 du 12 novembre 2026 — pages gelées corrigées (IASC, allégations)

- Appliqué sur : article `forever-living-avis-produits-france` (IASC ×4), fiche `forever-pulpe-daloe-vera` (description, seoDescription sans « plus vendue au monde », FAQ, caractéristiques, texte IASC), journal C9 (ligne IASC). Gel levé à la demande de Rafael le 12/11.
- Mesure : ces pages ont changé de contenu et de seoDescription le 12/11 — fenêtre de lecture GSC à rouvrir à cette date.

## Lot B du 12 novembre 2026 — confiance et conformité

- IASC : présentée comme association professionnelle du secteur dont Forever est membre fondateur (plus « organisme indépendant »). Corrigé sur `notre-aloe`, `c9-forever-avis`. Anthraquinones : « présentes dans l'écorce, écartées de la pulpe des boissons ».
- Allégations santé retirées (pathologies, détox, stimulation immunitaire, « régule le transit », cicatrisant, arthrose…) : `notre-aloe` (6 bienfaits), articles digestion, sport, articulations Freedom, cheveux, peau ; fiches Aloe Mango, Aloe Gelly (nom sans « Cicatrisant »), Aloe MSM Gel (seoTitle/description).
- Meta description de l'accueil : n'affirme plus de choses sur le site officiel ; mentionne distributeur indépendant et livraison 48–72h.
- **Pages gelées NON touchées** : article `forever-living-avis-produits-france`, fiche `forever-pulpe-daloe-vera`, journal C9. Corrections prêtes dans `scripts/lot-b-pages-gelees.py` (assertions, à lancer à la fin des fenêtres de mesure).
- Reste en backlog : autres formulations santé (microbiote/enzymes, « régénération cellulaire », argi-pls, « clarté mentale » C9), 6 liens boutique dans les corps de texte sans sponsored, titres >60 car., descriptions >160, H1 accueil.
- Mesure : noter la date de mise en ligne pour la lecture GSC.

## Lot A du 12 novembre 2026 — maillage interne produits ↔ guides

- Nouveau `src/data/maillage.ts` : une seule source pour (1) `PAGES_GELEES`, (2) les associations produit → produits avec leur phrase de contexte, (3) les guides par catégorie. Une faute de slug fait échouer le build avec un message clair.
- Fiche produit : deux blocs en bas de page, « Pour aller plus loin » (articles dont `produitsLies` cite la fiche, détectés automatiquement ; sinon guides de la catégorie) et « À associer avec ce produit » (`ProduitsAssocies.astro`). Pages catégorie : « Nos guides pour bien choisir » (`GuidesLies.astro`).
- **Fiches gelées sans bloc de maillage** : `forever-pulpe-daloe-vera`, `forever-fab-active-boost`, `forever-aloe-avocado-face-and-body-soap` (seoTitle du 29/08, remesure à confirmer). Pour les ouvrir : supprimer la ligne dans `PAGES_GELEES`.
- Liens boutique Forever : `src/lib/forever.ts` force le https (les `lienCommande` en http:// du frontmatter sont corrigés au rendu) et ajoute `rel="sponsored noopener noreferrer"` sur CtaCommander, Header, Commander, PopupRemise. Le suivi GA4 `click_lien_forever` repose sur le domaine : inchangé.
- Reste hors lot : 6 liens boutique écrits dans le corps de pages/articles (avis Forever, journal C9, page Loire-Atlantique, fiche Logic Gel Hydratant), dont 4 en http://.
- Mesure : le changement touche 34 fiches/catégories hors gel. Noter la date de mise en ligne pour la lecture GSC.

## Livraison du 13 septembre 2026 — commande, maillage et mesure

Autorisation de Rafael dans Codex : modifier GitHub et publier les corrections vérifiées sur Vercel.

- Page Commander : boutique officielle et sortie du site explicites, choix du canal avant les étapes, suppression des horaires contradictoires et engagements non vérifiés. Meta recentrée sur le parcours de commande.
- Cinq liens contextuels ajoutés entre pages hors gel ; FAQ Loire-Atlantique alignée sur la commande dans la boutique Forever (visible et JSON-LD).
- Analytics : chargement seulement après accord, choix accepter/refuser enregistré 180 jours, accès permanent aux préférences et retrait. Le suivi des clics partage désormais la même fonction que l'initialisation ; les destinations sont vérifiées par domaine.
- Confidentialité : texte ajusté à ce fonctionnement. Ceci n'est pas un audit juridique complet.
- Validation : build de 68 pages ; tests navigateur avant consentement, refus, acceptation, un événement sortant, retrait ; contrôle mobile. Requêtes Google bloquées pendant les tests pour éviter les faux événements.
- Mesure : le changement de marquage affecte toutes les pages. Ouvrir une nouvelle référence GA4 à la mise en ligne ; ne pas comparer directement les compteurs avant/après comme un gain SEO. Réception effective dans la propriété GA4 encore à confirmer après connexion.
- Gels : aucun contenu/title/meta des pages sous observation modifié. Le gabarit H1 reste inchangé pour préserver les fiches gelées. Nutrition possède déjà une redirection Vercel vers le catalogue ; pas de changement sur cette base.
- Tarifs et délais de la page Livraison, promotions, redirection de l'ancien domaine : vérification officielle/technique toujours à reprendre ; aucun tarif inventé ni DNS modifié.

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
- [ ] **29/08 — 3 seoTitle modifiés** (pulpe d'aloe vera, FAB Active Boost, savon avocat).
  Positions de départ : pulpe 41 (156 impr), FAB 20 (8 impr), savon 18,9 (8 impr).
  À remesurer fin septembre via `node scripts/gsc-export.mjs`. Ne rien modifier d'autre
  sur ces 3 fiches d'ici là. Volumes faibles pour FAB et savon : ne pas conclure sur du bruit.
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
- [x] **Image paysage article franchise** (fait le 20/11) : remplacer l'image carrée 1090×1078 de
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
