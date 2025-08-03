import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import App from "../App.jsx";
import Page404 from "../components/Pagenotfound.jsx";
import Forgotpassword from "../components/Forgotpassword.jsx";
import Resetpassword from "../components/Resetpassword.jsx";
import Dashboard from "../components/Dashboard.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home/login",
    element: <Login />,
  },
  {
    path: "/home/signup",
    element: <Signup />,
  },
  {
    path: "/home/login/forgotpassword",
    element: <Forgotpassword />,
  },
  {
    path: "/home/login/forgotpassword/reset",
    element: <Resetpassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default Router;
