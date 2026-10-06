# TP15 — Note valide

**Objectifs** :

- Écrire un intervalle avec `&&`.
- Distinguer ET et OU dans une condition à deux bornes.

## Consignes

Une note est valide quand elle est comprise entre 0 et 20, bornes incluses.

Écrivez la condition qui fait retourner `true` pour une note valide.

Comparez avec le TP précédent : être dans un intervalle est le contraire d’en sortir.

Quel opérateur change ?

Exemples :

- `estNoteValide(12)` retourne `true`.
- `estNoteValide(25)` retourne `false`.

Sur INGInious, la signature, le `if` et les deux `return` sont fournis : vous écrivez seulement la condition, entre les parenthèses du `if`, sans point-virgule.

Un formulaire refuse une valeur hors de l’intervalle attendu avant de l’envoyer au serveur.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp15
```

## Soumettre sur INGInious

Ouvrez la tâche « TP15 — Note valide » et écrivez la condition dans le champ de réponse.
