import { NavLink } from "react-router-dom";
import "./SignIn.css";


const SignIn = () => {
  return (
    <>
    <div className="wrapper">
      <div className="SignIn">
      <h2 className="SignIn_head">Sign In</h2>
      <form action="" className="form_field">
        <input
          type="email"
          className="Email_input Text_field"
          placeholder="Email"
          required
        />
        <input
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
        <p className="SignIn_para2" >Sign Up now</p>
        </NavLink>
      </div>
      
    </div>
    </div>
    </>
  

  );
};

export default SignIn;
