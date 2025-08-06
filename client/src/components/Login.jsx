import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useContext } from "react";
import userContext from "../store/useContext";
const Login = () => {
  const {
    userLoginData,
    loginRes,
    loginSuccess,
    handleUserLoginData,
    responseFromLogin,
  } = useContext(userContext);

  return (
    <>
      <Menu />
      <div className="formContainer">
        <div className="formWrapper">
          <div className="formHeading">
            <img src="img.jpeg" alt="miles-logo" />
            <h2>Welcome Back</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="wrapForm">
            <form onSubmit={responseFromLogin}>
              <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={userLoginData.email}
                  onChange={handleUserLoginData}
                />
              </div>
              <div className="inputWrapper">
                <div className="passwords">
                  <label htmlFor="password">Password</label>
                  <Link to="/home/login/forgotpassword">
                    <label htmlFor="forgotpassword">Forgot?</label>
                  </Link>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={userLoginData.password}
                  onChange={handleUserLoginData}
                />
              </div>
              {loginSuccess && (
                <div className="accountStatus">Login Successfully</div>
              )}
              {loginSuccess == false ? (
                <div className="accountStatus">Incorrect Email or Password</div>
              ) : (
                ""
              )}
              <button disabled={loginRes}>Login</button>
              <div className="noAccWrapper">
                <p>
                  <span>No Account Yet? </span>
                  <Link to="/home/signup">
                    <span>Signup</span>
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
export default Login;
