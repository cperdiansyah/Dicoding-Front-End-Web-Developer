import template from '../../utils/dom';
import html from './search.html';
class Search extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get value() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('search');
    }

    render() {
        this.innerHTML = `${template(html)}`;
    }
}

customElements.define('search-bar', Search);
