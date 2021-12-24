import '../../components/navbar/navbar';
import '../../components/actor/actor';
import '../../components/recomendation/recomendation';

import '../../components/movie-details';
import '../../components/movie-list';
import '../../components/actor-list';

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import ApiRepository from '../../data/api-repository';

const main = () => {
    const urlParams = new URLSearchParams(window.location.search).get('movie');
    const backdrop = document.querySelector('backdrop-section');
    const actor = document.querySelector('actor-list');
    const recomendation = document.querySelector(
        'recomendation-section movie-list'
    );

    const closeModal = () => {
        const modal = $('#videoModal');
        const myModal = new bootstrap.Modal(modal);
        const closeButton = document.querySelector('.btn-close');

        $(closeButton).click(() => {
            if (modal.hasClass('animate__fadeIn')) {
                modal.removeClass('animate__fadeIn');
                modal.addClass('animate__fadeOut');
            }

            setTimeout(() => {
                modal.removeClass('animate__fadeOut');
                modal.addClass('animate__fadeIn');
                myModal.toggle();
                $('.youtube-video')[0].contentWindow.postMessage(
                    '{"event":"command","func":"' +
                        'stopVideo' +
                        '","args":""}',
                    '*'
                );
            }, 500);
        });
    };

    const renderResult = (results) => {
        backdrop.movie = actor.actors = results;

        recomendation.movies = results.recommendations.results;

        document.title = `${results.title} | MovieNesia`;
        closeModal();
    };
    const fallbackResult = (message) => {
        backdrop.renderError(message);
    };

    const onLoadAction = () => {
        ApiRepository.detailMovies(urlParams)
            .then(renderResult)
            .catch(fallbackResult);
    };

    if (urlParams.length > 0) {
        window.onload = onLoadAction();
    }

    
};

export default main;
