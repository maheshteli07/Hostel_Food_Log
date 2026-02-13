import React, { useState, useEffect } from "react";
import "../styles/StudentDashboard.css";

function StudentDashboard() {
  const [menu, setMenu] = useState("");
  const [hasChicken, setHasChicken] = useState(false);
  const [hasEgg, setHasEgg] = useState(false);

  useEffect(() => {
    // Simulated menu (later fetch from backend)
    const todayMenu = "Rice, Sambar, Chicken Curry, Boiled Egg";

    setMenu(todayMenu);

    const lowerMenu = todayMenu.toLowerCase();

    if (lowerMenu.includes("chicken")) {
      setHasChicken(true);
    }

    if (lowerMenu.includes("egg")) {
      setHasEgg(true);
    }
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h2>Today's Menu</h2>

        <div className="menu-box">
          <p>{menu}</p>
        </div>

        {hasChicken && (
          <div className="choice-box">
            <h3>🍗 Do you want Chicken?</h3>
            <div className="btn-group">
              <button className="yes-btn">✔ Yes</button>
              <button className="no-btn">✖ No</button>
            </div>
          </div>
        )}

        {hasEgg && (
          <div className="choice-box">
            <h3>🥚 Do you want Egg?</h3>
            <div className="btn-group">
              <button className="yes-btn">✔ Yes</button>
              <button className="no-btn">✖ No</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
