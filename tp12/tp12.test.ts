// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { peutSauter } from "./tp12.ts";

describe("Vérifier si le personnage peut sauter", () => {
  test("Au sol et debout : il saute", () => {
    expect(peutSauter(true, false)).toBe(true);
  });

  test("Au sol et accroupi : il ne saute pas", () => {
    expect(peutSauter(true, true)).toBe(false);
  });

  test("En l’air et debout : il ne saute pas", () => {
    expect(peutSauter(false, false)).toBe(false);
  });

  test("En l’air et accroupi : il ne saute pas", () => {
    expect(peutSauter(false, true)).toBe(false);
  });
});
