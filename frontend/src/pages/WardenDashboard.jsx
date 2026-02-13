import { useState } from "react";
import "../styles/warden_dashboard.css";

function WardenDashboard() {
  // 🔹 Mock pending student requests
  const [requests, setRequests] = useState([
    { id: 1, name: "Mahesh Teli", email: "mahesh@hostel.com" },
    { id: 2, name: "Rahul Sharma", email: "rahul@hostel.com" }
  ]);

  // 🔹 Mock food count data
  const [foodCount] = useState({
    veg: 32,
    nonveg: 18
  });

  // Approve student
  const handleApprove = (id) => {
    setRequests(requests.filter((student) => student.id !== id));
    alert("Student approved successfully");
  };

  // Delete student
  const handleDelete = (id) => {
    setRequests(requests.filter((student) => student.id !== id));
    alert("Student request deleted");
  };

  return (
    <div className="warden-container">
      <h1 className="warden-title">Warden Dashboard</h1>

      {/* ========== STUDENT REQUESTS ========== */}
      <div className="card">
        <h2 className="section-title">Pending Student Requests</h2>

        {requests.length === 0 ? (
          <p className="empty-text">No pending requests</p>
        ) : (
          requests.map((student) => (
            <div className="request-row" key={student.id}>
              <div>
                <p className="student-name">{student.name}</p>
                <p className="student-email">{student.email}</p>
              </div>

              <div className="action-buttons">
                <button
                  className="approve-btn"
                  onClick={() => handleApprove(student.id)}
                >
                  Approve
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ========== FOOD COUNT ========== */}
      <div className="card">
        <h2 className="section-title">Today’s Food Count</h2>

        <div className="count-box">
          <div className="count-item veg">
            <p className="count-number">{foodCount.veg}</p>
            <p className="count-label">Veg</p>
          </div>

          <div className="count-item nonveg">
            <p className="count-number">{foodCount.nonveg}</p>
            <p className="count-label">Non-Veg</p>
          </div>

          <div className="count-item total">
            <p className="count-number">
              {foodCount.veg + foodCount.nonveg}
            </p>
            <p className="count-label">Total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WardenDashboard;
