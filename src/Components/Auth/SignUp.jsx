import "./SignIn.css";
import logo from "../../ASSETS/Logo.png";

const SignUp = () => {
  return (
    <>
      {/* <ToastContainer/> */}
      <div className="Login">
        <div className="Login_contents">
          <img className="Login_logo" src={logo} alt="LOGO" />
        </div>

        <div className="wrapper">
          <div className="SignIn">
            <h2 className="SignIn_head">Register</h2>
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
              <input
                type="password"
                className="Password_input Text_field"
                placeholder="Confirm Password"
                required
              />
              <button
                type="submit"
                className="SignIn_button"
               >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
