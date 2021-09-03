import template from "utils/dom";
import html from "./navbar.html";
import css from "./navbar.css";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDom.innerHTML = "";
    this.shadowDom.appendChild(this.element());
  }
  element() {
    const element = template(html, css);
  }
}

customElements.define("nav-bar", NavBar);
