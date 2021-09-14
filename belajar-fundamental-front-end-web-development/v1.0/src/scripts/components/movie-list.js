import './movie-item.js';

class MovieList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }
    render() {
        this.innerHTML = '';
        this._movies.forEach((movie) => {
            const movieItemElement = document.createElement('movie-item');
            movieItemElement.className = 'wrap-movie';
            movieItemElement.movie = movie;

            this.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        console.log(message);
    }
}

customElements.define('movie-list', MovieList);
