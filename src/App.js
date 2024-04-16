import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import SearchMovie from "./SearchMovie";

function App() {
  return (
    <Router>
      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/SearchMovie" element={<SearchMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
