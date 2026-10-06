// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.
import { describe, expect, test } from "vitest";

import { verifierLettre } from "./tp19.ts";

describe("Vérifier la casse d’une lettre", () => {
  test("Un texte n’est pas un caractère valide", () => {
    expect(verifierLettre("AA")).toBe("invalide");
  });

  test("Une chaine vide n’est pas valide", () => {
    expect(verifierLettre("")).toBe("invalide");
  });

  test("Un chiffre n’est pas valide", () => {
    expect(verifierLettre("3")).toBe("invalide");
  });

  test("Un symbole n’est pas valide", () => {
    expect(verifierLettre("#")).toBe("invalide");
  });

  test("Une lettre accentuée n’est pas valide", () => {
    expect(verifierLettre("é")).toBe("invalide");
  });

  test("A est une majuscule", () => {
    expect(verifierLettre("A")).toBe("majuscule");
  });

  test("L est une majuscule", () => {
    expect(verifierLettre("L")).toBe("majuscule");
  });

  test("Z est une majuscule", () => {
    expect(verifierLettre("Z")).toBe("majuscule");
  });

  test("A est une minuscule", () => {
    expect(verifierLettre("a")).toBe("minuscule");
  });

  test("L est une minuscule", () => {
    expect(verifierLettre("l")).toBe("minuscule");
  });

  test("Z est une minuscule", () => {
    expect(verifierLettre("z")).toBe("minuscule");
  });
});
