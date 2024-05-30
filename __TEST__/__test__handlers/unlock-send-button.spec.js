import { describe, it, expect, beforeEach, vi } from 'vitest';
import { unlockSendButton } from '../../handlers/handle-elements-page';

describe('unlockSendButton', () => {
  let button, from;

  /*beforeEach(() => {
    document.body.innerHTML = `
      <div id="from">
        <span class="validator"></span>
        <input type="text" />
        <input type="text" />
      </div>
      <button id="submit" disabled>Submit</button>
    `;
    button = document.getElementById('submit');
    from = document.getElementById('from');
  });*/
  const divFrom = document.createElement('div');
  divFrom.setAttribute('id', 'from');

  const spanValidator = document.createElement('span');
  spanValidator.setAttribute('class', 'validator');

  const input1 = document.createElement('input');
  input1.setAttribute('type', 'text');

  const input2 = document.createElement('input');
  input2.setAttribute('type', 'text');

  const buttonSubmit = document.createElement('button');
  buttonSubmit.setAttribute('id', 'submit');
  buttonSubmit.setAttribute('disabled', 'true');
  buttonSubmit.textContent = 'Submit';

  // Ajout des éléments enfants au div
  divFrom.appendChild(spanValidator);
  divFrom.appendChild(input1);
  divFrom.appendChild(input2);

  // Ajout des éléments au body
  document.body.appendChild(divFrom);
  document.body.appendChild(buttonSubmit);

  it('should enable the button when all fields are filled and validators are non-empty', (done) => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = 'test');

    const validators = from.getElementsByClassName('validator');
    Array.from(validators).forEach(validator => validator.textContent = 'valid');

    unlockSendButton('submit', from, 'validator');

    // Simuler l'événement `mouseover`
    const event = new Event('mouseover');
    button.dispatchEvent(event);

    // Utiliser setTimeout pour attendre avant de vérifier l'état du bouton
    setTimeout(() => {
      expect(button.disabled).toBe(false);
      done();
    }, 1000);
  });

  it('should keep the button disabled if any field is empty', (done) => {
    const inputs = document.querySelectorAll('input');
    inputs[0].value = 'test';
    inputs[1].value = '';  // One field is empty

    const validators = from.getElementsByClassName('validator');
    Array.from(validators).forEach(validator => validator.textContent = 'valid');

    unlockSendButton('submit', from, 'validator');

    // Simuler l'événement `mouseover`
    const event = new Event('mouseover');
    button.dispatchEvent(event);

    // Utiliser setTimeout pour attendre avant de vérifier l'état du bouton
    setTimeout(() => {
      expect(button.disabled).toBe(true);
      done();
    }, 1000);
  });

  it('should keep the button disabled if any validator is empty', (done) => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = 'test');

    const validators = from.getElementsByClassName('validator');
    Array.from(validators).forEach((validator, index) => {
      validator.textContent = index === 0 ? '' : 'valid';
    });

    unlockSendButton('submit', from, 'validator');

    // Simuler l'événement `mouseover`
    const event = new Event('mouseover');
    button.dispatchEvent(event);

    // Utiliser setTimeout pour attendre avant de vérifier l'état du bouton
    setTimeout(() => {
      expect(button.disabled).toBe(true);
      done();
    }, 1000);
  });

  it('should log an error if the button element is not found', () => {
    document.body.innerHTML = `
      <div id="from">
        <span class="validator"></span>
        <input type="text" />
        <input type="text" />
      </div>
    `; // No button element

    const consoleErrorSpy = vi.spyOn(console, 'error');
    unlockSendButton('submit', from, 'validator');
    expect(consoleErrorSpy).toHaveBeenCalledWith('Element with id "submit" not found.');
  });
})
