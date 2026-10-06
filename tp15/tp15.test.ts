// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estNoteValide } from "./tp15.ts";

describe("Vérifier qu’une note est valide", () => {
  test("Une note au milieu est valide", () => {
    expect(estNoteValide(12)).toBe(true);
  });

  test("Juste sous zéro est invalide", () => {
    expect(estNoteValide(-1)).toBe(false);
  });

  test("0 est valide", () => {
    expect(estNoteValide(0)).toBe(true);
  });

  test("20 est valide", () => {
    expect(estNoteValide(20)).toBe(true);
  });

  test("21 est invalide", () => {
    expect(estNoteValide(21)).toBe(false);
  });

  test("Une note très élevée est invalide", () => {
    expect(estNoteValide(100)).toBe(false);
  });
});
