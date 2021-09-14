import template from '../../utils/dom';
import html from './hero.html';
class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this.innerHTML = `${template(html)}`;
    }
}
customElements.define('hero-section', Hero);
