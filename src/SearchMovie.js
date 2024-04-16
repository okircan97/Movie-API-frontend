import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all movies initially
    axios
      .get("http://localhost:8000/api/movies")
      .then((response) => {
        setMovies(response.data.data);
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
    // This is a client-side search - for large data sets, a server-side solution is recommended
    const filteredMovies = movies.filter((movie) =>
      movie.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter movie name"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {movies.map((movie) => (
          <Link to={`/movies/${movie._id}`}>
            {movie.movie_name} <br />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;
