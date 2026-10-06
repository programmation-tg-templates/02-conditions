# TP1 — Gagner la partie

**Objectifs** :

- Écrire une comparaison avec `>=`.
- Choisir entre `>` et `>=` au seuil.

## Consignes

Un joueur gagne la partie quand il atteint 100 points ou plus.

Écrivez la condition qui fait retourner `true` au joueur qui gagne.

Exemples :

- `aGagne(150)` retourne `true`.
- `aGagne(20)` retourne `false`.

Sur INGInious, la signature, le `if` et les deux `return` sont fournis : vous écrivez seulement la condition, entre les parenthèses du `if`, sans point-virgule.

Une condition de victoire ou de passage au niveau suivant se programme avec un seuil, comme dans la plupart des jeux.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp1
```

## Soumettre sur INGInious

Ouvrez la tâche « TP1 — Gagner la partie », répondez à la ou aux questions, puis écrivez la condition dans le champ de réponse.
