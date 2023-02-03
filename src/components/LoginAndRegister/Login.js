import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import loginImage from "./login.gif";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <form className="login-content">
        <h2>Login Here </h2>
        <div className="loginSignUp">
          <Link to="/login" style={{ background: "#16a6ee" }}>
            Login
          </Link>
          <Link to="/register">Sign up</Link>
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="login-content-wrapper">
                <div className="login-area">
                  {/* <input type="text" placeholder="Your name" name="name" /> */}
                  <input type="email" placeholder="email" name="email" />
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                  />{" "}
                  <p> password should be at least 6 character</p>
                  <Link to="#">Forget password?</Link>
                  <button>Log in </button>
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

export default Login;
