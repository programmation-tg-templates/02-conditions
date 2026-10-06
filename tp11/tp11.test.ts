// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { donnerAppreciation } from "./tp11.ts";

describe("Donner une appréciation d’une note", () => {
  test("5 est très faible", () => {
    expect(donnerAppreciation(5)).toBe("Très faible");
  });

  test("10 est moyen", () => {
    expect(donnerAppreciation(10)).toBe("Moyenne");
  });

  test("15 est bien", () => {
    expect(donnerAppreciation(15)).toBe("Bien");
  });

  test("18 est excellent", () => {
    expect(donnerAppreciation(18)).toBe("Excellent");
  });

  test("25 est invalide", () => {
    expect(donnerAppreciation(25)).toBe("Note invalide");
  });

  test("0 est très faible", () => {
    expect(donnerAppreciation(0)).toBe("Très faible");
  });

  test("7 est très faible", () => {
    expect(donnerAppreciation(7)).toBe("Très faible");
  });

  test("8 est moyen", () => {
    expect(donnerAppreciation(8)).toBe("Moyenne");
  });

  test("12 est moyen", () => {
    expect(donnerAppreciation(12)).toBe("Moyenne");
  });

  test("13 est bien", () => {
    expect(donnerAppreciation(13)).toBe("Bien");
  });

  test("16 est bien", () => {
    expect(donnerAppreciation(16)).toBe("Bien");
  });

  test("17 est excellent", () => {
    expect(donnerAppreciation(17)).toBe("Excellent");
  });

  test("20 est excellent", () => {
    expect(donnerAppreciation(20)).toBe("Excellent");
  });

  test("Une note négative est invalide", () => {
    expect(donnerAppreciation(-1)).toBe("Note invalide");
  });
});
