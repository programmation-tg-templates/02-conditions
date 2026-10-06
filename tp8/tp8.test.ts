// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { etatSante } from "./tp8.ts";

describe("Décrire l’état de santé", () => {
  test("Zéro point de vie : mort", () => {
    expect(etatSante(0)).toBe("mort");
  });

  test("Des points de vie négatifs : mort", () => {
    expect(etatSante(-5)).toBe("mort");
  });

  test("Un point de vie : blessé", () => {
    expect(etatSante(1)).toBe("blessé");
  });

  test("50 points de vie : blessé", () => {
    expect(etatSante(50)).toBe("blessé");
  });

  test("51 points de vie : en forme", () => {
    expect(etatSante(51)).toBe("en forme");
  });

  test("100 points de vie : en forme", () => {
    expect(etatSante(100)).toBe("en forme");
  });
});
