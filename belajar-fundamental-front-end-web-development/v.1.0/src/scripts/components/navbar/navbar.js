import template from '../../utils/dom';
import html from './navbar.html';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './navbar.css';
class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `${template(html)}`;
    }
}

customElements.define('nav-bar', NavBar);
