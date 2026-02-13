import "../styles/Register.css";
import Background from "../components/background";

function Register() {
  return (
    <Background> 
    <div className="register-page">
      <div className="register-container">
        <h2>Student Registration</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Mobile Number" required />
          <input type="text" placeholder="SSP ID" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </Background>
  );
}

export default Register;
