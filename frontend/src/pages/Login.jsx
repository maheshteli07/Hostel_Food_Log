import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
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
  );
}

export default Login;
