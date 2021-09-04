import 'bootstrap/dist/css/bootstrap.min.css';

import template from '../../utils/dom';
import html from './navbar.html';

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDom.innerHTML = `
        <style> nav {
          background-color: transparent;
          -webkit-transition: background-color 0.5s;
          transition: background-color 0.5s;
          position: relative;
          max-width: 1920px;
          margin: 0 auto;
          padding-top: 20px;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 5rem;
          z-index: 10;
        }
      </style> 
        `;

        this.shadowDom.innerHTML += `${template(html)}`;
    }
}

customElements.define('nav-bar', NavBar);
