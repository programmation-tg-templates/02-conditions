# TP19 — Casse d’une lettre

**Objectifs** :

- Comparer des lettres selon leur ordre.
- Écrire la signature d’une fonction à partir de sa description.
- Signaler une chaine vide, trop longue ou qui n’est pas une lettre.

## Consignes

Écrivez, dans `tp19.ts`, la fonction décrite ci-dessous, sans oublier `export` devant `function`.

Créez la fonction `verifierLettre`.

Elle reçoit une chaine de caractères, `lettre`, et retourne une chaine de caractères.

Retournez `majuscule`, `minuscule` ou `invalide`.

Une lettre majuscule se trouve entre `A` et `Z`, et une lettre minuscule entre `a` et `z`.

Une chaine vide, une chaine de plus d’un caractère ou un caractère qui n’est pas une lettre est invalide.

Exemples :

- `verifierLettre("A")` retourne `majuscule`.
- `verifierLettre("3")` retourne `invalide`.

Sur INGInious, le champ de réponse est vide : écrivez la fonction complète, signature comprise.

Une condition sur la casse permet, par exemple, d’adapter l’affichage d’un texte saisi dans une interface.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp19
```

## Soumettre sur INGInious

Commencez par la tâche « TP19 — Prédiction ».
Ouvrez la tâche « TP19 — Casse d’une lettre » et écrivez la fonction complète dans le champ de réponse, vide au départ.
N’écrivez pas `export` : la correction l’ajoute elle-même.
