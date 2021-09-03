const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=defd5d714304c7bb88ab0dbb4ac5bccc";

const endpoint = {
  nowPlaying: `${baseUrl}movie/popular${apiKey}`,
  trending: `${baseUrl}trending/movie/week${apiKey}`,
  popular: `${baseUrl}movie/popular${apiKey}`,
  topRated: `${baseUrl}movie/top_rated${apiKey}`,
  upcoming: `${baseUrl}movie/upcoming${apiKey}`,
  search: `${baseUrl}search/movie${apiKey}&query=`,
};

export default endpoint;
