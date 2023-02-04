import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  // auth providers.
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user name
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  // sing in user, with email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // reset password
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire(
          "Reset password",
          "Check your email, for reset your password",
          "info"
        );
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/missing-email).") {
          return setError("Enter your registered email first");
        }
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          return setError("invalid email address. Enter your registerd email");
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          return setError("opps! user not found");
        } else {
          setError(error.message);
        }
      });
  };

  // sign in with google
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        Swal.fire("Logged in", "you are logged in by Google", "success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // sign in with github
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        Swal.fire("Logged in", "you are logged in by github", "success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // store user value 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  // log out 
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const authInfo = {
    setError,
    error,
    createUser,
    updateUserName,
    logIn,
    resetPassword,
    googleSignIn,
    githubSignIn,
    user,
    logout
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
