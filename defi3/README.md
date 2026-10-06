# Défi 3 — Case libre

**Objectifs** :

- Réutiliser une fonction écrite précédemment.
- Combiner une vérification de limites et un test de position.

## Consignes

Écrivez, dans `defi3.ts`, la fonction décrite ci-dessous, sans oublier `export` devant `function`.

Ce défi est facultatif : il n’est jamais nécessaire pour l’évaluation.

Créez la fonction `estCaseLibre`.

Elle reçoit six nombres, `x`, `y`, `largeur`, `hauteur`, `murX` et `murY`, et retourne un booléen.

Une case est libre quand elle se trouve dans la grille (voir le défi 1) et qu’elle n’est pas la case du mur.

Le mur occupe la case de coordonnées `murX` et `murY`.

Recopiez votre fonction `estDansLimites` dans le champ de réponse et utilisez-la.

Exemples :

- `estCaseLibre(1, 1, 5, 5, 2, 2)` retourne `true`.
- `estCaseLibre(2, 2, 5, 5, 2, 2)` retourne `false`.

Sur INGInious, le champ de réponse est vide : écrivez la fonction complète, signature comprise.

Avant de déplacer un personnage dans un labyrinthe, un jeu vérifie que la case existe et qu’elle n’est pas un mur.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- defi3
```

## Soumettre sur INGInious

Ouvrez la tâche « Défi 3 — Case libre », puis écrivez la fonction complète dans le champ de réponse, vide au départ.
N’écrivez pas `export` : la correction l’ajoute elle-même.
