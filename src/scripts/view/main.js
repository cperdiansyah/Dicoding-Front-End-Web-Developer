import '../components/movie-list';
import endpoint from '../data/api-config';
import ApiRepository from '../data/api-repository';

const main = () => {
    const movieListPopular = document.querySelector('#popular movie-list');
    const movieListTrending = document.querySelector('#trending movie-list');

    const renderResultTrending = (results) => {
        movieListTrending.style.display = 'flex';
        movieListTrending.movies = results;
    };
    const fallbackResultTrending = (message) => {
        movieListTrending.renderError(message);
    };

    const renderResultPopular = (results) => {
        movieListPopular.style.display = 'flex';
        movieListPopular.movies = results;
    };
    const fallbackResultPopular = (message) => {
        movieListPopular.renderError(message);
    };

    const getTrendingMovie = (endpoint) => {
        ApiRepository.getMovieList(endpoint)
            .then(renderResultTrending)
            .catch(fallbackResultTrending);
    };

    const getPopularMovie = (endpoint) => {
        ApiRepository.getMovieList(endpoint)
            .then(renderResultPopular)
            .catch(fallbackResultPopular);
    };

    // Init view
    getTrendingMovie(endpoint.trending);
    getPopularMovie(endpoint.nowPlaying);
};

export default main;
