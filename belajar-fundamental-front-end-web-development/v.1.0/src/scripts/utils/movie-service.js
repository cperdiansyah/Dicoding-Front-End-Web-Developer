import * as lib from './lib';

class MovieService {
    async getTrending(onSuccess) {
        try {
            const response = await fetch(
                lib.requestURL(`/trending/movie/day`, null),
                lib.requestHeader()
            );
            const responseJson = await response.json();

            if (!response.ok) {
                this.handleError();
                return;
            }

            const data = responseJson.results;
            const movies = lib.filterMovies(data);
            onSuccess(movies);
        } catch (error) {
            console.log(error);
            this.handleError();
        }
    }

    async discover(params, onSuccess) {
        try {
            const response = await fetch(
                lib.requestURL('/discover/movie', params),
                lib.requestHeader()
            );
            const responseJson = await response.json();

            if (!response.ok) {
                this.handleError();
                return;
            }

            let movies = responseJson.results;
            movies = lib.filterMovies(movies);
            onSuccess(movies);
        } catch (error) {
            console.log(error);
            this.handleError();
        }
    }

    async getIndonesianMovies(onSuccess) {
        const params = [
            {
                key: 'region',
                val: 'ID'
            },
            {
                key: 'with_original_language',
                val: 'id'
            },
            {
                key: 'sort_by',
                val: 'popularity.desc'
            },
            {
                key: 'page',
                val: 1
            }
        ];
        this.discover(params, onSuccess);
    }

    async getShowing(onSuccess) {
        const params = [
            {
                key: 'primary_release_date.gte',
                val: lib.formatDate(lib.oneMonthBefore())
            },
            {
                key: 'primary_release_date.lte',
                val: lib.formatDate(lib.now())
            },
            {
                key: 'sort_by',
                val: 'popularity.desc'
            },
            {
                key: 'page',
                val: 1
            }
        ];
        this.discover(params, onSuccess);
    }

    async getUpcomingMovies(onSuccess) {
        const params = [
            {
                key: 'primary_release_date.gte',
                val: lib.formatDate(lib.now())
            },
            {
                key: 'sort_by',
                val: 'popularity.desc'
            },
            {
                key: 'page',
                val: 1
            }
        ];
        this.discover(params, onSuccess);
    }

    async getMoviesByGenre(genreId, onSuccess) {
        const params = [
            {
                key: 'with_genres',
                val: genreId
            },
            {
                key: 'sort_by',
                val: 'popularity.desc'
            },
            {
                key: 'page',
                val: 1
            }
        ];
        this.discover(params, onSuccess);
    }

    async search(keyword, onSuccess) {
        try {
            const params = [
                {
                    key: 'query',
                    val: keyword
                },
                {
                    key: 'page',
                    val: 1
                }
            ];

            const response = await fetch(
                lib.requestURL('/search/multi', params),
                lib.requestHeader()
            );
            const responseJson = await response.json();

            if (!response.ok) {
                this.handleError();
                return;
            }

            const results = lib.filterSearchResults(responseJson.results);
            onSuccess(results);
        } catch (error) {
            console.log(error);
            this.handleError();
        }
    }

    async getMovie(id, onSuccess) {
        try {
            const url = `/movie/${id}`;
            const params = [
                {
                    key: 'append_to_response',
                    val: 'external_ids,credits,videos,images'
                }
            ];
            const response = await fetch(
                lib.requestURL(url, params),
                lib.requestHeader()
            );
            const responseJson = await response.json();

            if (!response.ok) {
                this.handleError();
                return;
            }

            const movie = lib.filterMovie(responseJson);

            onSuccess(movie);
        } catch (error) {
            console.log(error);
            this.handleError();
        }
    }

    handleError() {
        console.log('Oops, something went wrong. Please try again.');
    }
}

export default MovieService;
