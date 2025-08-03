import "./App.css";
import { Link } from "react-router-dom";
import Menu from "./components/Menu";

function App() {

  return (
    <>
      <Menu />
      <h1>Welcome to Miles Platform</h1>
      <Link to="/home/login">
        <button>Login</button>
      </Link>
      <Link to="/home/signup">
        <button>Signup</button>
      </Link>
    </>
  );
}

export default App;
