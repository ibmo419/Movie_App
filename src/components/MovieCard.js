import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "21rem" ,textAlign:"center",height:"30rem",marginBottom:"50px"}}>
        <div className="conteneur">
        <Card.Img variant="top" src={movie.img} style={{ width: "21rem" ,height:"15rem"}} className="image" />
        <a class="btn" href={movie.hrf} target="_blank" rel="noopener noreferrer">Watch Film</a>
        </div>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <StarRatingComponent name="rate" starCount={5} value={movie.rate}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
