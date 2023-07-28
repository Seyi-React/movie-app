import axios from 'axios';

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const SELECT_GENRES = 'SELECT_GENRES';

const API_KEY = '854d28f698986260297ec026375992f6';
const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIES_START });

    axios
      .get(MOVIE_API_URL)
      .then((response) => {
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.results });
      })
      .catch((error) => {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
      });
  };
};

export const selectGenres = (genres) => ({
  type: SELECT_GENRES,
  payload: genres,
});
