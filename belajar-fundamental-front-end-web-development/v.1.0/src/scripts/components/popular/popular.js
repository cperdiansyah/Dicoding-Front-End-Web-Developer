import template from '../../utils/dom';
import html from './popular.html';
class Popular extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `${template(html)}`;
    }
}

customElements.define('popular-section', Popular);
