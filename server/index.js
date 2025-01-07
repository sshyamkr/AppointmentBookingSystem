const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");
const doctorRoutes = require("./routes/doctor");

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.VITE_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

connectDB();
app.get("/", (req, res) => {
  res.send("Welcome to API");
});

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctors", doctorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
