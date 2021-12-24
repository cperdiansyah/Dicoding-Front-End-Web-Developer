export const apiKey = '?api_key=defd5d714304c7bb88ab0dbb4ac5bccc';
export const TMDB_API_KEY = 'defd5d714304c7bb88ab0dbb4ac5bccc';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
export const PROFILE_URL = 'https://image.tmdb.org/t/p/h632';

const endpoint = {
    nowPlaying: `${BASE_URL}movie/popular${apiKey}`,
    trending: `${BASE_URL}trending/movie/week${apiKey}`,
    topRated: `${BASE_URL}movie/top_rated${apiKey}`,
    upcoming: `${BASE_URL}movie/upcoming${apiKey}`,
    search: `${BASE_URL}search/movie${apiKey}&query=`,
    details: `${BASE_URL}movie/`
};

export default endpoint;
