# TP17 — Entrée du donjon

**Objectifs** :

- Écrire un `if ... else` dont la condition combine `&&`.
- Vérifier que toutes les conditions sont réunies.

## Consignes

Retournez `Entrée autorisée` si le joueur est au moins de niveau 10 et possède la clé.

Sinon, retournez `Revenez plus tard`.

Écrivez le corps de la fonction avec un `if ... else`.

Exemples :

- `peutEntrerDonjon(15, true)` retourne `Entrée autorisée`.
- `peutEntrerDonjon(15, false)` retourne `Revenez plus tard`.

Sur INGInious, la signature et l’accolade fermante sont fournies : vous écrivez le contenu de la fonction.

Un jeu d’aventure ouvre une porte seulement si le joueur a le niveau requis et l’objet nécessaire.

## Tester votre code

Essayez d’abord votre fonction dans le Playground TypeScript, en mode strict, avec les exemples de l’énoncé et avec vos propres valeurs : quels autres cas faut-il tester ?
Ensuite, lancez les tests :

```bash
npm install
npm test -- tp17
```

## Soumettre sur INGInious

Ouvrez la tâche « TP17 — Entrée du donjon », répondez à la ou aux questions, puis écrivez le corps de la fonction dans le champ de réponse.
