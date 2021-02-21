const API_KEY = "9dae8ef3584069997797330118879176";

const requests = {
  featchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=id-ID`,
  featchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=231&language=id-ID`,
  featchTopRelate: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=id-ID`,
  featchActionsMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=id-ID`,
  featchComedyMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=id-ID`,
  featchHorrorMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=id-ID`,
  featchRomanceMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&language=id-ID`,
  featchDocumentariesMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99&language=id-ID`,
};

export default requests;
