import template from '../../utils/dom';
import html from './trending.html';
class Trending extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `${template(html)}`;
    }
}

customElements.define('trending-section', Trending);
