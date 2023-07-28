import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, SELECT_GENRES } from '../actions/movieActions';

const initialState = {
  movies: [],
  loading: false,
  error: null,
  selectedGenres: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return { ...state, loading: true, error: null };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SELECT_GENRES:
      return { ...state, selectedGenres: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
