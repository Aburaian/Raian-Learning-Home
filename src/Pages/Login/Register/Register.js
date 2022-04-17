import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogInGoogle from "../Login/LoginGoogle/LogInGoogle";

const Register = () => {
  return (
    <div className="container w-50 mx-auto bg-dark p-4 mt-4 h-400">
      <h2 className="text-center text-primary fw-bold my-4">Please Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="p-2 mb-4"
            type="text"
            placeholder=" Your First Name"
            required
          />
          <Form.Control
            className="p-2 mb-4"
            type="text"
            placeholder="Your Last Name"
          />
          <Form.Control
            className="p-2 mb-4"
            type="email"
            placeholder="Your Email Address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type=" password" placeholder="Your Password" />
        </Form.Group>
        <Form.Text className="text-muted text-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary pe-auto text-decoration-none"
            >
              Please Login
            </Link>
          </p>
        </Form.Text>
        <LogInGoogle></LogInGoogle>
        <Button
          className="mx-auto w-50 d-block mb-2 px-4 py-2 text-uppercase"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
