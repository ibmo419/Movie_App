import React from "react";
import { Form ,Container,Row,Col} from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const FilterMovie = ({ setKeyRate, search, keyRate }) => {
  const onStarClick = (nextValue) => {
    setKeyRate(nextValue);
  };
  return (
    <Container>
      <Row style={{marginTop:"10px"}}>
        <Col sm={8} >
        <Form>
          <Form.Label>Search By Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search for a movie"
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </Form>
        </Col>
        <Col sm={4} className="star_style">
          <span>Search By Rate :</span>
          <StarRatingComponent
            name="keyRate"
            starCount={5}
            value={keyRate}
            onStarClick={onStarClick}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FilterMovie;
