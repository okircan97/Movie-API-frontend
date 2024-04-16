import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <Link to={`/movies/${movie._id}`}>
          {movie.movie_name} <br />{" "}
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
