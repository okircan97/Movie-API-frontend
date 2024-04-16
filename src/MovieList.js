import axios from "axios";
import { useEffect, useState } from "react";

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
        <div key={movie._id}>{movie.movie_name}</div>
      ))}
    </div>
  );
}

export default MovieList;
