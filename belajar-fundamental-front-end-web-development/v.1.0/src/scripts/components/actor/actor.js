import template from '../../utils/dom';
import html from './main-actor.html';
class Actor extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `${template(html)}`;
    }
}

customElements.define('actor-section', Actor);
