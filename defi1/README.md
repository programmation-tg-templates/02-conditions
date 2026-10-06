# Défi 1 — Dans les limites

**Objectifs** :

- Combiner quatre comparaisons avec `&&`.
- Placer les bornes d’une grille sans erreur d’un cran.

## Consignes

Écrivez, dans `defi1.ts`, la fonction décrite ci-dessous, sans oublier `export` devant `function`.

Ce défi est facultatif : il n’est jamais nécessaire pour l’évaluation.

Créez la fonction `estDansLimites`.

Elle reçoit quatre nombres, `x`, `y`, `largeur` et `hauteur`, et retourne un booléen.

Une grille de largeur `largeur` et de hauteur `hauteur` contient les colonnes de 0 à `largeur - 1` et les lignes de 0 à `hauteur - 1`.

Retournez `true` si la case de coordonnées `x` et `y` se trouve dans la grille, et `false` sinon.

Exemples :

- `estDansLimites(3, 2, 10, 5)` retourne `true`.
- `estDansLimites(10, 2, 10, 5)` retourne `false`.

Sur INGInious, le champ de réponse est vide : écrivez la fonction complète, signature comprise.

C’est la première brique d’un jeu de labyrinthe : savoir si une case existe avant de s’y déplacer.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- defi1
```

## Soumettre sur INGInious

Ouvrez la tâche « Défi 1 — Dans les limites », puis écrivez la fonction complète dans le champ de réponse, vide au départ.
N’écrivez pas `export` : la correction l’ajoute elle-même.
