export default class PostButton extends HTMLElement {
  constructor() {
    super();
    const btn = document.createElement('button'),
      from = this.getAttribute('from')
    this.appendChild(btn)
  }
}
