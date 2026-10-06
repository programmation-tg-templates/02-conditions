// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estPairEtPositif, majoriteCivile } from "./td1.ts";

describe("Vérifier la majorité civile", () => {
  test("19 ans : majeur", () => {
    expect(majoriteCivile(19)).toBe("Majeur");
  });

  test("16 ans : mineur", () => {
    expect(majoriteCivile(16)).toBe("Mineur");
  });

  test("17 ans : mineur", () => {
    expect(majoriteCivile(17)).toBe("Mineur");
  });

  test("18 ans : majeur", () => {
    expect(majoriteCivile(18)).toBe("Majeur");
  });

  test("0 an : mineur", () => {
    expect(majoriteCivile(0)).toBe("Mineur");
  });
});

describe("Vérifier qu’un nombre est pair et positif", () => {
  test("10 est pair et positif", () => {
    expect(estPairEtPositif(10)).toBe(true);
  });

  test("-10 est pair mais négatif", () => {
    expect(estPairEtPositif(-10)).toBe(false);
  });

  test("11 est positif mais impair", () => {
    expect(estPairEtPositif(11)).toBe(false);
  });

  test("0 n’est pas strictement positif", () => {
    expect(estPairEtPositif(0)).toBe(false);
  });

  test("2 est pair et positif", () => {
    expect(estPairEtPositif(2)).toBe(true);
  });

  test("1 est impair", () => {
    expect(estPairEtPositif(1)).toBe(false);
  });
});
