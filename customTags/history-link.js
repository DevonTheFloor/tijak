import { navigator } from "../builders/page-navigation";
/**
 * Intra link with attributes: to-uri, page, text, num
 */
export default class HistoryLink extends HTMLElement {
  constructor() {
    super();
    console.log('Coucou History Link');
  }
  connectedCallback() {
    console.log('Coucou History Link CCB');

    const toUri = this.getAttribute('to-uri'),
      page = this.getAttribute('page-title'),
      text = this.getAttribute('text'),
      num = this.getAttribute('n°');
    this.textContent = text;
    this.addEventListener('click', ()=> {
      history.pushState({page: num}, page,toUri);
      navigator();
    })
    this.style.cursor = "pointer";
  }
}
customElements.define('history-link', HistoryLink);