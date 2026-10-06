// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { tarifCinema } from "./tp16.ts";

describe("Calculer le tarif d’une place", () => {
  test("Un enfant paie 6", () => {
    expect(tarifCinema(11, false)).toBe(6);
  });

  test("Un enfant étudiant paie 6", () => {
    expect(tarifCinema(11, true)).toBe(6);
  });

  test("12 ans sans carte : plein tarif", () => {
    expect(tarifCinema(12, false)).toBe(11);
  });

  test("12 ans avec carte : tarif réduit", () => {
    expect(tarifCinema(12, true)).toBe(8);
  });

  test("Un adulte sans carte paie 11", () => {
    expect(tarifCinema(25, false)).toBe(11);
  });

  test("Un adulte étudiant paie 8", () => {
    expect(tarifCinema(25, true)).toBe(8);
  });

  test("64 ans sans carte paie 11", () => {
    expect(tarifCinema(64, false)).toBe(11);
  });

  test("65 ans sans carte paie 8", () => {
    expect(tarifCinema(65, false)).toBe(8);
  });

  test("Un aîné paie 8", () => {
    expect(tarifCinema(80, false)).toBe(8);
  });
});
