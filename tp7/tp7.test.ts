// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { libelleBouton } from "./tp7.ts";

describe("Choisir le libellé du bouton", () => {
  test("Un utilisateur connecté peut se déconnecter", () => {
    expect(libelleBouton(true)).toBe("Se déconnecter");
  });

  test("Un visiteur peut se connecter", () => {
    expect(libelleBouton(false)).toBe("Se connecter");
  });
});
