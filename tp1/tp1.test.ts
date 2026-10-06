// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { aGagne } from "./tp1.ts";

describe("Vérifier si un joueur a gagné", () => {
  test("Un score très supérieur au seuil gagne", () => {
    expect(aGagne(150)).toBe(true);
  });

  test("Un score très inférieur au seuil ne gagne pas", () => {
    expect(aGagne(20)).toBe(false);
  });

  test("Un score de zéro ne gagne pas", () => {
    expect(aGagne(0)).toBe(false);
  });

  test("99 points ne suffisent pas", () => {
    expect(aGagne(99)).toBe(false);
  });

  test("100 points suffisent", () => {
    expect(aGagne(100)).toBe(true);
  });

  test("101 points suffisent", () => {
    expect(aGagne(101)).toBe(true);
  });
});
