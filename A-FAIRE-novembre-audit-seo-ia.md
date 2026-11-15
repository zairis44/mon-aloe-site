# espritaloe.fr — Audit SEO et recherche IA

Date : 15 novembre 2026 · Auteur : Rafael Avenard (audit réalisé avec Claude)

## Synthèse

Le site est techniquement en bonne santé ; ce qui le freine, c'est l'autorité, dans Google comme dans les réponses des IA. Les 98 pages du sitemap répondent en 200 avec une canonique vers elles-mêmes, des titres uniques et des données structurées riches, et un llms.txt est en place. Mais le domaine a une Domain Authority de 3 avec 2 backlinks suivis, il est dans le top 10 sur 1 seul des 25 mots-clés suivis, et il apparaît dans 0 des 10 réponses d'assistants IA suivies.

La plus grosse fuite réparable, c'est la migration : l'ancien domaine monaloeverabienetre.fr porte encore l'essentiel des backlinks, et ses redirections ne fonctionnent quasiment pas.

| Domaine | Note | Pourquoi |
| --- | --- | --- |
| Exploration et indexation | A− | 98/98 pages en 200, canoniques correctes, vraies 404, sitemap avec lastmod |
| Vitesse | B | LCP 1,1 s desktop / 1,3 s mobile, TBT 0 ms ; CLS desktop 0,211 (mauvais) |
| Contenu et on-page | B+ | Un H1 par page, articles de 1 400 à 2 800 mots, sources citées ; pages saveurs quasi identiques |
| Données structurées | A− | Product, BlogPosting, FAQPage, LocalBusiness, DefinedTerm sur toutes les pages concernées |
| Migration depuis l'ancien domaine | F | HTTPS de l'ancien domaine en échec ; les anciennes URL profondes tombent en 404 |
| Autorité (backlinks) | D | DA 3, 21 domaines référents, 2 liens suivis |
| Préparation recherche IA (sur le site) | A− | llms.txt, tous les robots autorisés, FAQ rendues côté serveur, glossaire, sources |
| Visibilité recherche IA (hors site) | F | 0 mention sur 10 prompts suivis |

Les cinq priorités :

1. Faire rediriger correctement l'ancien domaine (HTTPS + 301 page par page).
2. Fusionner les pages saveurs quasi identiques (C9, F15, Lite Ultra) en une page par programme.
3. Obtenir des mentions et des liens hors site : c'est ce qui fait monter à la fois dans Google et dans les citations des IA.
4. Corriger le décalage de mise en page sur desktop (CLS 0,211).
5. Renforcer les signaux d'entité : logo et adresse de l'Organization, fiche Google Business Profile, coordonnées identiques partout.

## Visibilité actuelle

Le site se positionne sur environ 31 mots-clés, mais presque tous en page 2 ou au-delà : le trafic estimé est donc très faible et instable.

Visites organiques estimées par mois (Ubersuggest, France, 2026) :

| Mois | Visites estimées | Mots-clés positionnés |
| --- | --- | --- |
| Juin | 6 | 1 |
| Juillet | 29 | 19 |
| Août | 64 | 26 |
| Septembre | 47 | 35 |
| Octobre | 18 | 31 |

Le pic d'août et la baisse d'octobre sont des estimations sur de très petits volumes : vérifiez les mêmes mois dans la Search Console avant d'y voir une tendance.

Sur les 25 mots-clés suivis dans Ubersuggest, 1 est dans le top 10 et 22 sont hors du top 100 :

| Mot-clé | Recherches / mois | Position | Page |
| --- | --- | --- | --- |
| forever living france | 1 900 | 9 | Accueil |
| forever living | 2 400 | 20 | Accueil |
| avis sur produit forever | 140 | 15 | /blog/forever-living-avis-produits-france/ |
| forever aloe gel | 880 | 45 | /produits/forever-pulpe-daloe-vera/ |
| forever living forever freedom | 260 | 48 | /produits/forever-freedom-confort-articulaire/ |
| distributeur forever living | 170 | 72 | Accueil |

Hors du top 100 malgré une page dédiée : « programme c9 », « forever freedom », « pulpe aloe vera », « les produits forever sont ils dangereux ». Ce schéma pointe vers un manque d'autorité, pas de contenu : voir les sections migration et IA.

## Critique : l'ancien domaine ne transmet pas ses liens

monaloeverabienetre.fr porte bien plus d'autorité que le nouveau site, et l'essentiel est perdu. C'est le gain d'autorité le moins coûteux à récupérer.

| Domaine | Domain Authority | Domaines référents | Backlinks (suivis) |
| --- | --- | --- | --- |
| monaloeverabienetre.fr (ancien) | 12 | 158 | 927 (892) |
| espritaloe.fr (nouveau) | 3 | 21 | 190 (2) |

Ce que j'ai testé :

- `https://monaloeverabienetre.fr/` ne se charge pas du tout. L'ancien site Webflow était en HTTPS, donc la plupart des liens existants pointent en https et aboutissent dans le vide.
- `http://monaloeverabienetre.fr/` redirige vers `https://espritaloe.fr/` en conservant le chemin.
- Conserver le chemin ne marche que si les slugs sont identiques. `http://monaloeverabienetre.fr/blog/programme-c9` arrive sur `espritaloe.fr/blog/programme-c9`, qui répond 404.
- La page 404 s'intitule « Page en construction », ce qui donne l'impression d'un site inachevé.

**Bonne nouvelle, vue dans le dépôt :** la table de correspondance existe déjà. `redirections-webflow-final.csv` liste 89 anciennes URL Webflow avec leur nouvelle destination, mais `vercel.json` ne contient aujourd'hui que 4 règles (www → racine, et 2 anciennes URL produits). La table n'a jamais été branchée : il suffit de la convertir en règles `vercel.json` limitées à l'hôte de l'ancien domaine.

Correction :

1. Ajouter `monaloeverabienetre.fr` et `www.monaloeverabienetre.fr` comme domaines du projet Vercel et faire pointer le DNS OVH vers Vercel. Vercel délivre alors le certificat HTTPS.
2. Constituer la liste des anciennes URL : ancienne propriété Search Console (rapports Pages et Performances), un sitemap Webflow archivé, ou la Wayback Machine.
3. Associer chaque ancienne URL à la nouvelle page la plus proche dans `vercel.json` avec des 301, règles spécifiques d'abord, règle générale en dernier (exemple ci-dessous).
4. Dans la Search Console, lancer l'outil de changement d'adresse de l'ancienne propriété vers espritaloe.fr.
5. Renommer la page 404 (« Page introuvable ») et y ajouter des liens vers le catalogue, le blog et le guide C9.

```json
{
  "redirects": [
    { "source": "/blog/programme-c9", "has": [{ "type": "host", "value": "monaloeverabienetre.fr" }], "destination": "https://espritaloe.fr/blog/programme-c9-forever-guide-cure-detox-9-jours/", "permanent": true },
    { "source": "/:path*", "has": [{ "type": "host", "value": "monaloeverabienetre.fr" }], "destination": "https://espritaloe.fr/:path*", "permanent": true }
  ]
}
```

La première règle est une illustration : j'ai deviné cet ancien chemin. Les chiffres d'Ubersuggest incluent des liens de faible qualité : vérifiez quels domaines référents sont réels avant d'espérer un gros saut.

## SEO technique

Les fondations sont solides ; un seul point (le décalage de mise en page sur desktop) mérite d'être corrigé rapidement. Déjà en place : CDN Vercel avec Brotli, HTTPS, `lang="fr"`, canoniques vers elles-mêmes sur les 98 pages, aucun titre ni description en double, vrai statut 404, images WebP avec largeur/hauteur et chargement différé, et liens d'affiliation vers foreverliving.fr marqués `rel="sponsored"`.

| Problème | Où | Correction | Priorité |
| --- | --- | --- | --- |
| CLS desktop 0,211 (bon : moins de 0,1) | Accueil, test labo PageSpeed | Probablement la police Fraunces qui s'affiche après coup (`font-display: swap`). Précharger la graisse principale et ajouter une police de repli ajustée en taille pour que les titres ne bougent pas. Retester ensuite. | Haute |
| robots.txt bloque /mentions-legales et /confidentialite, qui ont aussi un `noindex` | robots.txt | Supprimer les deux lignes `Disallow`. Google ne peut pas lire un `noindex` sur une page bloquée : les URL peuvent quand même être indexées via des liens. | Moyenne |
| /bilan-un-mois-apres-c9/ est liée en interne mais en `noindex, nofollow` et absente du sitemap | Liens internes | La publier (index + sitemap) ou retirer les liens en attendant. | Basse |
| Maillage interne faible | /devenir-distributeur-forever-living-suisse/ (1 lien entrant), /blog/vente-a-domicile-aloe-vera-vdi/ (2), /glossaire/aloine/ (2) | Ajouter des liens depuis les articles liés et les FAQ produits (aloine depuis chaque page d'aloe à boire). | Basse |
| PageSpeed signale une redirection (190 ms desktop, 601 ms mobile) | URL testée | Sans doute http→https. Utiliser `https://espritaloe.fr/` dans tous les profils, signatures et pubs. | Basse |
| Image hero chargée immédiatement mais sans indice de priorité | Accueil | Ajouter `fetchpriority="high"` sur le `<img>` hero. | Basse |

## Contenu et on-page

La qualité du contenu est un vrai point fort ; le problème principal, c'est une douzaine de fiches produits quasi identiques entre elles. Les articles font 1 400 à 2 800 mots, chaque page a un seul H1, les articles portent auteur et dates, et ils citent l'ANSES, l'EFSA, EUR-Lex, PubMed/PMC et le NCCIH. Le journal C9 est une vraie expérience vécue, ce que Google et les moteurs IA valorisent tous les deux.

**Pages saveurs quasi identiques.** J'ai comparé le texte des pages deux à deux (séquences de 5 mots communes) :

| Pages comparées | Texte commun |
| --- | --- |
| F15 Avancé Vanille vs F15 Avancé Chocolat | 96 % |
| C9 Berry Vanille vs C9 Berry Chocolat | 95 % |
| C9 Vanille vs C9 Chocolat | 94 % |
| F15 Débutant Vanille vs F15 Intermédiaire Vanille | 75 % |

Google va retenir une page par groupe et filtrer les autres : 12 pages programmes se disputent donc les mêmes requêtes. Fusionner en une page par programme (C9, F15 Débutant, F15 Intermédiaire, F15 Avancé ; voire une seule page F15 avec un sélecteur de niveau), la saveur devenant une option, et rediriger les variantes en 301 vers elle. Idem pour Lite Ultra choco/vanille (54 % de texte commun).

**Cannibalisation C9.** Cinq URL visent le C9 : les fiches produits, le guide, l'article avis, le journal et les recettes. Le site n'est pas dans le top 100 sur « programme c9 ». Donnez une intention à chacune : guide = « programme c9 », avis = « c9 forever avis », fiche produit = achat. Liez-les entre elles avec ces ancres exactes.

**Titres et descriptions.** Cinq titres dépassent ~65 caractères et seront tronqués : /glossaire/ (79), /blog/forever-living-avis-produits-france/ (73), /glossaire/msm/ (72), /glossaire/glucosamine-chondroitine/ (72), /glossaire/arginine/ (71). Une douzaine de descriptions dépassent 165 caractères, les plus longues sur /produits/programmes-detox/ (197) et /produits/nutrition/ (192). Priorité basse.

**Incohérence.** L'accueil annonce « Plus de trente produits » dans une section et « 51 produits » dans une autre. Le catalogue en compte 51 : harmoniser.

**Formulation des allégations.** Les FAQ produits disent que l'aloe « aide à soutenir la digestion et contribue aux défenses naturelles ». Les allégations sur l'aloe figurent dans la liste européenne des botaniques « en attente », contrairement à celles sur la vitamine C, qui sont autorisées. Le glossaire indique déjà le statut DGCCRF de chaque allégation ; appliquez la même vérification aux FAQ produits. C'est une question de confiance et de conformité, pas d'angle médical (je ne suis pas juriste).

## Données structurées

La couverture est excellente ; les manques portent sur la description de l'entité commerciale. Chaque page publie un JSON-LD valide.

| Type de schéma | Où |
| --- | --- |
| Product + Offer + MerchantReturnPolicy + BreadcrumbList | 51 fiches produits |
| FAQPage | La plupart des fiches produits, articles, entrées du glossaire et pages de service |
| BlogPosting (auteur Person, dates de publication/modification, image) | 18 articles + journal C9 |
| CollectionPage + ItemList | 5 pages catégories |
| LocalBusiness (adresse, horaires, zones desservies) | Page Loire-Atlantique |
| DefinedTerm / DefinedTermSet | Glossaire |
| AboutPage + Person, ContactPage, HowTo | À propos, Contact, Commander |

Google n'affiche plus les résultats enrichis FAQ que pour les sites gouvernementaux et de santé, et plus du tout les HowTo. Gardez-les quand même : les moteurs IA et autres analyseurs les lisent.

Manques à combler :

- **Organization** n'a ni `logo`, ni `address`, ni `email`. Le LocalBusiness de la page Loire-Atlantique utilise un autre `@id` : on dirait deux entreprises. Ajoutez au LocalBusiness `"parentOrganization": {"@id": "https://espritaloe.fr/#organization"}` et des coordonnées `geo`.
- **sameAs** ne liste que Facebook et un lien court `maps.app.goo.gl`. Mettez l'URL complète de la fiche Google Maps/Business Profile et ajoutez les autres profils réels (LinkedIn, Instagram, page distributeur Forever).
- **Offer** indique Esprit Aloé comme vendeur avec retours gratuits sous 30 jours, alors que les commandes passent par la boutique Forever. Vérifiez que ces conditions correspondent à la politique réelle de Forever et à votre page /livraison/.
- **Variantes de saveur** : une fois fusionnées, utilisez `ProductGroup` avec `hasVariant` et `variesBy: flavor`.
- **Avis** : aucun pour l'instant. Quand la collection d'avis sera en ligne, ajoutez `Review` / `AggregateRating` uniquement pour des avis authentiques.

## Préparation à la recherche IA (GEO / AEO)

Le site est déjà facile à lire et à citer pour les moteurs IA ; il n'est simplement mentionné nulle part où ils regardent. Sur le site, l'essentiel est bien fait :

- llms.txt existe, décrit le site et indique le modèle de parrainage.
- robots.txt autorise tous les robots : GPTBot, ClaudeBot, PerplexityBot, Google-Extended et CCBot peuvent tous le lire.
- Les pages sont rendues côté serveur par Astro : FAQ et tableaux sont dans le HTML sans JavaScript.
- Les titres en forme de question collent à la façon dont les gens interrogent les IA (« Les produits Forever sont-ils dangereux ? », « Forever Living est-il une pyramide ? »).
- Le glossaire en DefinedTerm, les sources citées et la transparence sur le parrainage envoient des signaux de confiance.

Le manque est hors site. Sur les 10 prompts suivis dans Ubersuggest (OpenAI seulement, 5 réponses à ce jour), Esprit Aloé n'est jamais cité. À la place : Pur Aloé, MKL Green Nature, 4everaloevera, Aloe Vera Pour Tous, Ghaloe et Forever Living lui-même. Pour « où acheter le programme C9 au meilleur prix », trois des quatre réponses sont d'autres sites de distributeurs : vos concurrents directs.

Ce qui fait bouger la visibilité IA :

1. **Créer des pages comparatives citables.** Les prompts commerciaux (« meilleur jus d'aloe vera ») sont répondus à partir de contenus comparatifs, et vous n'en avez aucun. Une page honnête comme « Pulpe d'aloe vera : comparatif des marques (teneur, certification IASC, prix au litre) » donne aux moteurs un tableau à citer.
2. **Répondre d'abord sous chaque titre-question.** Les FAQ produits commencent déjà par la réponse (« Comptez 60 à 90 ml par jour »). Appliquez la même réponse directe de 40 à 60 mots sous chaque H2 en question dans le blog.
3. **Être mentionné là où les moteurs lisent.** Presse locale (Ouest-France, Presse Océan, L'Écho de la Presqu'île), blogs bien-être et sport, annuaires VDI/FVD, et réponses sincères sur les forums.
4. **Rendre l'entité cohérente.** Mêmes nom, adresse et téléphone sur Google Business Profile, Facebook, PagesJaunes et les annuaires ; collecter des avis Google.
5. **Alimenter Bing.** ChatGPT Search et Copilot s'appuient sur l'index de Bing. Soumettre le sitemap dans Bing Webmaster Tools et activer IndexNow au déploiement.
6. **Suivre plus de moteurs et des prompts gagnables.** Ajouter Gemini et les AI Overviews de Google au suivi de marque Ubersuggest, plus des prompts à votre portée : « distributeur Forever Loire-Atlantique », « C9 Forever avis », « Forever Living est-il une pyramide ».

## Plan d'action

Commencez par les redirections et la fusion des pages : ce sont deux changements de code ponctuels à plus fort effet.

**Cette semaine**

- [ ] Servir monaloeverabienetre.fr en HTTPS via Vercel et ajouter la table de 301
- [ ] Lancer le changement d'adresse dans la Search Console
- [ ] Corriger le CLS desktop (préchargement de police + police de repli) et retester dans PageSpeed
- [ ] Supprimer les deux lignes `Disallow` du robots.txt
- [ ] Renommer la page 404 et y ajouter des liens

**Ce mois-ci**

- [ ] Fusionner les pages saveurs C9, F15 et Lite Ultra ; rediriger les variantes en 301 ; passer en ProductGroup
- [ ] Attribuer une requête cible à chaque page C9 et les lier entre elles avec ces ancres
- [ ] Ajouter logo, adresse et parentOrganization au schéma ; corriger sameAs
- [ ] Harmoniser le nombre de produits sur l'accueil (51) et la formulation des allégations dans les FAQ produits
- [ ] Soumettre le sitemap à Bing Webmaster Tools ; activer IndexNow
- [ ] Trancher pour /bilan-un-mois-apres-c9/ : publier ou retirer les liens

**Les trois prochains mois**

- [ ] Publier 2 ou 3 pages comparatives avec tableaux prix au litre et certification
- [ ] Obtenir plus de 10 liens suivis : presse locale, blogs partenaires, annuaires VDI/FVD
- [ ] Compléter la fiche Google Business Profile et collecter des avis
- [ ] Mettre en ligne la collection d'avis avec le balisage Review
- [ ] Ajouter Gemini et les AI Overviews au suivi IA ; faire le point chaque mois

## Méthode et sources

Toutes les 98 URL du sitemap ont été explorées depuis un navigateur le 15 novembre 2026, en lisant le HTML brut : statut, titres, descriptions, canoniques, meta robots, titres Hn, JSON-LD, images et liens internes. Texte commun = part des séquences de 5 mots partagées entre deux pages. Positions, estimations de trafic, backlinks, PageSpeed et visibilité IA viennent du compte Ubersuggest (offre gratuite, projet « Esprit Aloe », France) ; ses chiffres de trafic sont des estimations, à confirmer dans la Search Console.

- [espritaloe.fr](https://espritaloe.fr/) · [sitemap](https://espritaloe.fr/sitemap-index.xml) · [robots.txt](https://espritaloe.fr/robots.txt) · [llms.txt](https://espritaloe.fr/llms.txt)
- Ancien domaine : http://monaloeverabienetre.fr/
- Ubersuggest : vue d'ensemble du domaine, suivi de positions (au 13 nov. 2026), backlinks, audit PageSpeed, visibilité de marque IA
