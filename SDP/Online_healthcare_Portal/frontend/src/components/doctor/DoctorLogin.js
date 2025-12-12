
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorLogin.css'; // reuse your existing CSS

function DoctorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // List of all doctors with their passwords
  const doctors = [
    { email: "anita@gmail.com", password: "anita" },
    { email: "nisha@gmail.com", password: "nisha" },
    { email: "priya@gmail.com", password: "priya" },
    { email: "rajesh@gmail.com", password: "rajesh" },
    { email: "ravi@gmail.com", password: "ravi" },
    { email: "suresh@gmail.com", password: "suresh" },
  ];

  const handleDoctorLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Please fill in both fields.');
      return;
    }

    const doctor = doctors.find(d => d.email === email && d.password === password);

    if (doctor) {
      localStorage.setItem('isDoctorLoggedIn', 'true');
      localStorage.setItem('doctorEmail', doctor.email);
      setMessage('Login successful!');
      
      // Redirect to home or dashboard
      navigate('/');
    } else {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <form onSubmit={handleDoctorLogin} className="login-form">
      <h2>Doctor Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>

      {message && <p className="login-message">{message}</p>}

      <div className="hint">
        <p>Available credentials for testing:</p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>rajesh@gmail.com | rajesh</li>
          <li>anita@gmail.com | anita</li>
          <li>suresh@gmail.com | suresh</li>
           <li>priya@gmail.com | priya</li>
          <li>ravi@gmail.com | ravi</li>
          <li>nisha@gmail.com | nisha</li>
          
          
        
          
        </ul>
      </div>
    </form>
  );
}

export default DoctorLogin;
