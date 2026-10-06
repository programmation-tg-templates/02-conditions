# TP10 — Comparaison de deux nombres

**Objectifs** :

- Écrire la signature d’une fonction à partir de sa description.
- Distinguer trois cas avec `else if`.

## Consignes

Écrivez, dans `tp10.ts`, la fonction décrite ci-dessous, sans oublier `export` devant `function`.

Créez la fonction `comparerNombres`.

Elle reçoit deux nombres, `nbre1` et `nbre2`, et retourne une chaine de caractères.

Retournez `Le premier est plus grand` si le premier nombre est supérieur au second.

Retournez `Le deuxième est plus grand` si le second nombre est supérieur au premier.

Retournez `Les deux sont égaux` si les deux nombres ont la même valeur.

Exemples :

- `comparerNombres(10, 5)` retourne `Le premier est plus grand`.
- `comparerNombres(5, 10)` retourne `Le deuxième est plus grand`.
- `comparerNombres(10, 10)` retourne `Les deux sont égaux`.

Sur INGInious, le champ de réponse est vide : écrivez la fonction complète, signature comprise.

Les comparaisons servent notamment à choisir l’ordre d’affichage d’éléments dans une interface.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp10
```

## Soumettre sur INGInious

Ouvrez la tâche « TP10 — Comparaison de deux nombres » et écrivez la fonction complète dans le champ de réponse, vide au départ.
N’écrivez pas `export` : la correction l’ajoute elle-même.
