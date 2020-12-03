import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";
import { v4 as uuidv4 } from 'uuid';
import Story from "./component/Story";
import {BrowserRouter, Route} from 'react-router-dom'


const App = () => {

  const [movies, setMovies] = useState([
    {
      id:uuidv4(),
      title: "In hell",
      description: "A man must survive a prison where hardened criminals battle to the death for the wardens' entertainment.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51IJOv2ZaKL._AC_SY445_.jpg",
      rate: 4,
      trailer : "https://www.youtube.com/embed/EhqkWdm8viU"
    },

    {
      id:uuidv4(),
      title: "The call of the wild",
      description: "Set during the 1890s Klondike Gold Rush, the film follows a dog named Buck as he is stolen from his home in California and sent to the Yukon, where he befriends an old outdoorsman and begins a life-altering adventure.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91XjsNigrVL._AC_SL1500_.jpg",
      rate: 3,
      trailer : "https://www.youtube.com/embed/5P8R2zAhEwg"
    },

    {
      id:uuidv4(),
      title: "Barefoot Gen",
      description: "Japanese animated feature film, tells the story of Gen (pronounced with a hard “G”), a young boy who, along with his mother, survives the bombing of Hiroshima. The story chronicles their struggles as they try to rebuild their lives from the bomb's ashes.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51YBSPQE8CL._AC_SY445_.jpg",
      rate: 5,
      trailer : "https://www.youtube.com/embed/KjLYP_X80GA"
    },
  ]);
  const addMovie = (title, description, posterUrl, rate,trailer,id) => {
    setMovies([...movies, { title, description, posterUrl, rate,trailer,id }]);
  };
    return (
      <div className="App">
    <BrowserRouter>
          <h3 style={{ color: "white" , fontFamily:"serif"}}>Movies List</h3>
          <MovieList movies={movies}/>
          <AddMovie addMovie={addMovie} />
          <Route path="/movie/:id" render={(props)=> <Story {...props} movies={movies}/>}/>
    </BrowserRouter>
        </div>
     
      
    );
  }


export default App;
