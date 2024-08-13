import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { cleanAllInputs } from '../../handlers/handle-elements-page';

describe('cleanAllInputs', () => {
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

  it('should clear the value of all inputs with the specified class', () => {
    const className = 'test-input';

    // Crée des éléments input avec la classe spécifiée
    for (let i = 0; i < 3; i++) {
      const input = document.createElement('input');
      input.className = className;
      input.value = `value${i}`;
      container.appendChild(input);
    }

    // Appelle la fonction cleanAllInputs
    cleanAllInputs(className);

    // Vérifie que la valeur de chaque input a été réinitialisée
    const inputs = container.getElementsByClassName(className);
    for (let input of inputs) {
      expect(input.value).toBe('');
    }
  });

  it('should do nothing if there are no inputs with the specified class', () => {
    const className = 'non-existent-class';

    // Appelle la fonction cleanAllInputs
    cleanAllInputs(className);

    // Vérifie qu'aucune erreur n'est levée et que le DOM reste inchangé
    const inputs = container.getElementsByClassName(className);
    expect(inputs.length).toBe(0);
  });
});
