// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estBissextile } from "./tp18.ts";

describe("Vérifier si une année est bissextile", () => {
  test("2024 est bissextile", () => {
    expect(estBissextile(2024)).toBe(true);
  });

  test("1900 n’est pas bissextile", () => {
    expect(estBissextile(1900)).toBe(false);
  });

  test("2000 est bissextile", () => {
    expect(estBissextile(2000)).toBe(true);
  });

  test("2023 n’est pas bissextile", () => {
    expect(estBissextile(2023)).toBe(false);
  });

  test("2100 n’est pas bissextile", () => {
    expect(estBissextile(2100)).toBe(false);
  });

  test("2020 est bissextile", () => {
    expect(estBissextile(2020)).toBe(true);
  });
});
