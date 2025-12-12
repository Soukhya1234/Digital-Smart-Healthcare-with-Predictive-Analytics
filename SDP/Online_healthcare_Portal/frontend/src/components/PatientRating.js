







import React, { useState } from "react";
import "./PatientRating.css";

import img1 from "../assets/Anita.png";
import img2 from "../assets/Nisha.png";
import img3 from "../assets/Priya.png";
import img4 from "../assets/Rajesh.png";
import img5 from "../assets/Ravi.png";
import img6 from "../assets/Suresh.png";

const doctorsData = [
  { id: 1, name: "Dr. Rajesh Kumar", specialization: "Cardiology", certificate: "MD Cardiology", experience: "10 years", hospital: "City Heart Hospital", location: "Mumbai", photo: img4, reviews: 4 },
  { id: 2, name: "Dr. Anita Sharma", specialization: "Cardiology", certificate: "MD Cardiology", experience: "8 years", hospital: "Heart Care Clinic", location: "Pune", photo: img1, reviews: 4 },
  { id: 3, name: "Dr. Suresh Patil", specialization: "Neurology", certificate: "MD Neurology", experience: "12 years", hospital: "Brain & Spine Hospital", location: "Bangalore", photo: img6, reviews: 5 },
  { id: 4, name: "Dr. Priya Singh", specialization: "Neurology", certificate: "MD Neurology", experience: "9 years", hospital: "Neuro Care Center", location: "Delhi", photo: img3, reviews: 4 },
  { id: 5, name: "Dr. Ravi Mehta", specialization: "General", certificate: "MBBS", experience: "15 years", hospital: "City Hospital", location: "Chennai", photo: img5, reviews: 4 },
  { id: 6, name: "Dr. Nisha Kapoor", specialization: "General", certificate: "MBBS", experience: "11 years", hospital: "Healthy Life Clinic", location: "Hyderabad", photo: img2, reviews: 4 },
];

export default function PatientRating() {
  const [doctors, setDoctors] = useState(doctorsData);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [rating, setRating] = useState(0);

  const handleRateClick = () => {
    if (rating === 0) {
      alert("Please select a rating first!");
      return;
    }
    setDoctors(prev =>
      prev.map(doc =>
        doc.id === selectedDoctor.id ? { ...doc, reviews: rating } : doc
      )
    );
    alert(`You rated ${selectedDoctor.name} ${rating}⭐`);
    setSelectedDoctor(null);
    setRating(0);
  };

  return (
    <div className="rating-container">
      <h1>Rate Your Doctor</h1>

      {!selectedDoctor && (
        <div className="doctor-list">
          {doctors.map(doc => (
            <div key={doc.id} className="doctor-card">
              <img src={doc.photo} alt={doc.name} className="doctor-photo" />
              <h2>{doc.name}</h2>
              <p><strong>Specialization:</strong> {doc.specialization}</p>
              <p><strong>Certificate:</strong> {doc.certificate}</p>
              <p><strong>Experience:</strong> {doc.experience}</p>
              <p><strong>Hospital:</strong> {doc.hospital}, {doc.location}</p>
              <p><strong>Rating:</strong> {doc.reviews}⭐</p>
              <button className="rate-btn" onClick={() => setSelectedDoctor(doc)}>Rate</button>
            </div>
          ))}
        </div>
      )}

      {selectedDoctor && (
        <div className="rating-popup">
          <h2>Rate {selectedDoctor.name}</h2>
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => (
              <span
                key={i}
                className={i <= rating ? "filled" : ""}
                onClick={() => setRating(i)}
              >★</span>
            ))}
          </div>
          <button className="submit-btn" onClick={handleRateClick}>Submit Rating</button>
          <button className="cancel-btn" onClick={() => { setSelectedDoctor(null); setRating(0); }}>Cancel</button>
        </div>
      )}
    </div>
  );
}
