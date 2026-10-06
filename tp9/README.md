# TP9 — Format d’écran

**Objectifs** :

- Écrire une chaine de `else if` qui classe une valeur dans trois intervalles.
- Expliquer l’effet de l’ordre des tests.

## Consignes

Retournez `mobile` si la largeur est inférieure à 600.

Retournez `tablette` si la largeur est inférieure à 1024.

Retournez `ordinateur` dans tous les autres cas.

Écrivez le corps de la fonction avec `if`, `else if` et `else`.

Exemples :

- `formatEcran(320)` retourne `mobile`.
- `formatEcran(1920)` retourne `ordinateur`.

Sur INGInious, la signature et l’accolade fermante sont fournies : vous écrivez le contenu de la fonction.

Un site web adapte sa mise en page selon la largeur de l’écran.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp9
```

## Soumettre sur INGInious

Commencez par la tâche « TP9 — Prédiction ».
Ouvrez la tâche « TP9 — Format d’écran » et écrivez le corps de la fonction dans le champ de réponse.
