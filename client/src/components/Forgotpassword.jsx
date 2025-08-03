import Menu from "./Menu";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <>
      <Menu />
      <div className="wrapForm">
        <div className="formHeading">
          <h2>Forgot Password</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <form>
          <div className="inputWrapper">
            <label htmlFor="useremail">Email</label>
            <input type="email" name="useremail" id="useremail" required/>
          </div>
          <div className="inputWrapper">
            <label htmlFor="recoveryemail">Recovery Email</label>
            <input type="email" name="recoveryemail" id="recoveryemail" required/>
          </div>
          <div className="inputWrapper">
            <label htmlFor="otp">Enter OTP Code from Email</label>
            <input type="number" name="otp" id="otp" required/>
          </div>
          <div className="accountStatus"></div>
          <button type="submit">Search Account</button>
          <div className="noAccWrapper">
            <p>
              <Link to="/home/signup">
                <span>Signup</span>
              </Link>
              <Link to="/home/login">
                <span>Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forgotpassword;
