
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PatientAppointment.css";


import img1 from "../assets/Anita.png";
import img2 from "../assets/Nisha.png";
import img3 from "../assets/Priya.png";
import img4 from "../assets/Rajesh.png";
import img5 from "../assets/Ravi.png";
import img6 from "../assets/Suresh.png";

export default function PatientAppointment() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    number: "",
    email: "",
    place: "",
    bloodGroup: "",
  });

  const [specialist, setSpecialist] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  // Doctor details with reviews
  const doctors = [
  { id: 1, name: "Dr. Rajesh Kumar", email: "rajesh@gmail.com", specialization: "Cardiology", certificate: "MD Cardiology", experience: "10 years", reviews: "4.8/5", hospital: "City Heart Hospital", location: "Mumbai", photo: img4 },
  { id: 2, name: "Dr. Anita Sharma", email: "anita@gmail.com", specialization: "Cardiology", certificate: "MD Cardiology", experience: "8 years", reviews: "4.7/5", hospital: "Heart Care Clinic", location: "Pune", photo: img1 },
  { id: 3, name: "Dr. Suresh Patil", email: "suresh@gmail.com", specialization: "Neurology", certificate: "MD Neurology", experience: "12 years", reviews: "4.9/5", hospital: "Brain & Spine Hospital", location: "Bangalore", photo: img6 },
  { id: 4, name: "Dr. Priya Singh", email: "priya@gmail.com", specialization: "Neurology", certificate: "MD Neurology", experience: "9 years", reviews: "4.6/5", hospital: "Neuro Care Center", location: "Delhi", photo: img3 },
  { id: 5, name: "Dr. Ravi Mehta", email: "ravi@gmail.com", specialization: "General", certificate: "MBBS", experience: "15 years", reviews: "4.5/5", hospital: "City Hospital", location: "Chennai", photo: img5 },
  { id: 6, name: "Dr. Nisha Kapoor", email: "nisha@gmail.com", specialization: "General", certificate: "MBBS", experience: "11 years", reviews: "4.7/5", hospital: "Healthy Life Clinic", location: "Hyderabad", photo: img2 },
];


  const timeslots = ["10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleBook = () => {
    if (!patient.name || !patient.age || !patient.gender || !patient.number || !patient.email || !patient.place || !patient.bloodGroup || !specialist || !selectedDoctor || !selectedDate || !selectedTime) {
      alert("Please fill all details!");
      return;
    }

    const dateStr = selectedDate.toISOString().split("T")[0];
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const isBooked = storedAppointments.some(
      (a) => a.date === dateStr && a.time === selectedTime && a.doctorId === selectedDoctor.id
    );

    if (isBooked) {
      alert("This slot is already booked!");
      return;
    }

    const newAppointment = {
      doctorId: selectedDoctor.id,
      doctorEmail: selectedDoctor.email,
      doctorName: selectedDoctor.name,
      date: dateStr,
      time: selectedTime,
      patient,
      status: "pending"
    };

    localStorage.setItem("appointments", JSON.stringify([...storedAppointments, newAppointment]));
    alert(`Appointment booked with ${selectedDoctor.name}!`);

    setPatient({ name: "", age: "", gender: "", number: "", email: "", place: "", bloodGroup: "" });
    setSelectedDoctor(null);
    setSelectedDate(null);
    setSelectedTime("");
    setSpecialist("");
  };

  const filteredDoctors = doctors.filter((d) => d.specialization === specialist);

  return (
    <div className="patient-appointment-container">
      <h1>Book Appointment</h1>

      {/* Patient Details */}
      <div className="patient-details">
        <input name="name" placeholder="Name" value={patient.name} onChange={handleInputChange} />
        <input name="age" placeholder="Age" value={patient.age} onChange={handleInputChange} />
        <select name="gender" value={patient.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input name="number" placeholder="Contact Number" value={patient.number} onChange={handleInputChange} />
        <input name="email" placeholder="Email" value={patient.email} onChange={handleInputChange} />
        <input name="place" placeholder="Place" value={patient.place} onChange={handleInputChange} />
        <input name="bloodGroup" placeholder="Blood Group" value={patient.bloodGroup} onChange={handleInputChange} />
      </div>

      {/* Specialist Selection */}
      <select value={specialist} onChange={(e) => setSpecialist(e.target.value)}>
        <option value="">Select Specialist</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Neurology">Neurology</option>
        <option value="General">General</option>
      </select>

      
      {/* {specialist && (
        <div className="doctor-list">
          <h2>Choose Doctor</h2>
          {filteredDoctors.map(doc => (
            <div key={doc.id} className={`doctor-card ${selectedDoctor?.id === doc.id ? "selected" : ""}`} onClick={() => setSelectedDoctor(doc)}>
              <h3>{doc.name}</h3>
              <p>{doc.specialization}</p>
              <p>Certificate: {doc.certificate}</p>
              <p>Experience: {doc.experience}</p>
              <p>Hospital: {doc.hospital}</p>
              <p>Location: {doc.location}</p>
              <p>
                Reviews: {doc.reviews.split("/")[0]}{" "}
                {Array.from({ length: 5 }, (_, i) => {
                  const rating = parseFloat(doc.reviews.split("/")[0]);
                  return <span key={i} style={{ color: i < rating ? "#FFD700" : "#ccc" }}>★</span>;
                })}
              </p>
            </div>
          ))}
        </div>
      )} */}


<div className="doctor-list">
  {filteredDoctors.map((doc) => (
    <div
      key={doc.id}
      className={`doctor-card ${selectedDoctor?.id === doc.id ? "selected" : ""}`}
      onClick={() => setSelectedDoctor(doc)}
    >
      {/* Doctor photo */}
      <img src={doc.photo} alt={doc.name} className="doctor-photo" />

      {/* Doctor info */}
      <div className="doctor-details">
        <h3>{doc.name}</h3>
        <p>{doc.specialization}</p>
        <p>Certificate: {doc.certificate}</p>
        <p>Experience: {doc.experience}</p>
        <p>Hospital: {doc.hospital}</p>
        <p>Location: {doc.location}</p>
        <p>
          Reviews: {doc.reviews.split("/")[0]}{" "}
          {Array.from({ length: 5 }, (_, i) => {
            const rating = parseFloat(doc.reviews.split("/")[0]);
            return <span key={i} style={{ color: i < rating ? "#FFD700" : "#ccc" }}>★</span>;
          })}
        </p>
      </div>
    </div>
  ))}
</div>



      {/* Date & Time Selection */}
      {selectedDoctor && (
        <div className="booking-section">
          <h2>Select Date & Time</h2>
          <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="yyyy-MM-dd" minDate={new Date()} placeholderText="Select date" />
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="">Select Time</option>
            {timeslots.map(t => {
              const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
              const isBooked = storedAppointments.some(a => a.date === (selectedDate?.toISOString().split("T")[0]) && a.time === t && a.doctorId === selectedDoctor.id);
              return <option key={t} value={t} disabled={isBooked}>{t} {isBooked ? "(Booked)" : ""}</option>
            })}
          </select>
          <button onClick={handleBook}>Book Appointment</button>
        </div>
      )}
    </div>
  );
}
