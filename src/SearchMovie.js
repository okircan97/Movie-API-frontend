import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Styles/SearchMovie.css";

function SearchMovies() {
  const [allMovies, setAllMovies] = useState([]); // State to store all movies
  const [displayedMovies, setDisplayedMovies] = useState([]); // State to store movies to display
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all movies initially and store them in `allMovies`
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/movies")
      .then((response) => {
        setAllMovies(response.data.data); // Save movies in `allMovies`
        setDisplayedMovies([]); // Initially, no movies should be displayed
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    // Implement search functionality
    const filteredMovies = allMovies.filter((movie) =>
      movie.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedMovies(filteredMovies); // Update displayed movies based on search
  };

  return (
    <div>
      <div className="movie-list-container">
        <h1 className="search-movie-title">Search Movies</h1>
        <form className="searchMovieForm" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Enter movie name"
          />
          <br />
          <button type="submit">Search</button>
        </form>
        <div className="movie-grid">
          {displayedMovies.map((movie) => (
            <Link
              to={`/movies/${movie._id}`}
              key={movie._id}
              className="movie-item"
            >
              <img
                src={movie.image_url || "default-image-url"} // Add a default image URL if `image_url` is null or empty
                alt={movie.movie_name}
                className="movie-image"
              />
              <div className="movie-title">{movie.movie_name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchMovies;
