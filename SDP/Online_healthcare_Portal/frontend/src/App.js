// import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';

// // Patient components
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Prediction from './components/Prediction';
// import Treatment from './components/Treatment';
// import StrokePrediction from './components/StrokePrediction';
// import HeartPrediction from './components/HeartPrediction';
// import HeartPredictionUsingEcg from './components/HeartPredictionUsingEcg';
// import History from './components/History';
// import Help from './components/Help';

// // Doctor components
// import DoctorLogin from './components/doctor/DoctorLogin';
// import DoctorDashboard from './components/doctor/DoctorDashboard';
// import PatientAppointment from './components/doctor/PatientAppointment';
// import DoctorAppointment from './components/doctor/DoctorAppointment';
// import PatientProfile from './components/doctor/PatientProfile';
// import Consultation from './components/doctor/Consultation';

// // Assets
// import './App.css';
// import logo from './assets/logo.png';
// import image1 from './assets/image1.png';
// import image2 from './assets/image2.png';
// import image3 from './assets/image3.png';

// const images = [image1, image2, image3];

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// function AppContent() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPatientLoggedIn, setIsPatientLoggedIn] = useState(
//     localStorage.getItem('isLoggedIn') === 'true'
//   );
//   const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(
//     localStorage.getItem('isDoctorLoggedIn') === 'true'
//   );

//   // Background slideshow
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Update login states on route change
//   useEffect(() => {
//     setIsPatientLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
//     setIsDoctorLoggedIn(localStorage.getItem('isDoctorLoggedIn') === 'true');
//   }, [location]);

//   const handlePatientLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsPatientLoggedIn(false);
//     navigate('/');
//   };

//   const handleDoctorLogout = () => {
//     localStorage.removeItem('isDoctorLoggedIn');
//     setIsDoctorLoggedIn(false);
//     navigate('/doctor/login');
//   };

//   return (
//     <div className="App">
//       {/* Navbar */}
//       <Navbar
//         isPatientLoggedIn={isPatientLoggedIn}
//         isDoctorLoggedIn={isDoctorLoggedIn}
//         onPatientLogout={handlePatientLogout}
//         onDoctorLogout={handleDoctorLogout}
//       />

//       {/* Routes */}
//       <Routes>
//         {/* Patient Routes */}
//         <Route path="/" element={<Home backgroundImage={images[currentIndex]} />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/prediction" element={<Prediction />} />
//         <Route path="/treatment" element={<Treatment />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/stroke" element={<StrokePrediction />} />
//         <Route path="/heart" element={<HeartPrediction />} />
//         <Route path="/ecg" element={<HeartPredictionUsingEcg />} />
//         <Route path="/help" element={<Help />} />

//         {/* Doctor Routes */}
//         <Route path="/doctor/login" element={<DoctorLogin />} />
//         <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
//         <Route path="/doctor/appointments" element={<PatientAppointment />} />
//         <Route path="/doctor/myappointments" element={<DoctorAppointment />} />
//         <Route path="/doctor/patient/:id" element={<PatientProfile />} />
//         <Route path="/doctor/consultation/:id" element={<Consultation />} />
//       </Routes>

//       {/* Footer only on home page */}
//       {location.pathname === '/' && (
//         <footer className="footer">
//           <p>&copy; {new Date().getFullYear()} Smart Healthcare Portal. All rights reserved.</p>
//         </footer>
//       )}
//     </div>
//   );
// }

// // Navbar component
// function Navbar({ isPatientLoggedIn, isDoctorLoggedIn, onPatientLogout, onDoctorLogout }) {
//   return (
//     <nav className="navbar">
//       <div className="navbar-header">
//         <img src={logo} alt="Logo" className="navbar-logo" />
//         <h2 className="navbar-title">Smart Healthcare Portal</h2>
//       </div>

//       <div className="nav-links">
//         <Link to="/">Home</Link>

//         {/* Patient Links */}
//         {!isPatientLoggedIn && !isDoctorLoggedIn && <Link to="/login">Patient Login</Link>}
//         {!isPatientLoggedIn && !isDoctorLoggedIn && <Link to="/register">Register</Link>}
//         {isPatientLoggedIn && <Link to="/prediction">Prediction</Link>}
//         {isPatientLoggedIn && <Link to="/treatment">Treatment</Link>}
//         {isPatientLoggedIn && <Link to="/history">History</Link>}

//         {/* Doctor Links */}
//         {!isPatientLoggedIn && !isDoctorLoggedIn && <Link to="/doctor/login">Doctor Login</Link>}
//         {isDoctorLoggedIn && <Link to="/doctor/dashboard">Dashboard</Link>}
//         {isDoctorLoggedIn && <Link to="/doctor/appointments">Appointments</Link>}

//         {/* Help */}
//         <Link to="/help">Help</Link>

//         {/* Logout Buttons */}
//         {isPatientLoggedIn && (
//           <button className="logout-button" onClick={onPatientLogout}>
//             Logout
//           </button>
//         )}
//         {isDoctorLoggedIn && (
//           <button className="logout-button" onClick={onDoctorLogout}>
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default App;















// NEW CODE....

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// Patient components
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Prediction from './components/Prediction';
import Treatment from './components/Treatment';
import StrokePrediction from './components/StrokePrediction';
import HeartPrediction from './components/HeartPrediction';
import HeartPredictionUsingEcg from './components/HeartPredictionUsingEcg';
import History from './components/History';
import Help from './components/Help';
import PatientAppointment from './components/PatientAppointment';
import PatientRating from "./components/PatientRating";
// Doctor components
import DoctorLogin from './components/doctor/DoctorLogin';
import DoctorDashboard from './components/doctor/DoctorDashboard';

import DoctorAppointment from './components/doctor/DoctorAppointment';

import Consultation from './components/doctor/Consultation';

// Assets
import './App.css';
import logo from './assets/logo.png';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';

const images = [image1, image2, image3];

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPatientLoggedIn, setIsPatientLoggedIn] = useState(false);
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(false);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Update login states
  useEffect(() => {
    const patientLogin = localStorage.getItem('isLoggedIn') === 'true';
    const doctorLogin = localStorage.getItem('isDoctorLoggedIn') === 'true';

    setIsPatientLoggedIn(patientLogin);
    setIsDoctorLoggedIn(doctorLogin);
  }, [location]);

  // Patient logout
  const handlePatientLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('patientEmail');
    setIsPatientLoggedIn(false);
    navigate('/');
  };

  // Doctor logout
  const handleDoctorLogout = () => {
    localStorage.removeItem('isDoctorLoggedIn');
    localStorage.removeItem('doctorEmail');
    setIsDoctorLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar
        isPatientLoggedIn={isPatientLoggedIn}
        isDoctorLoggedIn={isDoctorLoggedIn}
        onPatientLogout={handlePatientLogout}
        onDoctorLogout={handleDoctorLogout}
      />

      {/* Routes */}
      <Routes>
        {/* Patient Routes */}
        <Route path="/" element={<Home backgroundImage={images[currentIndex]} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/patientappointment" element={<PatientAppointment />} />
        <Route path="/history" element={<History />} />
        <Route path="/rate-doctor/:doctorId" element={<PatientRating />} />
        <Route path="/stroke" element={<StrokePrediction />} />
        <Route path="/heart" element={<HeartPrediction />} />
        <Route path="/ecg" element={<HeartPredictionUsingEcg />} />
        <Route path="/help" element={<Help />} />
        

        {/* Doctor Routes */}
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      
        <Route path="/doctor/DoctorAppointment" element={<DoctorAppointment />} />
      
        <Route path="/doctor/consultation/:id" element={<Consultation />} />
      </Routes>

      {/* Footer only on home page */}
      {location.pathname === '/' && (
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Smart Healthcare Portal. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

// Navbar component
function Navbar({ isPatientLoggedIn, isDoctorLoggedIn, onPatientLogout, onDoctorLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h2 className="navbar-title">Smart Healthcare Portal</h2>
      </div>

      <div className="nav-links">
        {/* Always visible */}
        <Link to="/">Home</Link>
        

        {/* Guest Links */}
        {!isPatientLoggedIn && !isDoctorLoggedIn && (
          <>
            <Link to="/login">Patient Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/doctor/login">Doctor Login</Link>
          </>
        )}

        {/* Patient Links */}
        {isPatientLoggedIn && (
          <>
            <Link to="/prediction">Prediction</Link>
            <Link to="/treatment">Treatment</Link>
            <Link to="/patientappointment">Appointment</Link>
            <Link to="/history">History</Link>
            <Link to="/rate-doctor/:doctorId">Ratings</Link>
            <Link to="/help">Help</Link>
            <button className="logout-button" onClick={onPatientLogout}>
              Logout
            </button>
          </>
        )}

        {/* Doctor Links */}
        {isDoctorLoggedIn && (
          <>
            <Link to="/doctor/dashboard">Dashboard</Link>
            <Link to="/doctor/DoctorAppointment">Appointments</Link>
            <button className="logout-button" onClick={onDoctorLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default App;
