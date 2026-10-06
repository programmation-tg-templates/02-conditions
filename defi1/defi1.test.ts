// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estDansLimites } from "./defi1.ts";

describe("Vérifier qu’une case est dans les limites", () => {
  test("Coin haut gauche", () => {
    expect(estDansLimites(0, 0, 10, 5)).toBe(true);
  });

  test("Coin bas droite", () => {
    expect(estDansLimites(9, 4, 10, 5)).toBe(true);
  });

  test("Au milieu", () => {
    expect(estDansLimites(5, 2, 10, 5)).toBe(true);
  });

  test("Une colonne trop à droite", () => {
    expect(estDansLimites(10, 4, 10, 5)).toBe(false);
  });

  test("Une ligne trop basse", () => {
    expect(estDansLimites(9, 5, 10, 5)).toBe(false);
  });

  test("Une colonne négative", () => {
    expect(estDansLimites(-1, 0, 10, 5)).toBe(false);
  });

  test("Une ligne négative", () => {
    expect(estDansLimites(0, -1, 10, 5)).toBe(false);
  });
});
