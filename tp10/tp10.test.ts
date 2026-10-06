// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { comparerNombres } from "./tp10.ts";

describe("Comparaison de deux nombres", () => {
  test("Le premier est supérieur au second", () => {
    expect(comparerNombres(10, 5)).toBe("Le premier est plus grand");
  });

  test("Le second est supérieur au premier", () => {
    expect(comparerNombres(5, 10)).toBe("Le deuxième est plus grand");
  });

  test("Les deux nombres sont identiques", () => {
    expect(comparerNombres(10, 10)).toBe("Les deux sont égaux");
  });

  test("Deux nombres négatifs", () => {
    expect(comparerNombres(-3, -8)).toBe("Le premier est plus grand");
  });

  test("Un négatif et un positif", () => {
    expect(comparerNombres(-3, 2)).toBe("Le deuxième est plus grand");
  });

  test("Deux zéros", () => {
    expect(comparerNombres(0, 0)).toBe("Les deux sont égaux");
  });
});
