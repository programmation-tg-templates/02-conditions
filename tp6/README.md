# TP6 — Limite de vitesse

**Objectifs** :

- Écrire un `if` sans `else`.
- Utiliser le `return` placé après le bloc comme valeur par défaut.

## Consignes

Si la vitesse dépasse 120, retournez 120.

Sinon, retournez la vitesse reçue, sans la modifier.

Le `return vitesse;` final est fourni : écrivez le `if` qui le précède.

Exemples :

- `limiterVitesse(200)` retourne `120`.
- `limiterVitesse(90)` retourne `90`.

Sur INGInious, la signature et l’accolade fermante sont fournies : vous écrivez le contenu de la fonction.

Les jeux de course et les moteurs physiques plafonnent une vitesse pour éviter des valeurs absurdes.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp6
```

## Soumettre sur INGInious

Ouvrez la tâche « TP6 — Limite de vitesse », répondez à la ou aux questions, puis écrivez le corps de la fonction dans le champ de réponse.
