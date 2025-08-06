import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useContext } from "react";
import UserContext from "../store/useContext";

const Signup = () => {
  const {
    userSignupData,
    signupRes,
    signupSuccess,
    handleSignupUserData,
    responseFromSignup,
  } = useContext(UserContext);

  return (
    <>
      <Menu />
      <div className="formContainer">
        <div className="formWrapper">
          <div className="formHeading">
            <img src="img.jpeg" alt="miles-logo" />
            <h2>Get Started</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="wrapForm">
            <form onSubmit={responseFromSignup}>
              <div className="inputWrapper">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={userSignupData.fullname}
                  onChange={handleSignupUserData}
                  required
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={userSignupData.username}
                  onChange={handleSignupUserData}
                  required
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  pattern="[0-9]{10}"
                  placeholder="e.g 2332002000"
                  value={userSignupData.telephone}
                  onChange={handleSignupUserData}
                  required
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userSignupData.email}
                  onChange={handleSignupUserData}
                  required
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userSignupData.password}
                  onChange={handleSignupUserData}
                  required
                />
              </div>
              {signupSuccess && (
                <div className="accountStatus">
                  {signupSuccess
                    ? "Account Created Successfully"
                    : "Account Already Exits"}
                </div>
              )}
              <button disabled={signupRes}>Signup</button>
              <div className="noAccWrapper">
                <p>
                  <span>Already has an account? </span>
                  <Link to="/home/login">
                    <span>Login</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="loginImageWrapper">
          <img src="image.jpeg" alt="side-image" />
        </div>
      </div>
    </>
  );
};
export default Signup;
