# TP16 — Tarif de cinéma

**Objectifs** :

- Écrire une chaine de `else if` dont une condition combine `||`.
- Ordonner les tests pour que le cas le plus restrictif passe en premier.

## Consignes

Retournez 6 pour une personne de moins de 12 ans, même avec une carte étudiante.

Retournez 8 pour un étudiant ou pour une personne de 65 ans ou plus.

Retournez 11 dans tous les autres cas.

Écrivez le corps de la fonction avec `if`, `else if` et `else`.

Exemples :

- `tarifCinema(8, false)` retourne `6`.
- `tarifCinema(30, false)` retourne `11`.

Sur INGInious, la signature et l’accolade fermante sont fournies : vous écrivez le contenu de la fonction.

Une billetterie en ligne calcule un tarif selon plusieurs critères qui se recoupent.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp16
```

## Soumettre sur INGInious

Ouvrez la tâche « TP16 — Tarif de cinéma », répondez à la ou aux questions, puis écrivez le corps de la fonction dans le champ de réponse.
