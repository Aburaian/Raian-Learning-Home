import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();

  const navigateCheckOut = () => {
    navigate("/checkout");
  };
  const { id, price, img, description, name } = service;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-4">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <span className="fw-bold">Price:</span> ${price}
          </Card.Text>
          <Button
            onClick={navigateCheckOut}
            className="text-uppercase text-center"
            variant="primary"
          >
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
