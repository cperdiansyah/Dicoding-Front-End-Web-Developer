import '../../components/navbar/navbar';
import '../../components/movie-detail';

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

import endpoint from '../../data/api-config';
import '../../components/movie-detail';

import * as config from '../../data/api-config';
import ApiRepository from '../../data/api-repository';

const main = () => {
    const urlParams = new URLSearchParams(window.location.search).get('movie');
    const endpointDetails = `${endpoint.details}${urlParams}${config.apiKey}&language=en-US&append_to_response=images,videos,credits,external_ids`;
    const modal = $('#videoModal');
    const myModal = new bootstrap.Modal(modal);
    const closeButton = document.querySelector('.btn-close');
    const movieDetail = document.querySelector('movie-detail');

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
                '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
                '*'
            );
        }, 500);
    });
};

export default main;
