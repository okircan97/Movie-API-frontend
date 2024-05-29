import React, { Component } from "react";
import "./Styles/Home.css";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="background">
        <Header></Header>
        <div className="Home">
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
