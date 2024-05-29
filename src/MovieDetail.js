import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Styles/MovieDetail.css";
import Header from "./Header";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [editMode, setEditMode] = useState(false);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:8000/api/movies/${id}`, movie)
      .then(() => {
        alert("Movie updated successfully!");
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating movie:", error);
        alert("Failed to update movie: " + error.response.data.message); // Assuming the backend sends back a 'message'
      });
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <Header></Header>
      {editMode ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <label>
            <p className="detail-text">Movie Name:</p>
            <input
              type="text"
              name="movie_name"
              value={movie.movie_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p className="detail-text">Description:</p>
            <textarea
              name="info"
              value={movie.info}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p className="detail-text">Rating:</p>
            <input
              type="number"
              name="rating"
              value={movie.rating}
              onChange={handleChange}
              min="1"
              max="10"
              step="0.1" // Allows decimal increments
              required
            />
          </label>
          <label>
            <p className="detail-text">Image URL:</p>
            <input
              type="text"
              name="image_url"
              value={movie.image_url}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit" className="blue-button">
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="blue-button"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <img
            src={movie.image_url}
            alt={movie.movie_name}
            style={{ width: "300px", height: "auto" }}
          />
          <h1 className="detail-text-title">{movie.movie_name}</h1>
          <p className="detail-text">{movie.info}</p>
          <p className="detail-text">Rating: {movie.rating}</p>
          <br />
          <button onClick={() => setEditMode(true)} className="blue-button">
            Edit Movie
          </button>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
