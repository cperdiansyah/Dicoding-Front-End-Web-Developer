import template from '../../utils/dom';
import html from './hero.html';

class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `${template(html)}`;
    }
}
customElements.define('hero-section', Hero);
