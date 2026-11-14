# Esprit Aloé — À ne pas oublier
*Mise à jour : 13 novembre 2026*

## Correctif du 14 novembre 2026 — Mini Aloe Argi+ et F15

- Confirmé par Rafael : Mini Aloe Argi+ est un pack mini-briques de gel d'aloe vera + sticks ARGI+, pas un flacon enrichi en arginine. Fiche réécrite (quantités non indiquées : l'API Forever ne renvoie pas ce pack).
- **F15** : Rafael ne l'a pas encore fait, il prévoit de l'essayer en janvier après un C9. L'article « Après le C9 » (V9) attend son retour d'expérience.

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
