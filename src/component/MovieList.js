import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const MovieList = (props) => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(1);

  const filteredMovies = props.movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase().trim()) &&
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
                {/* <Card.Text>{el.description}</Card.Text> */}
                <Card.Text>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={el.rate}
                  />
                </Card.Text>
              </Card.Body>
              <Link to={`/movie/${el.id}`}>
              <button className="button1 bouncy">More</button>
              </Link>
            </Card>
          </div>
        ))}
      </div>

      <div></div>
    </>
  );
};

export default MovieList;
