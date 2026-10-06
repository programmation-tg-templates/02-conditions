// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { estWeekend } from "./tp13.ts";

describe("Vérifier si un jour est du week-end", () => {
  test("Samedi est du week-end", () => {
    expect(estWeekend("samedi")).toBe(true);
  });

  test("Dimanche est du week-end", () => {
    expect(estWeekend("dimanche")).toBe(true);
  });

  test("Lundi n’est pas du week-end", () => {
    expect(estWeekend("lundi")).toBe(false);
  });

  test("Vendredi n’est pas du week-end", () => {
    expect(estWeekend("vendredi")).toBe(false);
  });
});
