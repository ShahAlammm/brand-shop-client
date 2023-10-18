import {  createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    // Google Sign In
    const googleSignIn = () => {
      return signInWithPopup(auth, provider);
    };
    // New Sign Up
    const signUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  // Sign In
    const signIn=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    };


    useEffect(()=>{

      const subscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
      });
      return (()=>{
        return subscribe()
      });
    },[]);

    const logOut=()=>{
      return signOut(auth);
    }

    const AuthInfo = {
      googleSignIn,
      signUp,
      signIn,
      user,
      logOut,
    };
  return (<AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>);
};

export default AuthProvider;
