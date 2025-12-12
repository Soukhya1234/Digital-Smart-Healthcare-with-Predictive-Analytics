



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";

export default function DoctorDashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [doctorEmail, setDoctorEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("doctorEmail");
    setDoctorEmail(email);

    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const doctorAppointments = storedAppointments
      .filter(a => a.doctorEmail === email)
      .map((a, index) => ({ ...a, id: index + 1 }));
    setAppointments(doctorAppointments);
  }, []);

  const handleAction = (id, action) => {
    const newAppointments = appointments.map(a =>
      a.id === id ? { ...a, status: action } : a
    );
    setAppointments(newAppointments);

    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const updatedAppointments = storedAppointments.map(a => {
      const appt = newAppointments.find(
        n => n.date === a.date && n.time === a.time && n.patient.email === a.patient.email
      );
      return appt ? { ...a, status: appt.status } : a;
    });
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const startConsultation = (appointment) => {
    navigate(`/doctor/consultation/${appointment.id}`, { state: { patient: appointment.patient } });
  };

  const pendingAppointments = appointments.filter(a => a.status === "pending");
  const approvedAppointments = appointments.filter(a => a.status === "approved");
  const rejectedAppointments = appointments.filter(a => a.status === "rejected");

  return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>
      <div className="appointment-columns">

        {/* Pending */}
        <div className="status-column">
          <h2>Pending</h2>
          {pendingAppointments.length === 0 && <p>No pending appointments.</p>}
          {pendingAppointments.map(appt => (
            <div key={appt.id} className="appointment-card pending">
              <p><strong>Patient:</strong> {appt.patient.name}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <div className="card-buttons">
                <button className="approve" onClick={() => handleAction(appt.id, "approved")}>Approve</button>
                <button className="reject" onClick={() => handleAction(appt.id, "rejected")}>Reject</button>
              </div>
            </div>
          ))}
        </div>

        {/* Approved */}
        <div className="status-column">
          <h2>Approved</h2>
          {approvedAppointments.length === 0 && <p>No approved appointments.</p>}
          {approvedAppointments.map(appt => (
            <div key={appt.id} className="appointment-card approved">
              <p><strong>Patient:</strong> {appt.patient.name}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <button className="start" onClick={() => startConsultation(appt)}>Start Consultation</button>
            </div>
          ))}
        </div>

        {/* Rejected */}
        <div className="status-column">
          <h2>Rejected</h2>
          {rejectedAppointments.length === 0 && <p>No rejected appointments.</p>}
          {rejectedAppointments.map(appt => (
            <div key={appt.id} className="appointment-card rejected">
              <p><strong>Patient:</strong> {appt.patient.name}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}




