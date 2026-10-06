// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estGameOver } from "./tp2.ts";

describe("Vérifier si la partie est terminée", () => {
  test("Aucune vie : la partie est terminée", () => {
    expect(estGameOver(0)).toBe(true);
  });

  test("Une vie : la partie continue", () => {
    expect(estGameOver(1)).toBe(false);
  });

  test("Trois vies : la partie continue", () => {
    expect(estGameOver(3)).toBe(false);
  });

  test("Dix vies : la partie continue", () => {
    expect(estGameOver(10)).toBe(false);
  });
});
