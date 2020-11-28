import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./component/MovieList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h3 style={{ color: "white" , fontFamily:"serif"}}>Movies List</h3>
          <MovieList />
        </div>
      </div>
    );
  }
}

export default App;
