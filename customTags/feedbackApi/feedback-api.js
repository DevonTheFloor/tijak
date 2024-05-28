import './feedback-api.scss';
import { navigator } from '../../builders/page-navigation';
/**
 * Custom element representing a feedback message with navigation functionality.
 * @extends HTMLElement
 */
export default class FeedbackApi extends HTMLElement {
  constructor() {
    super();
    function goToPage(uri) {
      history.pushState({page: 0},'response',uri);
      navigator()
    }
  }
   /**
   * Called when the element is connected to the document's DOM.
   * @returns {void}
   */
  connectedCallback() {
    const pi = document.createElement('p'),
      apiRes = this.getAttribute('message');
    pi.innerHTML = apiRes;
    this.appendChild(pi);

  }
}
customElements.define('feedback-api', FeedbackApi);