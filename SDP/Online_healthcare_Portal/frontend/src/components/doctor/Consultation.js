

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import io from "socket.io-client";
import axios from "axios";
// import PatientRating from "../PatientRating";
import "./Consultation.css";

const socket = io("http://localhost:5002");

export default function Consultation() {
  const { roomId } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [patientRisk, setPatientRisk] = useState("");
  const [riskSubmitted, setRiskSubmitted] = useState(false);
  const [tab, setTab] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [medicines, setMedicines] = useState("");
  const [exercise, setExercise] = useState("");
  const [nextDate, setNextDate] = useState(null);
  const [nextTime, setNextTime] = useState("");
  const [callActive, setCallActive] = useState(false);
  const [callType, setCallType] = useState("");
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const timeSlots = ["10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM"];

  // ---------------- Restore appointment ----------------
  useEffect(() => {
    const allAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const appt = allAppointments.find(a => a.roomId === roomId);
    if (appt) setAppointment(appt);
    setLoading(false);
  }, [roomId]);

  // ---------------- SOCKET.IO ----------------
  useEffect(() => {
    if (!roomId) return;

    socket.emit("join-room", roomId);

    const handleOffer = async ({ sdp }) => {
      peerConnection.current = new RTCPeerConnection();
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;
      stream.getTracks().forEach(track => peerConnection.current.addTrack(track, stream));
      peerConnection.current.ontrack = event => { remoteVideoRef.current.srcObject = event.streams[0]; };
      peerConnection.current.onicecandidate = event => { if(event.candidate) socket.emit("candidate", { candidate: event.candidate, roomId }); };
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(sdp));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit("answer", { sdp: answer, roomId });
      setCallActive(true);
      setCallType("video");
    };

    const handleAnswer = async ({ sdp }) => { if(peerConnection.current) await peerConnection.current.setRemoteDescription(new RTCSessionDescription(sdp)); };
    const handleCandidate = async ({ candidate }) => { if(peerConnection.current) await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate)); };

    socket.on("offer", handleOffer);
    socket.on("answer", handleAnswer);
    socket.on("candidate", handleCandidate);

    return () => {
      socket.off("offer", handleOffer);
      socket.off("answer", handleAnswer);
      socket.off("candidate", handleCandidate);
    };
  }, [roomId]);

  // ---------------- Chat ----------------
  const sendMessage = () => {
    if (!inputMessage) return;
    setMessages([...messages, { text: inputMessage, sender: "Doctor" }]);
    setInputMessage("");
  };

  // ---------------- Treatment ----------------
  const submitTreatment = () => {
    if (!medicines || !exercise) return alert("Fill medicines and exercise plan.");
    alert(`Treatment submitted! Follow-up on ${nextDate?.toLocaleDateString()} at ${nextTime}`);
    setMedicines(""); setExercise(""); setNextDate(null); setNextTime("");
  };

  // ---------------- Risk ----------------
  const handleRiskSubmit = () => { if(!patientRisk) return alert("Type risk info first."); setRiskSubmitted(true); };

  // ---------------- Call ----------------
  const startCall = async (type) => {
    setCallType(type); setCallActive(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: type==="video", audio:true });
    if(type==="video") localVideoRef.current.srcObject = stream;
    peerConnection.current = new RTCPeerConnection();
    stream.getTracks().forEach(track=>peerConnection.current.addTrack(track, stream));
    peerConnection.current.ontrack = event=>{ if(type==="video") remoteVideoRef.current.srcObject=event.streams[0]; };
    peerConnection.current.onicecandidate = event => { if(event.candidate) socket.emit("candidate",{candidate:event.candidate, roomId}); };
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
    socket.emit("offer",{sdp:offer, roomId});
  };

  const endCall = () => {
    setCallActive(false); setCallType("");
    peerConnection.current?.close(); peerConnection.current=null;
    if(localVideoRef.current) localVideoRef.current.srcObject=null;
    if(remoteVideoRef.current) remoteVideoRef.current.srcObject=null;
  };

  // ---------------- Send Video Call Link ----------------
  const sendVideoCallLink = async () => {
    if(!appointment) return alert("No appointment found.");
    try {
      const response = await axios.post("http://localhost:5002/api/appointments/send-link", {
        appointmentId: roomId, patientEmail: appointment.patient?.email, patientName: appointment.patient?.name
      });
      alert(response.data.message);
    } catch(err){ alert("Failed to send link."); console.error(err); }
  };

  if(loading) return <p>Loading patient info...</p>;
  if(!appointment) return <p>Patient info not available.</p>;
  const patientInfo = appointment.patient;

  return (
    <div className="consultation-bg">
      <div className="consultation-container">
        <h1>Consultation Room #{roomId}</h1>

        {/* Patient Card */}
        <div className="patient-card">
          <h2>{patientInfo.name}</h2>
          <p>Age: {patientInfo.age} | Gender: {patientInfo.gender} | Blood: {patientInfo.bloodGroup}</p>
          <p>Email: {patientInfo.email} | Contact: {patientInfo.number}</p>
          <p>Location: {patientInfo.place}</p>
        </div>

        {/* Send Link */}
        <button className="send-link-btn" onClick={sendVideoCallLink}>📤 Send Video Call Link</button>

        {/* Risk Info */}
        {!riskSubmitted && (
          <div className="risk-box">
            <textarea placeholder="Patient risk info..." value={patientRisk} onChange={(e)=>setPatientRisk(e.target.value)} />
            <button onClick={handleRiskSubmit}>Submit</button>
          </div>
        )}

        {riskSubmitted && (
          <>
            {/* Tabs */}
            <div className="tabs">
              {["chat","voice","video","physical"].map(t => (
                <button key={t} onClick={()=>setTab(t)} className={tab===t?"active":""}>{t.toUpperCase()}</button>
              ))}
            </div>

            {/* Chat */}
            {tab==="chat" && (
              <div className="chat-section">
                <div className="messages">
                  {messages.map((m,i)=>(
                    <div key={i} className={`message ${m.sender}`}>{m.sender}: {m.text}</div>
                  ))}
                </div>
                <div className="chat-input">
                  <input value={inputMessage} onChange={e=>setInputMessage(e.target.value)} placeholder="Type a message..." />
                  <button onClick={sendMessage}>Send</button>
                </div>
              </div>
            )}

            {/* Call */}
            {(tab==="voice"||tab==="video") && (
              <div className="call-section">
                {!callActive ? (
                  <button className="big-call-btn" onClick={()=>startCall(tab)}>
                    {tab==="voice"?"📞 Start Voice Call":"🎥 Start Video Call"}
                  </button>
                ) : (
                  <div className="video-wrapper">
                    {tab==="video" && (
                      <>
                        <video ref={localVideoRef} autoPlay playsInline muted className="local-video"/>
                        <video ref={remoteVideoRef} autoPlay playsInline className="remote-video"/>
                      </>
                    )}
                    <button className="end-call-btn" onClick={endCall}>End Call</button>
                  </div>
                )}
              </div>
            )}

            {/* Treatment */}
            <div className="treatment-section">
              <textarea placeholder="Medicines" value={medicines} onChange={e=>setMedicines(e.target.value)} />
              <textarea placeholder="Exercise & Lifestyle" value={exercise} onChange={e=>setExercise(e.target.value)} />
              <DatePicker selected={nextDate} onChange={setNextDate} placeholderText="Next Appointment Date" />
              <select value={nextTime} onChange={e=>setNextTime(e.target.value)}>
                <option value="">Select Time</option>
                {timeSlots.map(t=><option key={t} value={t}>{t}</option>)}
              </select>
              <button onClick={submitTreatment}>Submit Treatment</button>
            </div>

            {/* Rating
            <PatientRating doctorId={appointment.doctorId} doctorName={appointment.doctorName} /> */}
          </>
        )}
      </div>
    </div>
  );
}
