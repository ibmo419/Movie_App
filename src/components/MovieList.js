import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Button ,Container,Row,Col } from "react-bootstrap";
import AddMovie from "./AddMovie";

const MovieList = ({ movies, addNewMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
        <div className="add_movie_style">
          <Button onClick={handleShow} className="add_movie_button">Add Movie</Button>
          <AddMovie
            show={show}
            handleClose={handleClose}
            addNewMovie={addNewMovie}
          />
        </div>
        <Row style={{ display: "flex",justifyContent:"space-between"}}>
          {movies.map((movie) => (
            <Col>
            <MovieCard movie={movie}/>
            </Col>
          ))}
        </Row>
      
    </Container>
  );
};

export default MovieList;
