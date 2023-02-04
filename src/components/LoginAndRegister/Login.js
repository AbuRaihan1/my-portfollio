import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import loginImage from './Key.gif'
import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import Swal from "sweetalert2";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const { logIn, error, setError, resetPassword } = useContext(AuthContext);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        Swal.fire("congrats!", "you are logged now", "success");
        form.reset();
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          return setError("email or password wrong!");
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("opps! user not found");
        } else {
          setError(error.message);
        }
      });
  };

  const handleResetUserPass = () => {
    // if (!userEmail) {
    //   setError("Enter your registered email first");
    // }
    resetPassword(userEmail);
  };
  return (
    <div className="login">
      <form className="login-content" onSubmit={handleLoginSubmit}>
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
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                    onBlur={(e) => setUserEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                  />{" "}
                  <p>{error}</p>
                  <Link to="#" onClick={handleResetUserPass}>
                    Forget password?
                  </Link>
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
