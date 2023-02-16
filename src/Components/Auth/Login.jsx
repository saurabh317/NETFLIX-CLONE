import React, { useState } from "react";
import logo from "../../ASSETS/Logo.png";
import GetStarted from "./GetStarted";
import "./Login.css";
import SignIn from "./SignIn";

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <div className="Login">
      <div className="Login_contents">
        <img className="Login_logo" src={logo} alt="LOGO" />

        <button
          className="Login_button btn"
          onClick={() => {
            setShowSignIn(true);
          }}>
          SignIn
        </button>
      </div>
      {showSignIn ? <SignIn /> : <GetStarted />}
    </div>
  );
};

export default Login;
