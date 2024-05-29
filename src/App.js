import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import SearchMovie from "./SearchMovie";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieList" element={<MovieList />} />
          <Route path="/AddMovie" element={<AddMovie />} />
          <Route path="/SearchMovie" element={<SearchMovie />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
