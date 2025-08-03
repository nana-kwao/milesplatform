import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    telephone: "",
    email: "",
    password: "",
  });
  const [response, setResponse] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigateToDashboard = useNavigate();
  const navigateToLogin = useNavigate();

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const signup = async () => {
    try {
      let sendDataToDB = await fetch(
        "https://milesplatform.onrender.com/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      return sendDataToDB.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  const res = (event) => {
    if (event) event.preventDefault();
    signup()
      .then((res) => {
        console.log(res);
        if (res.success === "created") {
          setSuccess(true);
          setResponse(true);
          setTimeout(() => {
            navigateToDashboard("/dashboard");
          }, 1000);
        } else {
          setResponse(false);
          setSuccess(false);
          setTimeout(() => {
            navigateToLogin("/home/login");
          }, 1000);
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
            <h2>Get Started</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="wrapForm">
            <form onSubmit={res}>
              <div className="inputWrapper">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={userData.fullname}
                  onChange={handleUserData}
                  required
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={userData.username}
                  onChange={handleUserData}
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
                  value={userData.telephone}
                  onChange={handleUserData}
                  required
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={handleUserData}
                  required
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userData.password}
                  onChange={handleUserData}
                  required
                />
              </div>
              {success && (
                <div className="accountStatus">
                  {success
                    ? "Account Created Successfully"
                    : "Account Already Exits"}
                </div>
              )}
              <button disabled={response}>Signup</button>
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
