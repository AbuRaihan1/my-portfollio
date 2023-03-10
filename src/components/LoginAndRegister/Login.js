import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import loginImage from "./Key.gif";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import Swal from "sweetalert2";
const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const { logIn, error, setError, resetPassword, googleSignIn, githubSignIn } =
    useContext(AuthContext);
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
        navigate(from, { replace: true });
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
    resetPassword(userEmail);
  };

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire("Logged in", "you are logged in by google", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        Swal.fire("Logged in", "you are logged in by github", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
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
                  <div className="or-wrapper">or</div>
                  <div className="continue-with-btns">
                    <button onClick={handleGoogleSingIn}>
                      Continue with google
                    </button>
                    <button onClick={handleGithubSignIn}>
                      Continue with github
                    </button>
                  </div>
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
