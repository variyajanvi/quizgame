const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

// ✅ Automatically assign admin role to specific email
loginSchema.pre("save", function (next) {
  if (this.email === "variyajanvii2024.katargam@gmail.com") {
    this.role = "admin";
  }
  next();
});

module.exports = mongoose.model("Login", loginSchema);
