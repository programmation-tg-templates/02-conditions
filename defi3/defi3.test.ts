// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estCaseLibre } from "./defi3.ts";

describe("Vérifier qu’une case est libre", () => {
  test("Une case libre", () => {
    expect(estCaseLibre(0, 0, 5, 5, 2, 2)).toBe(true);
  });

  test("Une autre case libre", () => {
    expect(estCaseLibre(2, 3, 5, 5, 2, 2)).toBe(true);
  });

  test("La case du mur", () => {
    expect(estCaseLibre(2, 2, 5, 5, 2, 2)).toBe(false);
  });

  test("Une case hors de la grille à droite", () => {
    expect(estCaseLibre(5, 0, 5, 5, 2, 2)).toBe(false);
  });

  test("Une case hors de la grille à gauche", () => {
    expect(estCaseLibre(-1, 0, 5, 5, 2, 2)).toBe(false);
  });

  test("Le coin libre", () => {
    expect(estCaseLibre(4, 4, 5, 5, 2, 2)).toBe(true);
  });
});
