import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/UserContext";
import "./login.css";
import loginImage from "./login.gif";
const Register = () => {
  const navigate = useNavigate()
  const {
    createUser,
    error,
    setError,
    updateUserName,
    googleSignIn,
    githubSignIn,
  } = useContext(AuthContext);
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
        updateUserName(name);
        navigate('/')
      })
      .catch((error) => {
        if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          return setError("Password should be at least 6 character");
        }
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          return setError("invalid email address.");
        }
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          return setError("This email is already taken. use another email");
        } else {
          setError(error.message);
        }
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn();
  };
  const handleGithubSignIn = () => {
    githubSignIn();
  };

  return (
    <div className="login">
      <div className="login-content">
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
              <form onSubmit={handleRegister}>
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
                    <div className="or-wrapper">or</div>
                  </div>
                </div>
              </form>
              <div className="continue-with-btns">
                <button onClick={handleGoogleSingIn}>
                  Continue with google
                </button>
                <button onClick={handleGithubSignIn}>
                  Continue with github
                </button>
              </div>
            </Col>
            <Col md="6">
              <div className="login-content-wrapper">
                <img src={loginImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
