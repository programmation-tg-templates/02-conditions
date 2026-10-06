// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estHorsEcran } from "./tp14.ts";

describe("Vérifier si une position est hors de l’écran", () => {
  test("À gauche de l’écran", () => {
    expect(estHorsEcran(-1, 800)).toBe(true);
  });

  test("Première colonne", () => {
    expect(estHorsEcran(0, 800)).toBe(false);
  });

  test("Au milieu", () => {
    expect(estHorsEcran(400, 800)).toBe(false);
  });

  test("Dernière colonne", () => {
    expect(estHorsEcran(799, 800)).toBe(false);
  });

  test("Juste à droite de l’écran", () => {
    expect(estHorsEcran(800, 800)).toBe(true);
  });

  test("Très à droite", () => {
    expect(estHorsEcran(2000, 800)).toBe(true);
  });
});
