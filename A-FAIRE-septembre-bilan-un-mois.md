# À FAIRE vers le 19 septembre 2026 — article de suivi à un mois

Fichier concerné : `src/pages/bilan-un-mois-apres-c9.astro`

## Pourquoi cette page existe déjà

Elle a été créée à l'avance pour que le maillage interne soit en place
dès maintenant (lien depuis le journal C9). L'URL est définitive, rien
ne sera à recâbler le jour de la publication.

Elle est actuellement en **noindex** : Google ne l'indexe pas tant qu'elle
ne contient pas de vrai contenu. C'est volontaire — une page vide indexée
nuit à la qualité perçue du site.

## Les mesures à reprendre

Exactement les mêmes qu'au Jour 1 et au Jour 10, à jeun le matin :

| Mesure           | Jour 1  | Jour 10 | Un mois après |
|------------------|---------|---------|---------------|
| Poids            | 82,4 kg | 79,0 kg | à relever     |
| Tour de poitrine | 103 cm  | 98 cm   | à relever     |
| Tour de nombril  | 98 cm   | 92 cm   | à relever     |
| Tour de taille   | 95 cm   | 93 cm   | à relever     |
| Tour de cuisse   | 61 cm   | 61 cm   | à relever     |
| Tour de bras     | 34 cm   | 32 cm   | à relever     |

Penser aussi à refaire une photo de balance dans les mêmes conditions,
pour compléter le montage avant/après existant.

## Les étapes le jour de la publication

1. Écrire le contenu réel de la page (remplacer les blocs « en préparation »)
2. **Retirer `noindex={true}`** dans les props du Layout
3. Vérifier que le lien depuis le journal fonctionne toujours
4. `npm run build` puis push
5. Soumettre l'URL dans la Search Console :
   `https://espritaloe.fr/bilan-un-mois-apres-c9/`

## Les questions auxquelles répondre

- Que reste-t-il de la perte : reprise, stabilisation, poursuite ?
- Quelles habitudes ont réellement tenu, lesquelles ont filé ?
- Le F15 a-t-il été fait ou non, et pourquoi ?
- Qu'est-ce qui fait la différence entre ceux qui conservent et les autres ?

Répondre honnêtement, même si les chiffres sont moins bons qu'espéré :
c'est précisément ce qui distingue ce contenu de ce que publient les
concurrents, qui ne donnent jamais de suivi post-cure.
