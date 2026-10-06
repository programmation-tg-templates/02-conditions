# TP12 — Saut du personnage

**Objectifs** :

- Combiner deux booléens avec `&&`.
- Utiliser `!` pour inverser un booléen.

## Consignes

Le personnage peut sauter quand il est au sol et qu’il n’est pas accroupi.

Écrivez la condition qui fait retourner `true` quand le saut est possible.

Exemples :

- `peutSauter(true, false)` retourne `true`.
- `peutSauter(false, false)` retourne `false`.

Sur INGInious, la signature, le `if` et les deux `return` sont fournis : vous écrivez seulement la condition, entre les parenthèses du `if`, sans point-virgule.

Un jeu de plateforme autorise un saut seulement si plusieurs conditions sont réunies.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp12
```

## Soumettre sur INGInious

Ouvrez la tâche « TP12 — Saut du personnage », répondez à la ou aux questions, puis écrivez la condition dans le champ de réponse.
