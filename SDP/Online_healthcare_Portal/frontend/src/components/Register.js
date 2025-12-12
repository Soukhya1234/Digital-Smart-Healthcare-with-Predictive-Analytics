// import React, { useState } from 'react';
// import './Register.css';

// function Register() {
//   const [role, setRole] = useState(''); // 'patient' or 'doctor'
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [age, setAge] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [specialization, setSpecialization] = useState(''); // For doctor
//   const [message, setMessage] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // Confirm Password Validation for both roles
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match.');
//       return;
//     }

//     try {
//       // Select endpoint based on role
//       const endpoint =
//         role === 'doctor'
//           ? 'http://localhost:5002/api/auth/doctor-register'
//           : 'http://localhost:5002/api/auth/register';

//       // Payload for backend
//       const payload =
//         role === 'doctor'
//           ? { name, email, phoneNumber, password, specialization }
//           : { name, email, phoneNumber, address, age, password };

//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.json();

//       if (response.status === 201) {
//         setMessage('Registration successful!');

//         // Reset form
//         setName('');
//         setEmail('');
//         setPhoneNumber('');
//         setAddress('');
//         setAge('');
//         setPassword('');
//         setConfirmPassword('');
//         setSpecialization('');
//         setRole(''); // Back to role selection
//       } else {
//         setMessage(result.message || 'Registration failed.');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setMessage('Registration failed, please try again later.');
//     }
//   };

//   // Step 1: Role Selection
//   if (!role) {
//     return (
//       <div className="role-selection">
//         <h2>Select Registration Type</h2>
//         <div className="role-buttons">
//           <button onClick={() => setRole('patient')}>Patient</button>
//           <button onClick={() => setRole('doctor')}>Doctor</button>
//         </div>
//       </div>
//     );
//   }

//   // Step 2: Show form based on role
//   return (
//     <form onSubmit={handleRegister}>
//       <h2>{role === 'patient' ? 'Patient Registration' : 'Doctor Registration'}</h2>

//       <input
//         type="text"
//         placeholder="Full Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="tel"
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//         required
//       />

//       {role === 'patient' && (
//         <>
//           <input
//             type="text"
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//             min="0"
//           />
//         </>
//       )}

//       {role === 'doctor' && (
//         <input
//           type="text"
//           placeholder="Specialization"
//           value={specialization}
//           onChange={(e) => setSpecialization(e.target.value)}
//           required
//         />
//       )}

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         required
//       />

//       <button type="submit">Register</button>
//       <p>{message}</p>
//     </form>
//   );
// }

// export default Register;



































// patient only


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  // State variables for patient details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Confirm password validation
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      // API endpoint for patient registration
      const endpoint = "http://localhost:5002/api/auth/register";

      // Patient payload
      const payload = { name, email, phoneNumber, address, age, password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 201) {
        setMessage("Patient registration successful!");

        // Store login info in localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("patientEmail", email);

        // Reset form
        setName("");
        setEmail("");
        setPhoneNumber("");
        setAddress("");
        setAge("");
        setPassword("");
        setConfirmPassword("");

        // Redirect after successful registration
        navigate("/prediction");
      } else {
        setMessage(result.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Registration failed, please try again later.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="register-form">
      <h2>Patient Registration</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        min="0"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}

export default Register;
