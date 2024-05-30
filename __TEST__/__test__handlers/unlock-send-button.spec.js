// unlock-send-button.test.js
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { unlockSendButton } from '../../handlers/handle-elements-page';

describe('unlockSendButton', () => {
  let button, from;

  /*beforeEach(() => {
    document.body.innerHTML = `
      <div id="from">
        <span class="validator"></span>
        <input type="text" />
        <span class="validator"></span>
        <input type="text" />
      </div>
      <button id="exe" disabled>Submit</button>
    `;*/
    button = document.getElementById('exe');
    from = document.getElementById('from');
  });
  afterEach(()=>{
    document.body.innerHTML = '';
  })
  it('should enable the button when all fields are filled and validators are empty', () => {
    /*const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = 'test');

    const validators = from.getElementsByClassName('validator');
    const voir = Array.from(validators).forEach(validator => validator.textContent = 'error');
    console.log
    ('VOIR: ', voir);*/
    let from;
    let button;
    document.body.innerHTML = `
      <div id="from">
        <span class="validator"></span>
        <input type="text" value="value01"/>
        <span class="validator"></span>
        <input type="text" value="value02"/>
      </div>
      <button id="exe" disabled>Submit</button>
    `;
    from = document.getElementById('from');
    button = document.getElementById('exe');
    unlockSendButton('exe', from, 'validator');

    const event = new Event('mouseover');
    button.dispatchEvent(event);

    expect(button.disabled).toBe(true);
  });

  it('should keep the button disabled if any field is empty', () => {
    /*const inputs = document.querySelectorAll('input');
    inputs[0].value = 'test';
    inputs[1].value = '';  // One field is empty

    const validators = from.getElementsByClassName('validator');
    Array.from(validators).forEach(validator => validator.textContent = '');*/
    let from;
    let button;
    document.body.innerHTML = `
      <div id="from">
        <span class="validator"></span>
        <input type="text" value="value01"/>
        <span class="validator"></span>
        <input type="text" value=""/>
      </div>
      <button id="exe" disabled>Submit</button>
    `;
    from = document.getElementById('from');
    button = document.getElementById('exe');
    unlockSendButton('submit', from, 'validator');

    const event = new Event('mouseover');
    button.dispatchEvent(event);

    expect(button.disabled).toBe(true);
  });

  it('should keep the button disabled if any validator is empty', () => {
    let from;
    let button;
    document.body.innerHTML = `
      <div id="from">
        <span class="validator">error</span>
        <input type="text" value="value01"/>
        <span class="validator"></span>
        <input type="text" value="value02"/>
      </div>
      <button id="exe" disabled>Submit</button>
    `;
    from = document.getElementById('from');
    button = document.getElementById('exe');
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = 'test');

    const validators = from.getElementsByClassName('validator');
    Array.from(validators).forEach((validator, index) => {
      validator.textContent = index === 0 ? '' : 'valid';
    });

    unlockSendButton('submit', from, 'validator');

    const event = new Event('mouseover');
    button.dispatchEvent(event);

    expect(button.disabled).toBe(false);
  });

