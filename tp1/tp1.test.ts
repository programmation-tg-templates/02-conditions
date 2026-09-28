// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estBissextile } from "./tp1.ts";

describe("Vérifier si une année donnée est bissextile ou non", () => {
  test("2024 est bissextile ", () => {
    expect(estBissextile(2024)).toEqual(true);
  });

  test("1900 n'est pas bissextile", () => {
    expect(estBissextile(1900)).toEqual(false);
  });

  test("2000 est bissextile", () => {
    expect(estBissextile(2000)).toEqual(true);
  });
});
