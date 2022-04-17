import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container w-50 mx-auto bg-dark p-4 mt-4 h-400">
      <h2 className="text-center text-primary fw-bold my-4">Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted text-center">
          <p>
            Create New Account.{" "}
            <Link
              to="/register"
              className="text-primary pe-auto text-decoration-none"
            >
              Please Register
            </Link>
          </p>
        </Form.Text>
        <Button
          className="mx-auto d-block mb-2 px-4 py-2 text-uppercase"
          variant="primary"
          type="submit"
        >
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default Login;
