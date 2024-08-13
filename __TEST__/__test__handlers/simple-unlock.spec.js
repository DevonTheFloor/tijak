import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { simpleUnlockButton } from '../../handlers/handle-elements-page';

describe('simpleUnlockButton', () => {
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

  it('should remove the specified attribute, remove a class, and add a new class when ID is passed', () => {
    const idBtn = 'test-button';
    const attriAdd = 'disabled';
    const classRemov = 'class-to-remove';
    const classAdd = 'class-to-add';

    // Crée un élément bouton avec l'ID spécifié, l'attribut et les classes initiales
    const button = document.createElement('button');
    button.id = idBtn;
    button.setAttribute(attriAdd, true);
    button.classList.add(classRemov);
    container.appendChild(button);

    // Vérifie que le bouton a l'attribut et la classe initiale
    expect(button.hasAttribute(attriAdd)).toBe(true);
    expect(button.classList.contains(classRemov)).toBe(true);
    expect(button.classList.contains(classAdd)).toBe(false);

    // Appelle la fonction simpleUnlockButton avec l'ID
    simpleUnlockButton(idBtn, attriAdd, classRemov, classAdd);

    // Vérifie que l'attribut a été supprimé, la classe initiale a été supprimée, et la nouvelle classe a été ajoutée
    expect(button.hasAttribute(attriAdd)).toBe(false);
    expect(button.classList.contains(classRemov)).toBe(false);
    expect(button.classList.contains(classAdd)).toBe(true);
  });

  it('should remove the specified attribute, remove a class, and add a new class when element is passed', () => {
    const attriAdd = 'disabled';
    const classRemov = 'class-to-remove';
    const classAdd = 'class-to-add';

    // Crée un élément bouton avec l'attribut et les classes initiales
    const button = document.createElement('button');
    button.setAttribute(attriAdd, true);
    button.classList.add(classRemov);
    container.appendChild(button);

    // Vérifie que le bouton a l'attribut et la classe initiale
    expect(button.hasAttribute(attriAdd)).toBe(true);
    expect(button.classList.contains(classRemov)).toBe(true);
    expect(button.classList.contains(classAdd)).toBe(false);

    // Appelle la fonction simpleUnlockButton avec l'élément
    simpleUnlockButton(button, attriAdd, classRemov, classAdd);

    // Vérifie que l'attribut a été supprimé, la classe initiale a été supprimée, et la nouvelle classe a été ajoutée
    expect(button.hasAttribute(attriAdd)).toBe(false);
    expect(button.classList.contains(classRemov)).toBe(false);
    expect(button.classList.contains(classAdd)).toBe(true);
  });
});
