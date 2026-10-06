// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { formatEcran } from "./tp9.ts";

describe("Classer une largeur d’écran", () => {
  test("Un petit écran est mobile", () => {
    expect(formatEcran(320)).toBe("mobile");
  });

  test("599 est mobile", () => {
    expect(formatEcran(599)).toBe("mobile");
  });

  test("600 est une tablette", () => {
    expect(formatEcran(600)).toBe("tablette");
  });

  test("1023 est une tablette", () => {
    expect(formatEcran(1023)).toBe("tablette");
  });

  test("1024 est un ordinateur", () => {
    expect(formatEcran(1024)).toBe("ordinateur");
  });

  test("Un grand écran est un ordinateur", () => {
    expect(formatEcran(1920)).toBe("ordinateur");
  });
});
