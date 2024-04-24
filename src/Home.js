import React, { Component } from "react";
import "./Styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="background">
        <div className="Home">
          <a href="/About">About</a>
          <br />
          <a href="/MovieList">Movie List</a>
          <br />
          <a href="/AddMovie">Add Movie</a>
          <br />
          <a href="/SearchMovie">Search Movie</a>
        </div>
      </div>
    );
  }
}

export default Home;
