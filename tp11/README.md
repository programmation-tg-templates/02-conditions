# TP11 — Appréciation d’une note

**Objectifs** :

- Écrire la signature d’une fonction à partir de sa description.
- Classer une note dans l’un des quatre intervalles.
- Reconnaître une valeur hors de l’intervalle autorisé.

## Consignes

Écrivez, dans `tp11.ts`, la fonction décrite ci-dessous, sans oublier `export` devant `function`.

Créez la fonction `donnerAppreciation`.

Elle reçoit un nombre, `note`, et retourne une chaine de caractères.

Retournez l’appréciation qui correspond à la note reçue.

- De 0 à 7 : `Très faible`.
- De 8 à 12 : `Moyenne`.
- De 13 à 16 : `Bien`.
- De 17 à 20 : `Excellent`.
- En dehors de l’intervalle de 0 à 20 : `Note invalide`.

Sur INGInious, le champ de réponse est vide : écrivez la fonction complète, signature comprise.

Les conditions par intervalles servent, par exemple, à classer automatiquement des éléments dans un outil graphique.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp11
```

## Soumettre sur INGInious

Ouvrez la tâche « TP11 — Appréciation d’une note », répondez à la question, puis écrivez la fonction complète dans le champ de réponse, vide au départ.
N’écrivez pas `export` : la correction l’ajoute elle-même.
