
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const path = require('path'); // <-- Import path module
// require('express-async-errors');

// // Route imports
// const authRoutes = require('./routes/auth');
// const ecgRoutes = require('./routes/ecgRoutes');
// const historyRoutes = require('./routes/historyRoutes');
// const strokeRoutes = require('./routes/strokeRoutes');

// // Initialize app
// const app = express();
// dotenv.config();

// // CORS config
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
// app.use(cors({
//   origin: allowedOrigins,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));

// // Middleware
// app.use(helmet());
// app.use(morgan('dev'));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Serve static files from uploads folder

// // Serve static files from uploads/profile-images folder
// app.use('/uploads/profile-images', express.static(path.join(__dirname, 'uploads', 'profile-images')));



// // MongoDB connection with retry
// const connectDB = async () => {
//   const maxRetries = 5;
//   let retries = 0;
//   while (retries < maxRetries) {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('✅ MongoDB connected successfully');
//       break;
//     } catch (err) {
//       retries++;
//       console.error(`❌ MongoDB connection failed (attempt ${retries}): ${err.message}`);
//       if (retries >= maxRetries) {
//         console.error('❌ Max retries reached, exiting');
//         process.exit(1);
//       }
//       console.log('⏳ Retrying in 5 seconds...');
//       await new Promise(res => setTimeout(res, 5000));
//     }
//   }
// };
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/ecg', ecgRoutes);
// app.use('/api/history', historyRoutes);
// app.use('/api/save', strokeRoutes);

// // Health check
// app.get('/health', (req, res) => {
//   res.status(200).json({ message: 'Server is healthy' });
// });

// // Root route
// app.get('/', (req, res) => {
//   res.send('🚀 Server is up and running');
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error('🚨 Global error:', err.stack);
//   res.status(500).json({ message: 'Internal server error', error: err.message });
// });

// // Start server
// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




// // new code
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const path = require('path'); 
// require('express-async-errors');

// // Load environment variables
// dotenv.config();

// // Initialize app
// const app = express();

// // ---------- CORS CONFIG ----------
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
// app.use(cors({
//   origin: allowedOrigins,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));

// // ---------- MIDDLEWARE ----------
// app.use(helmet());
// app.use(morgan('dev'));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // ---------- STATIC FILES ----------
// app.use('/uploads/profile-images', express.static(path.join(__dirname, 'uploads', 'profile-images')));

// // ---------- ROUTES ----------
// const authRoutes = require('./routes/auth');
// const ecgRoutes = require('./routes/ecgRoutes');
// const historyRoutes = require('./routes/historyRoutes');
// const strokeRoutes = require('./routes/strokeRoutes');

// app.use('/api/auth', authRoutes);          // Patient & Doctor auth
// app.use('/api/ecg', ecgRoutes);
// app.use('/api/history', historyRoutes);
// app.use('/api/save', strokeRoutes);

// // ---------- HEALTH CHECK ----------
// app.get('/health', (req, res) => {
//   res.status(200).json({ message: 'Server is healthy' });
// });

// // ---------- ROOT ----------
// app.get('/', (req, res) => {
//   res.send('🚀 Smart Healthcare Server is up and running');
// });

// // ---------- 404 HANDLER ----------
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// // ---------- GLOBAL ERROR HANDLER ----------
// app.use((err, req, res, next) => {
//   console.error('🚨 Global error:', err.stack);
//   res.status(500).json({ message: 'Internal server error', error: err.message });
// });

// // ---------- MONGODB CONNECTION ----------
// const connectDB = async () => {
//   const maxRetries = 5;
//   let retries = 0;

//   while (retries < maxRetries) {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('✅ MongoDB connected successfully');
//       break;
//     } catch (err) {
//       retries++;
//       console.error(`❌ MongoDB connection failed (attempt ${retries}): ${err.message}`);
//       if (retries >= maxRetries) {
//         console.error('❌ Max retries reached, exiting');
//         process.exit(1);
//       }
//       console.log('⏳ Retrying in 5 seconds...');
//       await new Promise(res => setTimeout(res, 5000));
//     }
//   }
// };

// connectDB();

// // ---------- START SERVER ----------
// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });






// MEW .....(SEP 21)


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const path = require('path');
// const nodemailer = require('nodemailer');
// require('express-async-errors');

// // Load environment variables
// dotenv.config();

// // Initialize app
// const app = express();

// // ---------- CORS CONFIG ----------
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
// app.use(cors({
//   origin: allowedOrigins,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));

// // ---------- MIDDLEWARE ----------
// app.use(helmet());
// app.use(morgan('dev'));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // ---------- STATIC FILES ----------
// app.use('/uploads/profile-images', express.static(path.join(__dirname, 'uploads', 'profile-images')));

// // ---------- ROUTES ----------
// const authRoutes = require('./routes/auth');
// const ecgRoutes = require('./routes/ecgRoutes');
// const historyRoutes = require('./routes/historyRoutes');
// const strokeRoutes = require('./routes/strokeRoutes');

// app.use('/api/auth', authRoutes);
// app.use('/api/ecg', ecgRoutes);
// app.use('/api/history', historyRoutes);
// app.use('/api/save', strokeRoutes);

// // ---------- EMAIL NOTIFICATION ----------
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER, // your gmail
//     pass: process.env.EMAIL_PASS, // app password
//   },
// });

// app.post("/api/appointments/notify", async (req, res) => {
//   const { patientEmail, patientName, doctorName, date, time, status } = req.body;

//   try {
//     let subject = `Appointment ${status}`;
//     let html = `
//       <h2>Appointment ${status}</h2>
//       <p>Dear <strong>${patientName}</strong>,</p>
//       <p>Your appointment has been <strong>${status}</strong>.</p>
//       <ul>
//         <li><strong>Doctor:</strong> ${doctorName}</li>
//         <li><strong>Date:</strong> ${date}</li>
//         <li><strong>Time:</strong> ${time}</li>
//       </ul>
//       <p>Thank you,<br/>Smart Healthcare Team</p>
//     `;

//     await transporter.sendMail({
//       from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
//       to: patientEmail,
//       subject,
//       html,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email error:", error.message);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

// // ---------- HEALTH CHECK ----------
// app.get('/health', (req, res) => {
//   res.status(200).json({ message: 'Server is healthy' });
// });

// // ---------- ROOT ----------
// app.get('/', (req, res) => {
//   res.send('🚀 Smart Healthcare Server is up and running');
// });

// // ---------- 404 HANDLER ----------
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// // ---------- GLOBAL ERROR HANDLER ----------
// app.use((err, req, res, next) => {
//   console.error('🚨 Global error:', err.stack);
//   res.status(500).json({ message: 'Internal server error', error: err.message });
// });

// // ---------- MONGODB CONNECTION ----------
// const connectDB = async () => {
//   const maxRetries = 5;
//   let retries = 0;

//   while (retries < maxRetries) {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('✅ MongoDB connected successfully');
//       break;
//     } catch (err) {
//       retries++;
//       console.error(`❌ MongoDB connection failed (attempt ${retries}): ${err.message}`);
//       if (retries >= maxRetries) {
//         console.error('❌ Max retries reached, exiting');
//         process.exit(1);
//       }
//       console.log('⏳ Retrying in 5 seconds...');
//       await new Promise(res => setTimeout(res, 5000));
//     }
//   }
// };

// connectDB();

// // ---------- START SERVER ----------
// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

















//NEW NEW............



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const path = require('path');
// const nodemailer = require('nodemailer');
// require('express-async-errors');

// const http = require('http');
// const { Server } = require('socket.io');

// // Load environment variables
// dotenv.config();

// // Initialize app
// const app = express();
// const server = http.createServer(app); // for Socket.IO

// // ---------- CORS CONFIG ----------
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
// app.use(cors({
//   origin: allowedOrigins,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));

// // ---------- MIDDLEWARE ----------
// app.use(helmet());
// app.use(morgan('dev'));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // ---------- STATIC FILES ----------
// app.use('/uploads/profile-images', express.static(path.join(__dirname, 'uploads', 'profile-images')));

// // ---------- ROUTES ----------
// const authRoutes = require('./routes/auth');
// const ecgRoutes = require('./routes/ecgRoutes');
// const historyRoutes = require('./routes/historyRoutes');
// const strokeRoutes = require('./routes/strokeRoutes');

// app.use('/api/auth', authRoutes);
// app.use('/api/ecg', ecgRoutes);
// app.use('/api/history', historyRoutes);
// app.use('/api/save', strokeRoutes);

// // ---------- EMAIL NOTIFICATION ----------
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER, // your gmail
//     pass: process.env.EMAIL_PASS, // app password
//   },
// });

// app.post("/api/appointments/notify", async (req, res) => {
//   const { patientEmail, patientName, doctorName, date, time, status } = req.body;

//   try {
//     let subject = `Appointment ${status}`;
//     let html = `
//       <h2>Appointment ${status}</h2>
//       <p>Dear <strong>${patientName}</strong>,</p>
//       <p>Your appointment has been <strong>${status}</strong>.</p>
//       <ul>
//         <li><strong>Doctor:</strong> ${doctorName}</li>
//         <li><strong>Date:</strong> ${date}</li>
//         <li><strong>Time:</strong> ${time}</li>
//       </ul>
//       <p>Thank you,<br/>Smart Healthcare Team</p>
//     `;

//     await transporter.sendMail({
//       from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
//       to: patientEmail,
//       subject,
//       html,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email error:", error.message);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

// // ---------- SOCKET.IO (Video/Voice Signaling) ----------
// const io = new Server(server, {
//   cors: {
//     origin: allowedOrigins,
//     methods: ["GET", "POST"]
//   }
// });

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   // WebRTC signaling
//   socket.on("offer", (data) => socket.broadcast.emit("offer", data));
//   socket.on("answer", (data) => socket.broadcast.emit("answer", data));
//   socket.on("candidate", (data) => socket.broadcast.emit("candidate", data));

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// // ---------- HEALTH CHECK ----------
// app.get('/health', (req, res) => {
//   res.status(200).json({ message: 'Server is healthy' });
// });

// // ---------- ROOT ----------
// app.get('/', (req, res) => {
//   res.send('🚀 Smart Healthcare Server is up and running');
// });

// // ---------- 404 HANDLER ----------
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// // ---------- GLOBAL ERROR HANDLER ----------
// app.use((err, req, res, next) => {
//   console.error('🚨 Global error:', err.stack);
//   res.status(500).json({ message: 'Internal server error', error: err.message });
// });

// // ---------- MONGODB CONNECTION ----------
// const connectDB = async () => {
//   const maxRetries = 5;
//   let retries = 0;

//   while (retries < maxRetries) {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('✅ MongoDB connected successfully');
//       break;
//     } catch (err) {
//       retries++;
//       console.error(`❌ MongoDB connection failed (attempt ${retries}): ${err.message}`);
//       if (retries >= maxRetries) process.exit(1);
//       console.log('⏳ Retrying in 5 seconds...');
//       await new Promise(res => setTimeout(res, 5000));
//     }
//   }
// };

// connectDB();

// // ---------- START SERVER ----------
// const PORT = process.env.PORT || 5002;
// server.listen(PORT, () => {
//   console.log(`🚀 Server + Socket.IO running on port ${PORT}`);
// });




//new..


// import { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import io from "socket.io-client";
// import "./Consultation.css";

// const socket = io("http://localhost:5002");

// export default function ConsultationJoin() {
//   const { id } = useParams();
//   const [callActive, setCallActive] = useState(false);
//   const [callType, setCallType] = useState("video"); // default to video call
//   const [patientName, setPatientName] = useState("");

//   const localVideoRef = useRef(null);
//   const remoteVideoRef = useRef(null);
//   const peerConnection = useRef(null);

//   // ---------------- SOCKET.IO SIGNALING ----------------
//   useEffect(() => {
//     const handleOffer = async (offer) => {
//       peerConnection.current = new RTCPeerConnection();

//       // Get patient's media
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//       localVideoRef.current.srcObject = stream;
//       stream.getTracks().forEach(track => peerConnection.current.addTrack(track, stream));

//       peerConnection.current.ontrack = (event) => {
//         remoteVideoRef.current.srcObject = event.streams[0];
//       };

//       peerConnection.current.onicecandidate = (event) => {
//         if (event.candidate) socket.emit("candidate", event.candidate);
//       };

//       await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
//       const answer = await peerConnection.current.createAnswer();
//       await peerConnection.current.setLocalDescription(answer);
//       socket.emit("answer", answer);

//       setCallActive(true);
//     };

//     const handleAnswer = async (answer) => {
//       if (peerConnection.current) {
//         await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
//       }
//     };

//     const handleCandidate = async (candidate) => {
//       if (peerConnection.current) {
//         await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
//       }
//     };

//     socket.on("offer", handleOffer);
//     socket.on("answer", handleAnswer);
//     socket.on("candidate", handleCandidate);

//     return () => {
//       socket.off("offer", handleOffer);
//       socket.off("answer", handleAnswer);
//       socket.off("candidate", handleCandidate);
//     };
//   }, []);

//   // ---------------- JOIN CALL ----------------
//   const joinCall = async () => {
//     setCallActive(true);
//     // Notify doctor (or broadcast) that patient joined
//     socket.emit("patient-joined", { appointmentId: id, patientName });
//   };

//   const leaveCall = () => {
//     setCallActive(false);
//     peerConnection.current?.close();
//     peerConnection.current = null;
//     if (localVideoRef.current) localVideoRef.current.srcObject = null;
//     if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
//   };

//   return (
//     <div className="consultation-bg">
//       <div className="consultation-container">
//         <h1>Join Consultation #{id}</h1>

//         {!callActive ? (
//           <div className="join-form">
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//             />
//             <button onClick={joinCall} disabled={!patientName}>
//               🎥 Join Video Call
//             </button>
//           </div>
//         ) : (
//           <div className="video-call">
//             <div className="videos">
//               <video ref={localVideoRef} autoPlay playsInline muted />
//               <video ref={remoteVideoRef} autoPlay playsInline />
//             </div>
//             <button onClick={leaveCall} className="end-call-btn">End Call</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }













///   finalll

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const path = require('path');
// const nodemailer = require('nodemailer');
// require('express-async-errors');

// const http = require('http');
// const { Server } = require('socket.io');

// // Load environment variables
// dotenv.config();

// // Initialize app
// const app = express();
// const server = http.createServer(app); // Required for Socket.IO

// // ---------- CORS CONFIG ----------
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
// app.use(cors({
//   origin: allowedOrigins,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));

// // ---------- MIDDLEWARE ----------
// app.use(helmet());
// app.use(morgan('dev'));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // ---------- STATIC FILES ----------
// app.use('/uploads/profile-images', express.static(path.join(__dirname, 'uploads/profile-images')));

// // ---------- ROUTES ----------
// const authRoutes = require('./routes/auth');
// const ecgRoutes = require('./routes/ecgRoutes');
// const historyRoutes = require('./routes/historyRoutes');
// const strokeRoutes = require('./routes/strokeRoutes');

// app.use('/api/auth', authRoutes);
// app.use('/api/ecg', ecgRoutes);
// app.use('/api/history', historyRoutes);
// app.use('/api/save', strokeRoutes);

// // ---------- EMAIL TRANSPORTER ----------
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ---------- APPOINTMENT EMAIL NOTIFICATION ----------
// app.post("/api/appointments/notify", async (req, res) => {
//   const { patientEmail, patientName, doctorName, date, time, status } = req.body;

//   try {
//     let subject = `Appointment ${status}`;
//     let html = `
//       <h2>Appointment ${status}</h2>
//       <p>Dear <strong>${patientName}</strong>,</p>
//       <p>Your appointment has been <strong>${status}</strong>.</p>
//       <ul>
//         <li><strong>Doctor:</strong> ${doctorName}</li>
//         <li><strong>Date:</strong> ${date}</li>
//         <li><strong>Time:</strong> ${time}</li>
//       </ul>
//       <p>Thank you,<br/>Smart Healthcare Team</p>
//     `;

//     await transporter.sendMail({
//       from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
//       to: patientEmail,
//       subject,
//       html,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email error:", error.message);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

// // ---------- VIDEO CALL LINK EMAIL ----------
// app.post("/api/appointments/send-link", async (req, res) => {
//   const { patientEmail, patientName, appointmentId } = req.body;

//   try {
//     // Generate a consultation join link
//     const link = `http://localhost:3000/consultation-join/${appointmentId}`;
//     const html = `
//       <h2>Consultation Link</h2>
//       <p>Dear <strong>${patientName}</strong>,</p>
//       <p>You can join your consultation by clicking the link below:</p>
//       <p><a href="${link}" target="_blank">${link}</a></p>
//       <p>Thank you,<br/>Smart Healthcare Team</p>
//     `;

//     await transporter.sendMail({
//       from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
//       to: patientEmail,
//       subject: "Join Your Consultation",
//       html,
//     });

//     res.status(200).json({ success: true, message: "Video call link sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email error:", error.message);
//     res.status(500).json({ success: false, message: "Failed to send link email" });
//   }
// });

// // ---------- SOCKET.IO (WebRTC Signaling) ----------
// const io = new Server(server, {
//   cors: {
//     origin: allowedOrigins,
//     methods: ["GET", "POST"]
//   }
// });

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   // WebRTC signaling
//   socket.on("offer", (data) => socket.broadcast.emit("offer", data));
//   socket.on("answer", (data) => socket.broadcast.emit("answer", data));
//   socket.on("candidate", (data) => socket.broadcast.emit("candidate", data));

//   // Optional: notify doctor when patient joins
//   socket.on("patient-joined", (data) => {
//     console.log("Patient joined appointment:", data);
//     socket.broadcast.emit("patient-joined", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// // ---------- HEALTH CHECK ----------
// app.get('/health', (req, res) => {
//   res.status(200).json({ message: 'Server is healthy' });
// });

// // ---------- ROOT ----------
// app.get('/', (req, res) => {
//   res.send('🚀 Smart Healthcare Server is up and running');
// });

// // ---------- 404 HANDLER ----------
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// // ---------- GLOBAL ERROR HANDLER ----------
// app.use((err, req, res, next) => {
//   console.error('🚨 Global error:', err.stack);
//   res.status(500).json({ message: 'Internal server error', error: err.message });
// });

// // ---------- MONGODB CONNECTION ----------
// const connectDB = async () => {
//   const maxRetries = 5;
//   let retries = 0;

//   while (retries < maxRetries) {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('✅ MongoDB connected successfully');
//       break;
//     } catch (err) {
//       retries++;
//       console.error(`❌ MongoDB connection failed (attempt ${retries}): ${err.message}`);
//       if (retries >= maxRetries) process.exit(1);
//       console.log('⏳ Retrying in 5 seconds...');
//       await new Promise(res => setTimeout(res, 5000));
//     }
//   }
// };

// connectDB();

// // ---------- START SERVER ----------
// const PORT = process.env.PORT || 5002;
// server.listen(PORT, () => {
//   console.log(`🚀 Server + Socket.IO running on port ${PORT}`);
// });







// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const path = require('path');
// const nodemailer = require('nodemailer');
// require('express-async-errors');

// const http = require('http');
// const { Server } = require('socket.io');

// dotenv.config();

// // ---------- INITIALIZE APP ----------
// const app = express();
// const server = http.createServer(app); // Required for Socket.IO

// // ---------- CORS ----------
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
// app.use(cors({
//   origin: allowedOrigins,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));

// // ---------- MIDDLEWARE ----------
// app.use(helmet());
// app.use(morgan('dev'));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // ---------- STATIC FILES ----------
// app.use('/uploads/profile-images', express.static(path.join(__dirname, 'uploads/profile-images')));

// // ---------- ROUTES ----------
// const authRoutes = require('./routes/auth');
// const ecgRoutes = require('./routes/ecgRoutes');
// const historyRoutes = require('./routes/historyRoutes');
// const strokeRoutes = require('./routes/strokeRoutes');

// app.use('/api/auth', authRoutes);
// app.use('/api/ecg', ecgRoutes);
// app.use('/api/history', historyRoutes);
// app.use('/api/save', strokeRoutes);

// // ---------- EMAIL TRANSPORTER ----------
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ---------- APPOINTMENT EMAIL NOTIFICATION ----------
// app.post("/api/appointments/notify", async (req, res) => {
//   const { patientEmail, patientName, doctorName, date, time, status } = req.body;

//   try {
//     const subject = `Appointment ${status}`;
//     const html = `
//       <h2>Appointment ${status}</h2>
//       <p>Dear <strong>${patientName}</strong>,</p>
//       <p>Your appointment has been <strong>${status}</strong>.</p>
//       <ul>
//         <li><strong>Doctor:</strong> ${doctorName}</li>
//         <li><strong>Date:</strong> ${date}</li>
//         <li><strong>Time:</strong> ${time}</li>
//       </ul>
//       <p>Thank you,<br/>Smart Healthcare Team</p>
//     `;

//     await transporter.sendMail({
//       from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
//       to: patientEmail,
//       subject,
//       html,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email error:", error.message);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

// // ---------- VIDEO CALL LINK EMAIL ----------
// app.post("/api/appointments/send-link", async (req, res) => {
//   const { patientEmail, patientName, appointmentId } = req.body;

//   try {
//     const link = `http://localhost:3000/consultation/${appointmentId}`;
//     const html = `
//       <h2>Consultation Link</h2>
//       <p>Dear <strong>${patientName}</strong>,</p>
//       <p>You can join your consultation by clicking the link below:</p>
//       <p><a href="${link}" target="_blank">${link}</a></p>
//       <p>Thank you,<br/>Smart Healthcare Team</p>
//     `;

//     await transporter.sendMail({
//       from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
//       to: patientEmail,
//       subject: "Join Your Consultation",
//       html,
//     });

//     res.status(200).json({ success: true, message: "Video call link sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email error:", error.message);
//     res.status(500).json({ success: false, message: "Failed to send link email" });
//   }
// });

// // ---------- SOCKET.IO (WebRTC Signaling) ----------
// const io = new Server(server, {
//   cors: {
//     origin: allowedOrigins,
//     methods: ["GET", "POST"]
//   }
// });

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   socket.on("join-room", (roomId) => {
//     socket.join(roomId);
//     console.log(`User ${socket.id} joined room ${roomId}`);
//   });

//   socket.on("offer", (data) => socket.to(data.roomId).emit("offer", data));
//   socket.on("answer", (data) => socket.to(data.roomId).emit("answer", data));
//   socket.on("candidate", (data) => socket.to(data.roomId).emit("candidate", data));

//   socket.on("patient-joined", (data) => {
//     console.log("Patient joined appointment:", data);
//     socket.to(data.roomId).emit("patient-joined", data);
//   });

//   socket.on("disconnect", () => console.log("User disconnected:", socket.id));
// });

// // ---------- HEALTH CHECK ----------
// app.get('/health', (req, res) => {
//   res.status(200).json({ message: 'Server is healthy' });
// });

// // ---------- ROOT ----------
// app.get('/', (req, res) => {
//   res.send('🚀 Smart Healthcare Server is up and running');
// });

// // ---------- 404 HANDLER ----------
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// // ---------- GLOBAL ERROR HANDLER ----------
// app.use((err, req, res, next) => {
//   console.error('🚨 Global error:', err.stack);
//   res.status(500).json({ message: 'Internal server error', error: err.message });
// });

// // ---------- MONGODB CONNECTION ----------
// const connectDB = async () => {
//   const maxRetries = 5;
//   let retries = 0;

//   while (retries < maxRetries) {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('✅ MongoDB connected successfully');
//       break;
//     } catch (err) {
//       retries++;
//       console.error(`❌ MongoDB connection failed (attempt ${retries}): ${err.message}`);
//       if (retries >= maxRetries) process.exit(1);
//       console.log('⏳ Retrying in 5 seconds...');
//       await new Promise(res => setTimeout(res, 5000));
//     }
//   }
// };

// connectDB();

// // ---------- START SERVER ----------
// const PORT = process.env.PORT || 5002;
// server.listen(PORT, () => {
//   console.log(`🚀 Server + Socket.IO running on port ${PORT}`);
// });




// // ------------------ IMPORTS ------------------
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const path = require('path');
// const nodemailer = require('nodemailer');
// require('express-async-errors');
// const http = require('http');
// const { Server } = require('socket.io');

// dotenv.config();

// // ------------------ INITIALIZE APP ------------------
// const app = express();
// const server = http.createServer(app);

// // ------------------ CORS ------------------
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
// app.use(cors({
//   origin: allowedOrigins,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));

// // ------------------ MIDDLEWARE ------------------
// app.use(helmet());
// app.use(morgan('dev'));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // ------------------ STATIC FILES ------------------
// app.use('/uploads/profile-images', express.static(path.join(__dirname, 'uploads/profile-images')));

// // ------------------ ROUTES ------------------
// const authRoutes = require('./routes/auth');
// const ecgRoutes = require('./routes/ecgRoutes');
// const historyRoutes = require('./routes/historyRoutes');
// const strokeRoutes = require('./routes/strokeRoutes');

// app.use('/api/auth', authRoutes);
// app.use('/api/ecg', ecgRoutes);
// app.use('/api/history', historyRoutes);
// app.use('/api/save', strokeRoutes);

// // ------------------ EMAIL TRANSPORTER ------------------
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ------------------ APPOINTMENT EMAIL ------------------
// app.post("/api/appointments/notify", async (req, res) => {
//   const { patientEmail, patientName, doctorName, date, time, status } = req.body;

//   try {
//     const subject = `Appointment ${status}`;
//     const html = `
//       <h2>Appointment ${status}</h2>
//       <p>Dear <strong>${patientName}</strong>,</p>
//       <p>Your appointment has been <strong>${status}</strong>.</p>
//       <ul>
//         <li><strong>Doctor:</strong> ${doctorName}</li>
//         <li><strong>Date:</strong> ${date}</li>
//         <li><strong>Time:</strong> ${time}</li>
//       </ul>
//       <p>Thank you,<br/>Smart Healthcare Team</p>
//     `;
//     await transporter.sendMail({
//       from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
//       to: patientEmail,
//       subject,
//       html,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email error:", error.message);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

// // ---------- VIDEO CALL LINK EMAIL ----------
// app.post("/api/appointments/send-link", async (req, res) => {
//   const { patientEmail, patientName, appointmentId } = req.body;

//   try {
//     if (!appointmentId) {
//       return res.status(400).json({ success: false, message: "Appointment ID is missing!" });
//     }

//     // Generate a proper consultation join link
//     const link = `http://localhost:3000/doctor/consultation-join/${appointmentId}`;

//     const html = `
//       <h2>Consultation Link</h2>
//       <p>Dear <strong>${patientName}</strong>,</p>
//       <p>You can join your consultation by clicking the link below:</p>
//       <p><a href="${link}" target="_blank">${link}</a></p>
//       <p>Thank you,<br/>Smart Healthcare Team</p>
//     `;

//     await transporter.sendMail({
//       from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
//       to: patientEmail,
//       subject: "Join Your Consultation",
//       html,
//     });

//     res.status(200).json({ success: true, message: "Video call link sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email error:", error.message);
//     res.status(500).json({ success: false, message: "Failed to send link email" });
//   }
// });


// // ------------------ SOCKET.IO ------------------
// const io = new Server(server, {
//   cors: {
//     origin: allowedOrigins,
//     methods: ["GET", "POST"]
//   }
// });

// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   socket.on("join-room", (roomId) => {
//     socket.join(roomId);
//     console.log(`User ${socket.id} joined room ${roomId}`);
//   });

//   socket.on("offer", (data) => socket.to(data.roomId).emit("offer", data));
//   socket.on("answer", (data) => socket.to(data.roomId).emit("answer", data));
//   socket.on("candidate", (data) => socket.to(data.roomId).emit("candidate", data));
//   socket.on("patient-joined", (data) => socket.to(data.roomId).emit("patient-joined", data));

//   socket.on("disconnect", () => console.log("User disconnected:", socket.id));
// });

// // ------------------ HEALTH CHECK ------------------
// app.get('/health', (req, res) => res.status(200).json({ message: 'Server is healthy' }));
// app.get('/', (req, res) => res.send('🚀 Smart Healthcare Server is up and running'));

// // ------------------ 404 HANDLER ------------------
// app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

// // ------------------ GLOBAL ERROR HANDLER ------------------
// app.use((err, req, res, next) => {
//   console.error('🚨 Global error:', err.stack);
//   res.status(500).json({ message: 'Internal server error', error: err.message });
// });

// // ------------------ MONGODB CONNECTION ------------------
// const connectDB = async () => {
//   const maxRetries = 5;
//   let retries = 0;

//   while (retries < maxRetries) {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('✅ MongoDB connected successfully');
//       break;
//     } catch (err) {
//       retries++;
//       console.error(`❌ MongoDB connection failed (attempt ${retries}): ${err.message}`);
//       if (retries >= maxRetries) process.exit(1);
//       console.log('⏳ Retrying in 5 seconds...');
//       await new Promise(res => setTimeout(res, 5000));
//     }
//   }
// };

// connectDB();

// // ------------------ START SERVER ------------------
// const PORT = process.env.PORT || 5002;
// server.listen(PORT, () => {
//   console.log(`🚀 Server + Socket.IO running on port ${PORT}`);
// });







// ---------- IMPORTS ----------
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');
const http = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid'); // to generate unique roomIds

dotenv.config();

// ---------- INITIALIZE ----------
const app = express();
const server = http.createServer(app);

// ---------- CORS ----------
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({ origin: allowedOrigins, methods: ['GET', 'POST'], credentials: true }));

// ---------- MIDDLEWARE ----------
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ---------- STATIC ----------
app.use('/uploads/profile-images', express.static(path.join(__dirname, 'uploads/profile-images')));

// ---------- ROUTES ----------
const authRoutes = require('./routes/auth');
const ecgRoutes = require('./routes/ecgRoutes');
const historyRoutes = require('./routes/historyRoutes');
const strokeRoutes = require('./routes/strokeRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/ecg', ecgRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/save', strokeRoutes);

// ---------- EMAIL TRANSPORTER ----------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ---------- SEND VIDEO CALL LINK ----------
app.post("/api/appointments/send-link", async (req, res) => {
  try {
    const { patientEmail, patientName, appointmentId } = req.body;

    // generate roomId if not passed from frontend
    const roomId = appointmentId || uuidv4();

    const link = `http://localhost:3000/consultation/${roomId}`;
    const html = `
      <h2>Consultation Link</h2>
      <p>Dear <strong>${patientName}</strong>,</p>
      <p>You can join your consultation by clicking the link below:</p>
      <p><a href="${link}" target="_blank">${link}</a></p>
      <p>Thank you,<br/>Smart Healthcare Team</p>
    `;

    await transporter.sendMail({
      from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
      to: patientEmail,
      subject: "Join Your Consultation",
      html,
    });

    return res.status(200).json({
      success: true,
      message: "Video call link sent successfully!",
      roomId,
    });
  } catch (error) {
    console.error("❌ Email error:", error.message);
    res.status(500).json({ success: false, message: "Failed to send link email" });
  }
});

// ---------- SOCKET.IO (WebRTC signaling) ----------
const io = new Server(server, {
  cors: { origin: allowedOrigins, methods: ["GET", "POST"] }
});

io.on("connection", (socket) => {
  console.log("✅ A user connected:", socket.id);

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    console.log(`📌 User ${socket.id} joined room ${roomId}`);
    socket.to(roomId).emit("user-joined", { socketId: socket.id });
  });

  socket.on("offer", (data) => socket.to(data.roomId).emit("offer", data));
  socket.on("answer", (data) => socket.to(data.roomId).emit("answer", data));
  socket.on("candidate", (data) => socket.to(data.roomId).emit("candidate", data));

  socket.on("disconnect", () => console.log("❌ User disconnected:", socket.id));
});

// ---------- HEALTH CHECK ----------
app.get('/health', (req, res) => res.status(200).json({ message: 'Server healthy' }));

// ---------- MONGODB ----------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  }
};
connectDB();

// ---------- START SERVER ----------
const PORT = process.env.PORT || 5002;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
