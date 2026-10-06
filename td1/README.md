# TD1 — Conditions sur l’âge et un nombre

**Objectifs** :

- Écrire la signature d’une fonction à partir de sa description.
- Écrire un `if ... else` qui retourne une valeur.
- Combiner deux critères avec `&&`.

## Consignes

Écrivez, dans `td1.ts`, les fonctions décrites ci-dessous, sans oublier `export` devant `function`.

Créez la fonction `majoriteCivile`.

Elle reçoit un nombre, `age`, et retourne une chaine de caractères.

Retournez `Majeur` si la personne a 18 ans ou plus, et `Mineur` sinon.

Exemples :

- `majoriteCivile(19)` retourne `Majeur`.
- `majoriteCivile(16)` retourne `Mineur`.

Créez la fonction `estPairEtPositif`.

Elle reçoit un nombre, `nombre`, et retourne un booléen.

Retournez `true` si le nombre est pair et strictement positif, et `false` sinon.

Exemples :

- `estPairEtPositif(10)` retourne `true`.
- `estPairEtPositif(-10)` retourne `false`.
- `estPairEtPositif(11)` retourne `false`.

Sur INGInious, le champ de réponse est vide : écrivez la fonction complète, signature comprise.

Les conditions permettent par exemple d’autoriser une action dans un jeu selon l’état du personnage.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- td1
```

## Soumettre sur INGInious

Ouvrez la tâche « TD1 — Conditions sur l’âge et un nombre », répondez à la question, puis écrivez la fonction complète dans le champ de réponse, vide au départ.
N’écrivez pas `export` : la correction l’ajoute elle-même.
