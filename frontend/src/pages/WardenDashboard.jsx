import { useState, useEffect } from "react";
import Background from "../components/background";
import "../styles/warden_dashboard.css";

function WardenDashboard() {

  /* =====================================================
     1️⃣ STATE DEFINITIONS
     (Backend will fill these)
     ===================================================== */

  // Pending registration requests
  const [pendingRequests, setPendingRequests] = useState([]);

  // Veg students list (names only)
  const [vegStudents, setVegStudents] = useState([]);

  // Food count summary
  const [foodCount, setFoodCount] = useState({
    veg: 0,
    nonveg: 0,
    total: 0
  });

  /* =====================================================
     2️⃣ API PLACEHOLDER (FUTURE BACKEND)
     ===================================================== */
  useEffect(() => {
    // TODO: Replace with backend API call
    // Example:
    // fetch("/api/warden/dashboard")
    //   .then(res => res.json())
    //   .then(data => {
    //     setPendingRequests(data.pendingRequests);
    //     setVegStudents(data.vegStudents);
    //     setFoodCount(data.foodCount);
    //   });

  }, []);

  /* =====================================================
     3️⃣ ACTION HANDLERS (BACKEND SAFE)
     ===================================================== */

  const approveStudent = (mobile) => {
    // TODO: POST /api/warden/approve
    setPendingRequests(prev =>
      prev.filter(student => student.mobile !== mobile)
    );
  };

  const deleteStudent = (mobile) => {
    // TODO: DELETE /api/warden/reject
    setPendingRequests(prev =>
      prev.filter(student => student.mobile !== mobile)
    );
  };

  /* =====================================================
     4️⃣ DOWNLOAD VEG LIST (FRONTEND ONLY)
     ===================================================== */
  const downloadVegList = () => {
    let csv = "Student Name\n";

    if (vegStudents.length === 0) {
      csv += "No veg students selected\n";
    } else {
      vegStudents.forEach(name => {
        csv += `${name}\n`;
      });
    }

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "veg_students_list.csv";
    link.click();

    window.URL.revokeObjectURL(url);
  };

  /* =====================================================
     5️⃣ UI RENDER
     ===================================================== */
  return (
    <Background>
      <div className="warden-container">

        <h1 className="warden-title">Warden Dashboard</h1>

        {/* ===== Pending Requests ===== */}
        <div className="card">
          <h2 className="section-title">Pending Student Requests</h2>

          {pendingRequests.length === 0 ? (
            <p className="empty-text">No pending requests</p>
          ) : (
            pendingRequests.map(student => (
              <div className="request-row" key={student.mobile}>
                <div>
                  <p className="student-name">{student.name}</p>
                  <p className="student-email">
                    Mobile: {student.mobile}
                  </p>
                </div>

                <div className="action-buttons">
                  <button
                    className="approve-btn"
                    onClick={() => approveStudent(student.mobile)}
                  >
                    Approve
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.mobile)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ===== Food Count ===== */}
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
              <p className="count-number">{foodCount.total}</p>
              <p className="count-label">Total</p>
            </div>
          </div>
        </div>

        {/* ===== Veg List Download ===== */}
        <div className="card">
          <h2 className="section-title">Veg Students List</h2>

          <p className="empty-text">
            Download today’s veg students list
          </p>

          <button
            className="approve-btn"
            onClick={downloadVegList}
          >
            Download Veg List
          </button>
        </div>

      </div>
    </Background>
  );
}

export default WardenDashboard;
