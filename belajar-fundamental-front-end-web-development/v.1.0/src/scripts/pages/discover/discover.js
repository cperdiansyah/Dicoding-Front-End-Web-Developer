import '../../components/navbar/navbar';
import '../../components/movie-list';
import '../../components/result-info/result-info';
import '../../components/search-bar/search';

import endpoint from '../../data/api-config';
import ApiRepository from '../../data/api-repository';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const movieListElemt = document.querySelector(
        '#discover-movienesia movie-list'
    );
    
    const resultInfo = (result) => {
        let textNode = document.createTextNode(`No movie was found.`);
        if (result.value.length > 0) {
            textNode = document.createTextNode(`Result for : ${result.value}`);
        }
        const resultElement = document.querySelector('.result-info');
        const node = document.createElement('h4');
        node.appendChild(textNode);
        node.style.fontWeight = 'bold';
        resultElement.appendChild(node);
    };

    const fallbackResult = (message) => {
        console.log(renderError(message));
    };
    const renderResult = (results) => {
        movieListElemt.style.display = 'flex';
        movieListElemt.movies = results;
    };
    const onSearchAction = () => {
        ApiRepository.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    if (searchElement.value != null) {
        resultInfo(searchElement);
        if (searchElement.value.length > 0) {
            window.onsubmit = onSearchAction();
        }
    }
};

export default main;
