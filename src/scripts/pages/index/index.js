import '../../components/movie-list';
import endpoint from '../../data/api-config';
import ApiRepository from '../../data/api-repository';

const index = () => {
    const movieListPopular = document.querySelector('#popular movie-list');
    const movieListTrending = document.querySelector('#trending movie-list');
    const searchElement = document.querySelector('hero-section');

    const searchAction = () => {
        ApiRepository.searchMovie(searchElement.value);
    };

    /* Trending Result Fallback*/
    const renderResultTrending = (results) => {
        movieListTrending.style.display = 'flex';
        movieListTrending.movies = results;
    };
    const fallbackResultTrending = (message) => {
        movieListTrending.renderError(message);
    };
    /* End Trending */

    /* Popular Result Fallback*/
    const renderResultPopular = (results) => {
        movieListPopular.style.display = 'flex';
        movieListPopular.movies = results;
    };
    const fallbackResultPopular = (message) => {
        movieListPopular.renderError(message);
    };
    /* End Popular */

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

    searchElement.clickEvent = searchAction;

    // Init view
    getTrendingMovie(endpoint.trending);
    getPopularMovie(endpoint.nowPlaying);
};

export default index;
