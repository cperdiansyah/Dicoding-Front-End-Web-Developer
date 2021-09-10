import '../../components/movie-list';
import '../../components/navbar/navbar';
import '../../components/hero/hero';
import '../../components/trending/trending';
import '../../components/popular/popular';

import endpoint from '../../data/api-config';
import ApiRepository from '../../data/api-repository';

const main = () => {
    const movieListPopular = document.querySelector('#popular movie-list');
    const movieListTrending = document.querySelector('#trending movie-list');

    // Trending Result Fallback
    const renderResultTrending = (results) => {
        movieListTrending.style.display = 'flex';
        movieListTrending.movies = results;
    };

    // Popular Result
    const renderResultPopular = (results) => {
        movieListPopular.style.display = 'flex';
        movieListPopular.movies = results;
    };

    // Table
    const fallbackResult = (message) => {
        console.log(renderError(message));
    };
    const getTrendingMovie = (endpoint) => {
        ApiRepository.getMovieList(endpoint)
            .then(renderResultTrending)
            .catch(fallbackResult);
    };

    const getPopularMovie = (endpoint) => {
        ApiRepository.getMovieList(endpoint)
            .then(renderResultPopular)
            .catch(fallbackResult);
    };

    // Init view
    getTrendingMovie(endpoint.trending);
    getPopularMovie(endpoint.nowPlaying);
};

export default main;
