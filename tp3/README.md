# TP3 — Route gelée

**Objectifs** :

- Écrire une comparaison avec `<`.
- Traiter correctement la valeur 0, au seuil.

## Consignes

Une route est gelée quand la température est strictement inférieure à 0 °C.

Écrivez la condition qui fait retourner `true` quand la route est gelée.

Exemples :

- `estGele(-5)` retourne `true`.
- `estGele(12)` retourne `false`.

Sur INGInious, la signature, le `if` et les deux `return` sont fournis : vous écrivez seulement la condition, entre les parenthèses du `if`, sans point-virgule.

Une application météo ou un jeu de conduite change de comportement selon un seuil de température.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp3
```

## Soumettre sur INGInious

Commencez par la tâche « TP3 — Prédiction ».
Ouvrez la tâche « TP3 — Route gelée » et écrivez la condition dans le champ de réponse.
