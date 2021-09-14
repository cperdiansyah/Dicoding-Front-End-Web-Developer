import './actor-items';
import endpoint from '../data/api-config';
class ActorList extends HTMLElement {
    set actors(movie) {
        this._actors = movie.credits.cast;
        this._movie = movie;
        this.render();
    }
    render() {
        this.innerHTML = '';
        const slicedData = this._actors.slice(0, 9);
        slicedData.forEach((actor) => {
            const actorItemElement = document.createElement('actor-item');
            actorItemElement.className = 'wrap-actor';
            actorItemElement.actor = actor;
            this.appendChild(actorItemElement);
        });
        this.innerHTML += `
<div class="actor-item mb-3">
    <div class="actor-card shadow">
        <div class="image-actor shadow-image bg-title">
            <a href="https://www.themoviedb.org/movie/${this._movie.id}/cast" target="_blank" class="d-flex justify-content-center align-items-center">
                <span class="fw-bold text-center me-2">View More</span>
                <i class="fas fa-arrow-right"></i>
            </a>
            
        </div>
    </div>
</div>
`;
    }

    renderError(message) {
        console.log(message);
    }
}

customElements.define('actor-list', ActorList);
