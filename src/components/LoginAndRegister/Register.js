import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import loginImage from "./login.gif";
import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import Swal from "sweetalert2";
const Register = () => {
  const { createUser, error, setError } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        setError("");
        Swal.fire("congrats!", "you are Registred now", "success");
        form.reset();
      })
      .catch((error) => {
        if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setError("Password should be at least 6 character");
        }
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("This email is already taken. use another email");
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div className="login">
      <form className="login-content" onSubmit={handleRegister}>
        <h2>Register Here </h2>
        <div className="loginSignUp">
          <Link to="/login">Login</Link>
          <Link to="/register" style={{ background: "#16a6ee" }}>
            Sign up
          </Link>
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="login-content-wrapper">
                <div className="login-area">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    required
                  />
                  <input
                    type="password"
                    placeholder="******"
                    name="password"
                    required
                  />{" "}
                  <p>{error}</p>
                  <button>Register</button>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="login-content-wrapper">
                <img src={loginImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default Register;
