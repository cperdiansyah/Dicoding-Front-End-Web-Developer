import template from '../../utils/dom';
import html from './navbar.html';
class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `${template(html)}`;
    }
}

customElements.define('nav-bar', NavBar);
