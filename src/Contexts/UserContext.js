import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [error, setError] = useState("");

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
  const authInfo = { setError, error, createUser, updateUserName, logIn };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
