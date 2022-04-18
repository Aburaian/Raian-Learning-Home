import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import LogInGoogle from "./LoginGoogle/LogInGoogle";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="container w-50 mx-auto bg-dark p-4 mt-4 h-400">
      <h2 className="text-center text-primary fw-bold my-4">Please Login</h2>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
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
          className="mx-auto w-50 d-block mb-2 px-4 py-2 text-uppercase"
          variant="primary"
          type="submit"
        >
          Log in
        </Button>
      </Form>
      <LogInGoogle></LogInGoogle>
    </div>
  );
};

export default Login;
