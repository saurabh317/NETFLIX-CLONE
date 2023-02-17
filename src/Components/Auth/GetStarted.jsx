import React from "react";
import "./Login.css";

const GetStarted = () => {
  const SubmitHAndler = () => {
    alert("Register and then Try to Sign In");
  };

  return (
    <>
      <div className="Login_getStarted">
        <h2 className="Login_head">Unlimited movies, TV shows and more</h2>
        <p className="Login_para">Watch Anywhere, Anytime</p>
        <form action="">
          <input
            type="email"
            className="Login_input"
            placeholder="Email address"
          />
          <button
            onClick={SubmitHAndler}
            type="submit"
            className="GetStarted_button btn">
            Get Started
          </button>
        </form>
      </div>
    </>
  );
};

export default GetStarted;
