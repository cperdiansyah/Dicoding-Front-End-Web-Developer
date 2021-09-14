import moment from 'moment';
import 'moment/locale/id';

class backdrop extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
    render() {
        this.genre = [];

        for (let x in this._movie.genres) {
            this.genre.push(` ${this._movie.genres[x].name}`);
        }
        /* Sorting all video descending */
        const sorted = this._movie.videos.results.sort((a, b) => {
            return new Date(a.published_at) - new Date(b.published_at);
        });
        /* Find first trailer on sorted video*/
        const trailer = sorted.find((item) => item.type == 'Trailer');

        this.innerHTML = `
<div class="backdrop">
    <div class="backdrop-background">
        <div class="backdrop-background-image-filter">
            <img
                src="https://image.tmdb.org/t/p/w1280/${
                    this._movie.backdrop_path
                }"
                alt="${this._movie.title} backdrop"
                loading="lazy"
            />
            <div class="img-gradient"></div>
        </div>
    </div>
    <div class="backdrop-text">
        <div
            class="
                container
                d-flex
                justify-content-between
                align-items-center
                p-0
            "
        >
            <div class="text">
                <div class="upper-text-section">
                    <div class="genre">
                        <span>${this.genre}</span>
                    </div>
                    <div class="title">
                        <h2>
                            <span class="fw-bold">${this._movie.title}</span>
                            (${moment(this._movie.release_date).format('YYYY')})
                        </h2>
                    </div>
                    <div class="tagline">
                        <span class="tagline-text text-white-75"
                            >"${this._movie.tagline}"</span
                        >
                    </div>
                    <div class="rating-runtime d-flex align-items-center">
                        <div class="runtime me-5">
                            <i class="far fa-clock me-1"></i>
                            ${this.minutesToHours(this._movie.runtime)}
                        </div>

                        <div class="rating">
                            <i class="star fas fa-star"></i>
                            <span>${this._movie.vote_average}</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-text-section">
                    <h5 class="fw-bold color-heading underline">Overview</h5>
                    <div class="overview-text">${this._movie.overview}</div>
                </div>
            </div>
            <div class="social-media">
                <div class="social-wrapper radius">
                    <div class="homepage">
                        <a
                            href="${this._movie.homepage}"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Visit Homepage"
                        >
                            <i class="fas fa-link social-logo"></i>
                        </a>
                    </div>
                    <div class="facebook">
                        <a
                            href="https://facebook.com/${
                                this._movie.external_ids.facebook_id
                            }"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Visit Facebook"
                        >
                            <i class="fab fa-facebook social-logo"></i>
                        </a>
                    </div>
                    <div class="twitter">
                        <a
                            href="https://twitter.com/${
                                this._movie.external_ids.twitter_id
                            }"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Visit Twitter"
                        >
                            <i class="fab fa-twitter social-logo"></i>
                        </a>
                    </div>
                    <div class="instagram">
                        <a
                            href="https://instagram.com/${
                                this._movie.external_ids.instagram_id
                            }"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Visit Instagram"
                        >
                            <i class="fab fa-instagram social-logo"></i>
                        </a>
                    </div>
                    <div class="imdb">
                        <a
                            href="https://imdb.com/title/${
                                this._movie.external_ids.imdb_id
                            }"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Visit IMDB"
                        >
                            <i class="fab fa-imdb social-logo"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="video-modal">
        <div class="container p-0 d-flex">
            <button
                class="btn btn-light text-white-50"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
            >
                <i class="far fa-play-circle button-icon"></i>
            </button>
        </div>

        <div
            class="modal animate__animated animate__fadeIn"
            id="videoModal"
            tabindex="-1"
            aria-labelledby="videoModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content bg-black">
                    <div class="modal-body">
                        <div class="wrap-button">
                            <button
                                type="button"
                                class="btn-close btn-close-white"
                                aria-label="Close"
                            ></button>
                        </div>
                        <iframe
                            class="youtube-video"
                            frameborder="0"
                            loading="lazy"
                            allowfullscreen=""
                            src="https://www.youtube.com/embed/${
                                trailer.key
                            }?enablejsapi=1&version=3&playerapiid=ytplayer"
                            alt="${this._movie.title} Trailer"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="tiny-info shadow">
    <div class="tiny-info-wrapper d-flex justify-content-between text-center">
        <div class="director">
            <h5 class="fw-bold shadow">Director</h5>
            <p>${
                this._movie.credits.crew.find((item) => item.job == 'Director')
                    .name
            }</p>
        </div>
        <div class="original-tittle">
            <h5 class="fw-bold shadow">Original Tittle</h5>
            <p>${this._movie.original_title}</p>
        </div>
        <div class="revenue">
            <h5 class="fw-bold shadow">Revenue</h5>
            <p>$ ${this._movie.revenue.toLocaleString()}</p>
        </div>
    </div>
</div>
`;
    }
    minutesToHours(minutes) {
        const minute = minutes % 60;
        const hour = (minutes - minute) / 60;
        return `${hour}h ${minute}m`;
    }
    renderError(message) {
        console.log(message);
    }
}
customElements.define('backdrop-section', backdrop);
