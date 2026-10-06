// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { limiterVitesse } from "./tp6.ts";

describe("Limiter une vitesse", () => {
  test("Une vitesse basse n’est pas modifiée", () => {
    expect(limiterVitesse(90)).toBe(90);
  });

  test("La limite elle-même n’est pas modifiée", () => {
    expect(limiterVitesse(120)).toBe(120);
  });

  test("Juste au-dessus de la limite est ramenée à 120", () => {
    expect(limiterVitesse(121)).toBe(120);
  });

  test("Une vitesse très élevée est ramenée à 120", () => {
    expect(limiterVitesse(200)).toBe(120);
  });

  test("Une vitesse nulle n’est pas modifiée", () => {
    expect(limiterVitesse(0)).toBe(0);
  });
});
