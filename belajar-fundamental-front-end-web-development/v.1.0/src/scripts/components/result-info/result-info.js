import template from '../../utils/dom';
import html from './result-info.html';
class ResultInfo extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `${template(html)}`;
    }
}

customElements.define('result-info', ResultInfo);
