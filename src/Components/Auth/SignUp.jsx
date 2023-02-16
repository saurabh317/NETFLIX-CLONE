import "./SignIn.css";
import logo from "../../ASSETS/Logo.png";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cpasswordRef = useRef(null);
  const navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (passwordRef.current.value !== cpasswordRef.current.value) {
      toast.error("Password doesn't match");
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          toast.success("Registration Succesfull...");
          navigate("/SignIn");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
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
            <h2 className="SignIn_head">Register</h2>
            <form action="" className="form_field" onSubmit={SubmitHandler}>
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
              <input
                ref={cpasswordRef}
                type="password"
                className="Password_input Text_field"
                placeholder="Confirm Password"
                required
              />
              <button type="submit" className="SignIn_button">
                Register
              </button>
            </form>
            <div className="SignIn_SignUp">
              <p className="SignIn_para1">Already have an Account?</p>
              <NavLink to="/SignIn" className="link">
                <p className="SignIn_para2">SignIn now</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
