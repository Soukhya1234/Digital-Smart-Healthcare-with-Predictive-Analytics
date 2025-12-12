

// New ....
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DoctorAppointment.css";

export default function DoctorAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const doctorEmail = localStorage.getItem("doctorEmail");
    const doctorAppointments = storedAppointments.filter(a => a.doctorEmail === doctorEmail);
    setAppointments(doctorAppointments);
  }, []);

  const handleAction = async (index, action) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = action;
    setAppointments(updatedAppointments);

    const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const doctorEmail = localStorage.getItem("doctorEmail");

    const updatedAllAppointments = allAppointments.map(a => {
      if (
        a.doctorEmail === doctorEmail &&
        a.date === updatedAppointments[index].date &&
        a.time === updatedAppointments[index].time &&
        a.patient.email === updatedAppointments[index].patient.email
      ) {
        return { ...a, status: action };
      }
      return a;
    });

    localStorage.setItem("appointments", JSON.stringify(updatedAllAppointments));

    // ✅ Send email notification
    try {
      await fetch("http://localhost:5002/api/appointments/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientEmail: updatedAppointments[index].patient.email,
          patientName: updatedAppointments[index].patient.name,
          doctorName: updatedAppointments[index].doctorName || "Doctor",
          date: updatedAppointments[index].date,
          time: updatedAppointments[index].time,
          status: action,
        }),
      });
      alert(`Appointment ${action} & email sent successfully!`);
    } catch (err) {
      console.error("Email send failed", err);
      alert("Appointment updated but email failed.");
    }
  };
// Inside DoctorAppointment component, replace tileClassName with this:
const tileContent = ({ date, view }) => {
  if (view === "month") {
    const dateStr = date.toISOString().split("T")[0];
    const appointmentsForDate = appointments.filter(a => a.date === dateStr);
    if (appointmentsForDate.length > 0) {
      // Show a small circle for each appointment status (if multiple appointments on same date)
      return (
        <div className="status-dots">
          {appointmentsForDate.map((a, index) => (
            <span key={index} className={`status-dot ${a.status}`}></span>
          ))}
        </div>
      );
    }
  }
  return null;
};


  // Filter appointments for the selected date
  const dailyAppointments = appointments.filter(
    a => a.date === selectedDate.toISOString().split("T")[0]
  );

  return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>

      <div className="calendar-section">
        <h2>Appointments Calendar</h2>
        <Calendar
  onChange={setSelectedDate}
  value={selectedDate}
  tileContent={tileContent}
/>

        <p className="calendar-legend">
          <span className="legend pending"></span> Pending
          <span className="legend approved"></span> Approved
          <span className="legend rejected"></span> Rejected
        </p>
      </div>

      <div className="dashboard-content">
        <h2>Appointments for {selectedDate.toDateString()}</h2>

        {dailyAppointments.length === 0 ? (
          <p>No appointments for this day.</p>
        ) : (
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dailyAppointments.map((a, i) => (
                <tr key={i} className={`appointment-row ${a.status}`}>
                  <td>{a.patient.name}</td>
                  <td>{a.time}</td>
                  <td>{a.status}</td>
                  <td>
                    {a.status === "pending" ? (
                      <>
                        <button onClick={() => handleAction(i, "approved")}>Approve</button>
                        <button onClick={() => handleAction(i, "rejected")}>Reject</button>
                      </>
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
