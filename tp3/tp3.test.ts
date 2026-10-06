// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estGele } from "./tp3.ts";

describe("Vérifier si la route est gelée", () => {
  test("Une température négative gèle", () => {
    expect(estGele(-5)).toBe(true);
  });

  test("Une température positive ne gèle pas", () => {
    expect(estGele(5)).toBe(false);
  });

  test("0 °C ne gèle pas (seuil exclu)", () => {
    expect(estGele(0)).toBe(false);
  });

  test("Juste sous zéro gèle", () => {
    expect(estGele(-0.1)).toBe(true);
  });
});
