// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estPair } from "./tp4.ts";

describe("Vérifier si un nombre est pair", () => {
  test("12 est pair", () => {
    expect(estPair(12)).toBe(true);
  });

  test("7 est impair", () => {
    expect(estPair(7)).toBe(false);
  });

  test("0 est pair", () => {
    expect(estPair(0)).toBe(true);
  });

  test("Un négatif pair est pair", () => {
    expect(estPair(-4)).toBe(true);
  });

  test("Un négatif impair est impair", () => {
    expect(estPair(-3)).toBe(false);
  });
});
