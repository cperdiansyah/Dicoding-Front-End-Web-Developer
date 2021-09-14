import endpoint from './api-config';
import * as config from './api-config';

class ApiRepository {
    static getMovieList(endpoint) {
        return fetch(endpoint)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                }
            });
    }

    static detailMovies(movies) {
        return fetch(
            `${endpoint.details}${movies}${config.apiKey}&language=en-US&append_to_response=recommendations,videos,credits,external_ids`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.id) {
                    return Promise.resolve(responseJson);
                }
            });
    }

    static searchMovie(title) {
        return fetch(`${endpoint.search}${title}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${title} is Not Found`);
                }
            });
    }
}
export default ApiRepository;
