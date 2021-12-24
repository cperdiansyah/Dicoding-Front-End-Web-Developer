import template from '../../utils/dom';
import html from './recomendation.html';
class Recomendation extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `${template(html)}`;
    }
}

customElements.define('recomendation-section', Recomendation);
