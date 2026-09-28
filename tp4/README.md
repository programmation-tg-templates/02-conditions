# TP4 — Appréciation d’une note

**Objectifs** :

- Classer une note dans l’un des quatre intervalles proposés.
- Retourner une appréciation textuelle pour chaque intervalle.
- Reconnaître une valeur hors de l’intervalle autorisé.

## Consignes

Complétez dans `tp4.ts` le corps de `donnerAppreciation` pour retourner l’appréciation qui correspond à la note reçue.

- Retournez `Très faible` pour une note comprise entre 0 et 7.
- Retournez `Moyenne` pour une note comprise entre 8 et 12.
- Retournez `Bien` pour une note comprise entre 13 et 16.
- Retournez `Excellent` pour une note comprise entre 17 et 20.
- Retournez `Note invalide` pour une valeur hors de l’intervalle [0, 20].

Ne modifiez pas le nom, le paramètre ou le type de retour de la fonction.

Les conditions par intervalles servent, par exemple, à classer automatiquement des éléments dans un outil graphique.

## Tester votre code

Lancez `npm test -- tp4`, puis `npm run typecheck`.

## Soumettre sur INGInious

Ouvrez la tâche « TP4 — Appréciation d’une note » et modifiez la fonction préremplie sans retirer sa signature ni ses accolades.
