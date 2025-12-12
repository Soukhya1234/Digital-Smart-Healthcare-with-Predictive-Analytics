import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [userType, setUserType] = useState('guest'); // guest, patient, doctor
  const navigate = useNavigate();

  useEffect(() => {
    // Check login states from localStorage
    const isPatient = localStorage.getItem('isPatientLoggedIn') === 'true';
    const isDoctor = localStorage.getItem('isDoctorLoggedIn') === 'true';

    if (isPatient) {
      setUserType('patient');
    } else if (isDoctor) {
      setUserType('doctor');
    } else {
      setUserType('guest');
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserType('guest');
    navigate('/');
  };

  return (
    <nav>
      {userType === 'guest' && (
        <>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Patient Login</Link> |{" "}
          <Link to="/register">Register</Link> |{" "}
          <Link to="/doctor-login">Doctor Login</Link> |{" "}
          <Link to="/help">Help</Link>
        </>
      )}

      {userType === 'patient' && (
        <>
          <Link to="/">Home</Link> |{" "}
          <Link to="/prediction">Prediction</Link> |{" "}
          <Link to="/treatment">Treatment</Link> |{" "}
          <Link to="/history">History</Link> |{" "}
          <Link to="/help">Help</Link> |{" "}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}

      {userType === 'doctor' && (
        <>
          <Link to="/doctor/dashboard">Dashboard</Link> |{" "}
          <Link to="/doctor/appointments">Appointments</Link> |{" "}
          <Link to="/help">Help</Link> |{" "}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;

