# TP5 — Record battu

**Objectifs** :

- Comparer deux paramètres entre eux avec `>`.
- Choisir `>` ou `>=` quand les deux valeurs peuvent être égales.

## Consignes

Un joueur bat le record quand son score est strictement supérieur au record.

Écrivez la condition qui fait retourner `true` quand le record est battu.

Exemples :

- `aBattuLeRecord(150, 100)` retourne `true`.
- `aBattuLeRecord(20, 100)` retourne `false`.

Sur INGInious, la signature, le `if` et les deux `return` sont fournis : vous écrivez seulement la condition, entre les parenthèses du `if`, sans point-virgule.

Un jeu compare le score du joueur au meilleur score enregistré pour afficher un message de record.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp5
```

## Soumettre sur INGInious

Ouvrez la tâche « TP5 — Record battu », répondez à la ou aux questions, puis écrivez la condition dans le champ de réponse.
