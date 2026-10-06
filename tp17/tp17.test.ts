// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { peutEntrerDonjon } from "./tp17.ts";

describe("Décider de l’entrée au donjon", () => {
  test("Niveau suffisant avec la clé", () => {
    expect(peutEntrerDonjon(10, true)).toBe("Entrée autorisée");
  });

  test("Niveau suffisant sans la clé", () => {
    expect(peutEntrerDonjon(10, false)).toBe("Revenez plus tard");
  });

  test("Niveau insuffisant avec la clé", () => {
    expect(peutEntrerDonjon(9, true)).toBe("Revenez plus tard");
  });

  test("Niveau insuffisant sans la clé", () => {
    expect(peutEntrerDonjon(9, false)).toBe("Revenez plus tard");
  });

  test("Niveau élevé avec la clé", () => {
    expect(peutEntrerDonjon(25, true)).toBe("Entrée autorisée");
  });
});
