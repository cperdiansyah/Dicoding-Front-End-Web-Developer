class ActorItem extends HTMLElement {
    set actor(actor) {
        this._actor = actor;
        this.render();
    }

    render() {
        this.poster =
            this._actor.profile_path != null
                ? `https://image.tmdb.org/t/p/h632${this._actor.profile_path}`
                : 'https://allmovies.tube/assets/img/no-poster.png';

        this.innerHTML = `
<div class="actor-item mb-3">
    <div class="actor-card shadow">
        <div class="image-actor shadow-image">
            <img src="${this.poster}"
                    alt="poster"
                    loading="lazy"/>
            <div class="shadow-image actor-gradient"></div>
        </div>
        <div class="container content d-flex align-items-end">
            <h5 class="fw-bold pb-1">${this._actor.name}</h5>
            <p class="pb-2">${this._actor.character}</p>
        </div>
    </div>
</div>`;
    }
}
customElements.define('actor-item', ActorItem);
