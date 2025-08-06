import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";
import login from "../services/login";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigateToDashboard = useNavigate();

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const res = (event) => {
    if (event) event.preventDefault();
    login(userData)
      .then((res) => {
        console.log(res);
        if (res.message === "login successful") {
          setSuccess(true);
          setResponse(true);
          setTimeout(() => {
            navigateToDashboard("/dashboard");
          }, 1000);
        } else {
          setResponse(false);
          setSuccess(false);
        }
      })
      .catch((error) => {
        setResponse(false);
        console.log(error);
      });
  };

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
            <form onSubmit={res}>
              <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={userData.email}
                  onChange={handleUserData}
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
                  value={userData.password}
                  onChange={handleUserData}
                />
              </div>
              {success && (
                <div className="accountStatus">Login Successfully</div>
              )}
              {success == false ? (
                <div className="accountStatus">Incorrect Email or Password</div>
              ) : (
                ""
              )}
              <button disabled={response}>Login</button>
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
