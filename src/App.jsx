import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, selectGenres } from './actions/movieActions';

const App = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleGenreSelection = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const filteredMovies = movies.filter((movie) => {
    // Check if the selectedGenres array is empty or if the movie includes any of the selected genres
    return selectedGenres.length === 0 || (movie.genres && selectedGenres.some((genre) => movie.genres.includes(genre)));
  });

  return (
    <div className="App">
      <h1>Movie Recommendation App</h1>
      <div>
        <h2>Choose Your Favorite Movie Genres</h2>
        <div className="genre-list">
          <label>
            <input
              type="checkbox"
              checked={selectedGenres.includes('Action')}
              onChange={() => handleGenreSelection('Action')}
            />
            Action
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedGenres.includes('Comedy')}
              onChange={() => handleGenreSelection('Comedy')}
            />
            Comedy
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedGenres.includes('Drama')}
              onChange={() => handleGenreSelection('Drama')}
            />
            Drama
          </label>
          {/* Add more genre options as needed */}
        </div>
      </div>
      <div className="movie-list">
        <h2>Recommended Movies</h2>
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>Rating: {movie.rating}</p>
            {movie.additionalDetails && <p>Additional details: {movie.additionalDetails}</p>}
            {movie.posterUrl ? (
              <img src={movie.posterUrl} alt={movie.title} />
            ) : (
              <p>No poster available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
