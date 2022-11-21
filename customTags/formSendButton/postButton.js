import { dCrEl } from "../../helpers/myDomHelper";

export default class PostButton extends HTMLElement {
  constructor() {
    super();
    const btn = dCrEl('button'),
      from = this.getAttribute('from')
    this.appendChild(btn)
  }
}