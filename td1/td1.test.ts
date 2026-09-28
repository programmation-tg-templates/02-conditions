// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estPairEtPositif, majoriteCivile } from "./td1.ts";

describe("Vérifier la majorité civile", () => {
  test("Tester si une personne est majeur", () => {
    expect(majoriteCivile(19)).toEqual("Majeur");
  });

  test("Tester si une personne est mineur", () => {
    expect(majoriteCivile(16)).toEqual("Mineur");
  });
});

describe("Vérifier si un nombre est pair et positif", () => {
  test("Le nombre est pair et positif", () => {
    expect(estPairEtPositif(10)).toBe(true);
  });

  test("Le nombre est pair et négatif", () => {
    expect(estPairEtPositif(-10)).toBe(false);
  });

  test("Le nombre est impair et positif", () => {
    expect(estPairEtPositif(11)).toBe(false);
  });
});
