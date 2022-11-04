import { navigator} from '../builders/page-navigation';
export default class HistoryLink extends HTMLElement {
  constructor() {
    super();
    
  }
  connectedCallback() {
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