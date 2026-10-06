// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { categorieDeDegats } from "./defi2.ts";

describe("Classer des dégâts", () => {
  test("Zéro dégât : raté", () => {
    expect(categorieDeDegats(0)).toBe("raté");
  });

  test("Dégâts négatifs : raté", () => {
    expect(categorieDeDegats(-3)).toBe("raté");
  });

  test("1 point : égratignure", () => {
    expect(categorieDeDegats(1)).toBe("égratignure");
  });

  test("19 points : égratignure", () => {
    expect(categorieDeDegats(19)).toBe("égratignure");
  });

  test("20 points : blessure", () => {
    expect(categorieDeDegats(20)).toBe("blessure");
  });

  test("49 points : blessure", () => {
    expect(categorieDeDegats(49)).toBe("blessure");
  });

  test("50 points : critique", () => {
    expect(categorieDeDegats(50)).toBe("critique");
  });

  test("200 points : critique", () => {
    expect(categorieDeDegats(200)).toBe("critique");
  });
});
