# Brancher la Search Console — à faire une fois

Objectif : que `node scripts/gsc-export.mjs` télécharge tes vraies données GSC dans `data/analytics/`, pour que les agents `analytics` et `concurrence` travaillent sur du réel et non sur des exports manuels.

Compte 10 à 15 minutes. C'est gratuit.

## 1. Projet Google Cloud

1. Va sur [console.cloud.google.com](https://console.cloud.google.com/)
2. En haut, sélecteur de projet → **Nouveau projet** → nom : `espritaloe-seo` → Créer
3. Vérifie que ce projet est bien sélectionné avant de continuer

## 2. Activer l'API

1. Menu ☰ → **API et services** → **Bibliothèque**
2. Cherche `Google Search Console API` → **Activer**

## 3. Compte de service + clé

1. **API et services** → **Identifiants** → *Créer des identifiants* → **Compte de service**
2. Nom : `lecteur-gsc` → Créer et continuer → aucun rôle nécessaire → Terminé
3. Clique sur le compte de service créé → onglet **Clés** → *Ajouter une clé* → *Créer une clé* → **JSON** → la clé se télécharge

⚠️ **Où ranger cette clé** : surtout pas dans le repo ni dans OneDrive. Crée un dossier local :

```powershell
mkdir C:\Users\rafae\.secrets
```

et déplaces-y le fichier JSON téléchargé.

## 4. Autoriser le compte de service dans la Search Console

1. Ouvre le fichier JSON, copie la valeur de `client_email` (ça ressemble à `lecteur-gsc@espritaloe-seo.iam.gserviceaccount.com`)
2. Va sur [search.google.com/search-console](https://search.google.com/search-console/) → ta propriété espritaloe.fr
3. **Paramètres** → **Utilisateurs et autorisations** → *Ajouter un utilisateur*
4. Colle l'e-mail, autorisation **Restreinte** (lecture seule suffit) → Ajouter

## 5. Configurer le repo

Copie `.env.example` en `.env` et renseigne :

```
GSC_SITE_URL=sc-domain:espritaloe.fr
GSC_KEY_FILE=C:\Users\rafae\.secrets\gsc-service-account.json
```

Pour `GSC_SITE_URL`, reprends **exactement** ce qu'affiche la Search Console : une propriété de domaine s'écrit `sc-domain:espritaloe.fr`, une propriété par préfixe d'URL s'écrit `https://espritaloe.fr/` (barre finale comprise). C'est la cause n°1 d'erreur 403.

## 6. Tester

```powershell
node scripts/gsc-export.mjs
```

Tu devrais voir quatre fichiers créés dans `data/analytics/`. Ensuite, dans Claude Code :

```
utilise l'agent analytics pour analyser les derniers exports Search Console
```

## Options

```powershell
node scripts/gsc-export.mjs --jours 90
node scripts/gsc-export.mjs --depuis 2026-08-01 --jusqu 2026-08-27
```

## Si ça coince

- **403 / "User does not have sufficient permission"** → l'e-mail du compte de service n'est pas (ou pas encore) autorisé dans la Search Console, ou `GSC_SITE_URL` ne correspond pas exactement à la propriété.
- **`invalid_grant`** → l'horloge du PC est décalée, ou la clé JSON a été tronquée à la copie.
- **0 ligne partout** → la période demandée est trop récente : la GSC a 2 à 3 jours de latence (le script s'arrête déjà à J-3).

## Ce que les données permettent

Les fichiers exportés :

| Fichier | Contenu | À quoi ça sert |
|---|---|---|
| `gsc-requetes_*.csv` | requêtes, clics, impressions, CTR, position | trouver les requêtes en position 5–20 : les places les plus faciles à gagner |
| `gsc-pages_*.csv` | performance par page | repérer les pages qui décrochent |
| `gsc-requetes-par-page_*.csv` | croisement page × requête | voir sur quoi chaque page ressort *vraiment*, souvent pas ce qu'on croyait |
| `gsc-jours_*.csv` | évolution jour par jour | mesurer l'effet d'une modification, suivre les fenêtres de mesure |

Le croisement page × requête est le plus instructif : c'est là qu'on découvre qu'un article se classe sur une requête à laquelle il ne répond qu'à moitié — un gain rapide en le complétant.
