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

    set moviesTable(movies) {
        this._moviesTable = movies;
        this.renderTable();
    }
    
    renderTable() {
        this.innerHTML = '';
        this._moviesTable.forEach((movie) => {
            const movieItemElement = document.createElement('tr');
            movieItemElement.className = 'wrap-movie-table';
            movieItemElement.movieTable = movie;

            this.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        this.innerHTML += `<h3 class="text-center text-white">${message}</h3>`;
    }
}

customElements.define('movie-list', MovieList);
