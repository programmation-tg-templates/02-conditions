# TP18 — Année bissextile

**Objectifs** :

- Traduire une règle avec exception en expression logique.
- Écrire la signature d’une fonction à partir de sa description.
- Retourner un booléen qui combine `%`, `&&` et `||`.

## Consignes

Écrivez, dans `tp18.ts`, la fonction décrite ci-dessous, sans oublier `export` devant `function`.

Créez la fonction `estBissextile`.

Elle reçoit un nombre, `annee`, et retourne un booléen.

Une année est bissextile si elle est divisible par 4, sauf si elle est divisible par 100.

Une année divisible par 400 reste bissextile.

Retournez `true` si l’année est bissextile et `false` sinon.

Exemples :

- `estBissextile(2024)` retourne `true`.
- `estBissextile(1900)` retourne `false`.

Sur INGInious, le champ de réponse est vide : écrivez la fonction complète, signature comprise.

Les règles conditionnelles servent à décider si un événement doit se répéter dans un calendrier numérique.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp18
```

## Soumettre sur INGInious

Ouvrez la tâche « TP18 — Année bissextile » et écrivez la fonction complète dans le champ de réponse, vide au départ.
N’écrivez pas `export` : la correction l’ajoute elle-même.
