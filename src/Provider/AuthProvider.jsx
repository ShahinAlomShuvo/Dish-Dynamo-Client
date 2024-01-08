import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

// provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);

  // create user
  const createUSer = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile

  const updateUserProfile = (name, photoUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // sign in user

  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const googleLogIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // signIn with github

  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  // signOut user

  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  // observer

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      setLoader(false);

      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logOut", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unSubscriber();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    createUSer,
    updateUserProfile,
    signInUser,
    googleLogIn,
    githubLogin,
    signOutUser,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
