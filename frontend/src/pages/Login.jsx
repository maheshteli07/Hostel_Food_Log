import { Link } from "react-router-dom";
import Background from "../components/background";
import "../styles/Login.css";

function Login() {
  return (
    <Background>
    <div className="login-page">
      <div className="login-container">
        <h2>Student Login</h2>

        <form>
          <input type="text" placeholder="SSP ID / Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        {/* Register Link */}
        <p className="register-text">
          New user? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
    </Background>
  );
}

export default Login;
