import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/AddMovie.css";

function AddMovie() {
  const [movieData, setMovieData] = useState({
    movie_name: "",
    info: "",
    rating: "",
    image_url: "", // Added field for the image URL
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // POST request to your backend endpoint
    axios
      .post("http://localhost:8000/api/movies", movieData)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        alert("Movie added successfully!");
        // Reset form or redirect, etc.
        setMovieData({ movie_name: "", info: "", rating: "", image_url: "" });
        // Redirect to the MovieList page
        navigate("/MovieList");
      })
      .catch((error) => {
        console.error("Error adding movie:", error);
        alert("Failed to add movie");
      });
  };

  return (
    <div className="background-add-movie">
      <form onSubmit={handleSubmit} className="addMovieForm">
        <h1>Add Movie</h1>
        <input
          type="text"
          name="movie_name"
          value={movieData.movie_name}
          onChange={handleChange}
          placeholder="Movie Name"
          required
        />
        <br />
        <br />
        <textarea
          name="info"
          value={movieData.info}
          onChange={handleChange}
          placeholder="Movie Info"
          required
        />
        <br />
        <br />
        <input
          type="number"
          name="rating"
          value={movieData.rating}
          onChange={handleChange}
          placeholder="Rating (1-10)"
          min="1"
          max="10"
          step="0.1"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="image_url"
          value={movieData.image_url}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <br />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
