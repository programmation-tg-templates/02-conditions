# TP2 — Fin de partie

**Objectifs** :

- Écrire une comparaison d’égalité avec `===`.
- Distinguer `===` (comparer) de `=` (affecter).

## Consignes

La partie est terminée quand il ne reste aucune vie.

Écrivez la condition qui fait retourner `true` quand la partie est terminée.

Exemples :

- `estGameOver(0)` retourne `true`.
- `estGameOver(2)` retourne `false`.

Sur INGInious, la signature, le `if` et les deux `return` sont fournis : vous écrivez seulement la condition, entre les parenthèses du `if`, sans point-virgule.

Un jeu teste à chaque image si la partie est terminée : une comparaison d’égalité décide du moment.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp2
```

## Soumettre sur INGInious

Ouvrez la tâche « TP2 — Fin de partie », répondez à la ou aux questions, puis écrivez la condition dans le champ de réponse.
