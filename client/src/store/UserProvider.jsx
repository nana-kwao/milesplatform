import { useState } from "react";
import login from "../services/login";
import signup from "../services/signup";
import { useNavigate } from "react-router-dom";
import UserContext from "./useContext";

const UserProvider = ({ children }) => {
  const navigateToDashboard = useNavigate();
  //login store
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const [userSignupData, setUserSignupData] = useState({
    fullname: "",
    username: "",
    telephone: "",
    email: "",
    password: "",
  });
  const [loginRes, setLoginRes] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(null);

  const [signupRes, setSignupRes] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(null);

  const handleUserLoginData = (e) => {
    const { name, value } = e.target;
    setUserLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const responseFromLogin = (event) => {
    if (event) event.preventDefault();
    login(userLoginData)
      .then((res) => {
        console.log(res);
        if (res.message === "login successful") {
          setLoginSuccess(true);
          setLoginRes(true);
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        } else {
          setLoginRes(false);
          setLoginSuccess(false);
        }
      })
      .catch((error) => {
        setLoginRes(false);
        console.log(error);
      });
  };

  //signup store
  const handleSigupUserData = (e) => {
    const { name, value } = e.target;
    setUserSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const responseFromSignup = (event) => {
    if (event) event.preventDefault();
    signup(userSignupData)
      .then((res) => {
        console.log(res);
        if (res.message === "user account created") {
          setLoginSuccess(true);
          setLoginRes(true);
          setTimeout(() => {
            navigateToDashboard("/dashboard");
          }, 1000);
        } else {
          setSignupRes(false);
          setSignupSuccess(false);
          setTimeout(() => {
            navigate("/home/login");
          }, 1000);
        }
      })
      .catch((error) => {
        setSignupRes(false);
        console.log(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        userLoginData,
        loginRes,
        loginSuccess,
        handleUserLoginData,
        responseFromLogin,
        userSignupData,
        signupRes,
        signupSuccess,
        handleSigupUserData,
        responseFromSignup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
