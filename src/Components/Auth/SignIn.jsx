import { useRef } from "react";
import logo from "../../ASSETS/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // console.log(userCredential);
        console.log(userCredential.user.email)
        toast.success("login SuccessFull...");
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="Login">
        <div className="Login_contents">
          <img className="Login_logo" src={logo} alt="LOGO" />
        </div>

        <div className="wrapper">
          <div className="SignIn">
            <h2 className="SignIn_head">Sign In</h2>
            <form action="" className="form_field" onSubmit={submitHandler}>
              <input
                ref={emailRef}
                type="email"
                className="Email_input Text_field"
                placeholder="Email"
                required
              />
              <input
                ref={passwordRef}
                type="password"
                className="Password_input Text_field"
                placeholder="Password"
                required
              />
              <button type="submit" className="SignIn_button">
                Sign In
              </button>
            </form>

            <div className="SignIn_SignUp">
              <p className="SignIn_para1">New To Netflix?</p>
              <NavLink to="./SignUp" className="link">
                <p className="SignIn_para2">Sign Up now</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
