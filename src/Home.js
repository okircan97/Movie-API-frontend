import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <a href="/About">About</a>
          <br />
          <a href="/MovieList">Movie List</a>
          <br />
          <a href="/AddMovie">Add Movie</a>
          <br />
          <a href="/SearchMovie">Search Movie</a>
        </body>
      </div>
    );
  }
}

export default Home;
