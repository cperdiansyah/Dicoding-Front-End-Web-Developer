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

    get value() {
        return this.querySelector('#movie-search-box').value;
    }

    render() {
        this.innerHTML = `${template(html)}`;
        this.querySelector('#movie-search-box').addEventListener(
            'keyup',
            this._clickEvent
        );
    }
}
customElements.define('hero-section', Hero);
