// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { aBattuLeRecord } from "./tp5.ts";

describe("Vérifier si un score bat le record", () => {
  test("Un score très supérieur au record le bat", () => {
    expect(aBattuLeRecord(150, 100)).toBe(true);
  });

  test("Un score inférieur au record ne le bat pas", () => {
    expect(aBattuLeRecord(20, 100)).toBe(false);
  });

  test("Un score égal au record ne le bat pas", () => {
    expect(aBattuLeRecord(100, 100)).toBe(false);
  });

  test("Un point de plus bat le record", () => {
    expect(aBattuLeRecord(101, 100)).toBe(true);
  });

  test("Un point de moins ne le bat pas", () => {
    expect(aBattuLeRecord(99, 100)).toBe(false);
  });

  test("Un premier score positif bat un record de zéro", () => {
    expect(aBattuLeRecord(5, 0)).toBe(true);
  });

  test("Zéro ne bat pas un record de zéro", () => {
    expect(aBattuLeRecord(0, 0)).toBe(false);
  });
});
