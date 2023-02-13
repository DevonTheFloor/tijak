import './feedback-api.scss';
import { dCrEl } from '../../helpers/myDomHelper';
import { navigator } from '../../builders/page-navigation';

export default class FeedbackApi extends HTMLElement {
  constructor() {
    super();
    function goToPage(uri) {
      history.pushState({page: 0},'response',uri);
      navigator()
    }
  }
  connectedCallback() {
    const pi = dCrEl('p'),
      apiRes = this.getAttribute('message');
    pi.innerHTML = apiRes;
    this.appendChild(pi);

  }
}
customElements.define('feedback-api', FeedbackApi);