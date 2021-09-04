import moment from 'moment';
import 'moment/locale/id';
class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
    render() {
        this.innerHTML = `
            <div class="card-movie">
                    <div class="image-movie">
                        <div class="wrapper-image shadow-image">
                            <a href="https://www.themoviedb.org/movie/${
                                this._movie.id
                            }">
                                <img
                                    src="https://image.tmdb.org/t/p/w185${
                                        this._movie.poster_path
                                    }" alt="${this._movie.title} Poster
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="content">
                        <h2><a href="href="https://www.themoviedb.org/movie/${
                            this._movie.id
                        }">${this._movie.title}</a></h2>
                        <div class="utils">
                            <span>
                            ${moment(this._movie.release_date).format(
                                'MMM Do, YYYY'
                            )}
                            </span>

                            <div class="rating">
                                <i class="star fas fa-star"></i>
                                <span>${this._movie.vote_average}</span>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);
