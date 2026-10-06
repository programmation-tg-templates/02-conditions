# Défi 2 — Catégorie de dégâts

**Objectifs** :

- Écrire une chaine de `else if` à quatre cas.
- Ordonner quatre tests sans en oublier aucun.

## Consignes

Écrivez, dans `defi2.ts`, la fonction décrite ci-dessous, sans oublier `export` devant `function`.

Ce défi est facultatif : il n’est jamais nécessaire pour l’évaluation.

Créez la fonction `categorieDeDegats`.

Elle reçoit un nombre, `points`, et retourne une chaine de caractères.

Retournez `raté` si les dégâts sont inférieurs ou égaux à 0.

Retournez `égratignure` de 1 à 19 points.

Retournez `blessure` de 20 à 49 points.

Retournez `critique` à partir de 50 points.

Exemples :

- `categorieDeDegats(30)` retourne `blessure`.

Sur INGInious, le champ de réponse est vide : écrivez la fonction complète, signature comprise.

Un jeu de combat affiche un message différent selon la force du coup reçu.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- defi2
```

## Soumettre sur INGInious

Ouvrez la tâche « Défi 2 — Catégorie de dégâts », puis écrivez la fonction complète dans le champ de réponse, vide au départ.
N’écrivez pas `export` : la correction l’ajoute elle-même.
