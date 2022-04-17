import React from "react";
import { Card } from "react-bootstrap";
const Review = ({ review }) => {
  const { name, image, comment, rate } = review;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-4">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{comment}</Card.Text>
          <Card.Text>
            <span className="fw-bold">Rating:</span> {rate}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
