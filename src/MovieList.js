import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/MovieList.css"; // make sure to include the path to your CSS file

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/movies")
      .then((response) => {
        setMovies(response.data.data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">Movie List</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie._id}`}
            key={movie._id}
            className="movie-item"
          >
            <img
              src={movie.image_url}
              alt={movie.movie_name}
              className="movie-image"
            />
            <div className="movie-title">{movie.movie_name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
