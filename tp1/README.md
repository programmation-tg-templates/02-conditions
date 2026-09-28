# TP1 — Année bissextile

**Objectifs** :

- Déterminer si une année est divisible par un nombre donné.
- Tenir compte des exceptions à une règle générale.
- Retourner un booléen qui indique si l’année est bissextile.

## Consignes

Une année est bissextile si elle est divisible par 4, sauf si elle est divisible par 100.

Une année divisible par 400 reste bissextile.

Complétez dans `tp1.ts` le corps de `estBissextile` pour retourner `true` si l’année est bissextile et `false` sinon.

Par exemple, 2024 et 2000 sont bissextiles, mais 1900 ne l’est pas.

Ne modifiez pas le nom, le paramètre ou le type de retour de la fonction.

Les règles conditionnelles servent à décider si un événement doit se répéter dans un calendrier numérique.

## Tester votre code

Lancez `npm test -- tp1`, puis `npm run typecheck`.

## Soumettre sur INGInious

Ouvrez la tâche « TP1 — Année bissextile » et modifiez la fonction préremplie sans retirer sa signature ni ses accolades.
