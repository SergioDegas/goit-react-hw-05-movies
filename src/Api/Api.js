const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd9d1e4a74b16060862fb47c08a2dac20';

export const getTrendingMovies = async () => {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;

  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
};

export const searchByName = async query => {
  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
};
export const getMovieDetails = async id => {
  const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;

  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
};
export const getMovieCredits = async id => {
  const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
};
export const getMovieReviews = async id => {
  const url = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
};
