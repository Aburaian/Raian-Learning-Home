import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Checkout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="text-center">
      <h1 className="p-4">
        Checkout <span className="text-primary fw-bold">Area</span>
      </h1>
      <Button className="text-uppercase" variant="primary" onClick={handleShow}>
        Checkout Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>
              Checkout <span className="text-primary fw-bold">Completed</span>
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for the booking.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Checkout;
