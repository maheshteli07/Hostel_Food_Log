import { useNavigate } from "react-router-dom";
import Background from "../components/background";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <Background>
    <div className="home-container">
      <div className="content-wrapper">
        <h1 className="home-title">Hostel Food Management System</h1>

        <p className="home-subtitle">
          Select your role to continue
        </p>

        <div className="role-buttons">
          <button
            className="role-btn student-btn"
            onClick={() => navigate("/login?role=student")}
          >
            Student
          </button>

          <button
            className="role-btn warden-btn"
            onClick={() => navigate("/login?role=warden")}
          >
            Warden
          </button>
        </div>
      </div>
    </div>
    </Background>
  );
}

export default Home;
