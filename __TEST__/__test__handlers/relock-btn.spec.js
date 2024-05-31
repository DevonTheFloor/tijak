import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { relockButton } from '../../handlers/handle-elements-page';

describe('relockButton', () => {
  let container;

  beforeEach(() => {
    // Crée un conteneur pour les tests DOM
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Nettoie le conteneur après chaque test
    document.body.removeChild(container);
  });

  it('should remove the specified class, add a new class, and disable the button', () => {
    const idBtn = 'test-button';
    const classRemov = 'class-to-remove';
    const classAdd = 'class-to-add';

    // Crée un élément bouton avec l'ID spécifié et ajoute la classe initiale
    const button = document.createElement('button');
    button.id = idBtn;
    button.classList.add(classRemov);
    container.appendChild(button);

    // Vérifie que le bouton a la classe initiale et n'est pas désactivé
    expect(button.classList.contains(classRemov)).toBe(true);
    expect(button.classList.contains(classAdd)).toBe(false);
    expect(button.hasAttribute('disabled')).toBe(false);

    // Appelle la fonction relockButton
    relockButton(idBtn, classRemov, classAdd);

    // Vérifie que la classe initiale a été supprimée, la nouvelle classe a été ajoutée, et le bouton est désactivé
    expect(button.classList.contains(classRemov)).toBe(false);
    expect(button.classList.contains(classAdd)).toBe(true);
    expect(button.hasAttribute('disabled')).toBe(true);
  });

  it('should do nothing if the button with the specified ID does not exist', () => {
    const idBtn = 'non-existent-button';
    const classRemov = 'class-to-remove';
    const classAdd = 'class-to-add';

    // Appelle la fonction relockButton
    relockButton(idBtn, classRemov, classAdd);

    // Vérifie qu'aucune erreur n'est levée et que le DOM reste inchangé
    // Puisque le bouton n'existe pas, il n'y a rien à vérifier dans ce cas
    // mais nous nous assurons que le test passe sans erreurs
    expect(true).toBe(true);
  });
});
