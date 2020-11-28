import React, { useState } from "react";
import AddMovie from "./AddMovie";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const MovieList = () => {
  const [search, setSearch] = useState("");
  const [rating=1, setRating] = useState();
  const [movies, setMovies] = useState([
    {
      title: "In hell",
      description: "Action movie",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51IJOv2ZaKL._AC_SY445_.jpg",
      rate: 4,
    },

    {
      title: "The call of the wild",
      description: "Family, Adventure movie",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91XjsNigrVL._AC_SL1500_.jpg",
      rate: 3,
    },

    {
      title: "Barefoot Gen",
      description: "Historic,Drama movie",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51YBSPQE8CL._AC_SY445_.jpg",
      rate: 5,
    },
  ]);

  const addMovie = (title, description, posterUrl, rate) => {
    setMovies([...movies, { title, description, posterUrl, rate }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      movie.rate >= rating
  );

  return (
    <>
      <input
        type="text"
        placeholder="Movie Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <StarRatingComponent
          starCount={5}
          onStarClick={(nextValue) => setRating(nextValue)}
        />
      </div>
      <div className="cards">
        {filteredMovies.map((el) => (
          <div className="lol">
            <Card>
              <Card.Img variant="top" className="image" src={el.posterUrl} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.description}</Card.Text>
                <Card.Text>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={el.rate}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div>
        <AddMovie addMovie={addMovie} />
      </div>
    </>
  );
};

export default MovieList;
