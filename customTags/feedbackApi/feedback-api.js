import './feedback-api.scss';
import { dCrEl } from '../../helpers/myDomHelper';

export default class FeedbackApi extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const pi = dCrEl('p'),
      apiRes = this.getAttribute('message');
    pi.textContent = apiRes;
    this.appendChild(pi);   
  }
}
customElements.define('feedback-api', FeedbackApi);