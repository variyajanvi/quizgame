const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const loginRoute = require("./routes/login");

const app = express();

// ✅ MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/loginform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// 🔧 Middlewares
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 🌐 Static Files
app.use(express.static(path.join(__dirname, "public")));

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("✅ Backend is working");
});

// 🔐 Login Route
app.use("/login", loginRoute);

// ❌ 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Page not found" });
});

// 💥 Error Handler
app.use((err, req, res, next) => {
  console.error("💥 Error:", err.message);
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

// 🚀 Server Start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;
