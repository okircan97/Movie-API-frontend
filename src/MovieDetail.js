import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, [id]);

  // Render the movie details or a loading message
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.movie_name}</h1>
      <br />
      <br />
      <p>{movie.info}</p>
      <br />
      <br />
      <p>Rating: {movie.rating}</p>
      {/* Any additional details */}
    </div>
  );
}

export default MovieDetail;
