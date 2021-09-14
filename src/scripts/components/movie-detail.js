// https://www.youtube.com/watch?v=
import moment from 'moment';
import 'moment/locale/id';

import template from '../utils/dom';
import html from './movie-detail.html';
class MovieDetail extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
    render() {
        this.innerHTML = `${template(html)}`;
    }
}
customElements.define('movie-detail', MovieDetail);
