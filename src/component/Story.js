import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Router } from "react-router-dom";
import {Link} from "react-router-dom"

const Story = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(props.movies.filter((el) => el.id === props.match.params.id)[0]);
  });

  return (
    <>
      <div className="story">
        {movie && <p>{movie.description}</p>}
        {movie && (
          <iframe width="420" height="315" src={movie.trailer}></iframe>
        )}
<Link to="/" >
        <Button variant="dark">
          Go Back
        </Button>
        </Link>
      </div>
    </>
  );
};

export default Story;
