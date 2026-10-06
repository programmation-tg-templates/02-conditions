# TP14 — Hors de l’écran

**Objectifs** :

- Écrire une condition à deux bornes avec `||`.
- Placer les bornes sans erreur d’un cran.

## Consignes

Un écran de largeur `largeur` contient les colonnes de 0 à `largeur - 1`.

Écrivez la condition qui fait retourner `true` quand la colonne `x` est en dehors de l’écran.

Le TP suivant traite le cas inverse : être dans un intervalle.

Exemples :

- `estHorsEcran(-3, 800)` retourne `true`.
- `estHorsEcran(400, 800)` retourne `false`.

Sur INGInious, la signature, le `if` et les deux `return` sont fournis : vous écrivez seulement la condition, entre les parenthèses du `if`, sans point-virgule.

Un jeu détecte qu’un personnage ou un projectile sort de l’écran pour le retirer ou le faire réapparaître.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp14
```

## Soumettre sur INGInious

Commencez par la tâche « TP14 — Prédiction ».
Ouvrez la tâche « TP14 — Hors de l’écran » et écrivez la condition dans le champ de réponse.
