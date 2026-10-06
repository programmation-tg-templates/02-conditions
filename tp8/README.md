# TP8 — État de santé

**Objectifs** :

- Écrire une chaine de `else if` à trois cas.
- Placer correctement les bornes de chaque cas.

## Consignes

Retournez `mort` si les points de vie sont inférieurs ou égaux à 0.

Retournez `blessé` de 1 à 50 points de vie.

Retournez `en forme` au-dessus de 50 points de vie.

Écrivez le corps de la fonction avec `if`, `else if` et `else`.

Exemples :

- `etatSante(0)` retourne `mort`.
- `etatSante(80)` retourne `en forme`.

Sur INGInious, la signature et l’accolade fermante sont fournies : vous écrivez le contenu de la fonction.

Une barre de vie change de couleur ou de message selon des tranches de points.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp8
```

## Soumettre sur INGInious

Commencez par la tâche « TP8 — Prédiction ».
Ouvrez la tâche « TP8 — État de santé » et écrivez le corps de la fonction dans le champ de réponse.
Terminez avec la tâche « TP8 — Questions ».
