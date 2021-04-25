export const API_KEY = "9d97eb03dcefde79cca868520b840451";
export const IMG_PATH = "https://image.tmdb.org/t/p/original";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ru-RU`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=ru-RU&whith_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ru-RU`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
};
