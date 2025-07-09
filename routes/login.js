// const express = require("express");
// const router = express.Router();
// const Login = require("../model/login");
// const sendMail = require("../utils/sendMail");

// router.post("/", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ success: false, message: "Email and password required." });
//   }

//   try {
//     const newUser = new Login({ email, password });
//     await newUser.save();

//     await sendMail(
//       email,
//       "🚀 Login Success - Quiz App",
//       `Hi ${email},\n\nYou're logged in successfully.\nEnjoy your quiz journey! 🌌`
//     );

//     res.status(200).json({ success: true, message: "✅ Login success & email sent!" });
//   } catch (err) {
//     console.error("⚠️ Login Error:", err);
//     res.status(500).json({ success: false, message: "⚠️ Server error. Try again later." });
//   }
// });

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const Login = require("../model/login");
// const sendMail = require("../utils/sendMail");

// const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com", "protonmail.com"];

// // ✅ This should be OUTSIDE of router.post!
// router.get("/", (req, res) => {
//   res.send("🔐 Login route is active and reachable via POST method!");
// });

// router.post("/", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       success: false,
//       message: "❌ Email and password required.",
//     });
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({
//       success: false,
//       message: "❌ Invalid email format.",
//     });
//   }

//   const domain = email.split("@")[1];
//   if (!allowedDomains.includes(domain)) {
//     return res.status(403).json({
//       success: false,
//       message: `❌ Only emails from ${allowedDomains.join(", ")} are allowed.`,
//     });
//   }

//   try {
//     let existingUser = await Login.findOne({ email });

//     if (!existingUser) {
//       existingUser = new Login({ email, password });
//       // 🔽 Add these two lines for debugging
//     console.log("💾 Saving new user:", existingUser);
//     await existingUser.save();
//     console.log("✅ Saved successfully!");
  
//     }

//     await sendMail(
//       email,
//       "🚀 Login Success - Quiz App",
//       `Hi ${email},\n\nYou're logged in successfully.\nEnjoy your quiz journey! 🌌`
//     );

//     res.status(200).json({
//       success: true,
//       message: "✅ Login success & confirmation mail sent!",
//     });

//   } catch (err) {
//     console.error("⚠️ Login Error:", err);
//     res.status(500).json({
//       success: false,
//       message: "⚠️ Server error. Please try again later.",
//     });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Login = require("../model/login");
// const sendMail = require("../utils/sendMail");

// const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com", "protonmail.com"];

// router.get("/", (req, res) => {
//   res.send("🔐 Login route is active and reachable via POST method!");
// });

// router.post("/", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ success: false, message: "❌ Email and password required." });
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ success: false, message: "❌ Invalid email format." });
//   }

//   const domain = email.split("@")[1];
//   if (!allowedDomains.includes(domain)) {
//     return res.status(403).json({
//       success: false,
//       message: `❌ Only emails from ${allowedDomains.join(", ")} are allowed.`,
//     });
//   }

//   try {
//     let existingUser = await Login.findOne({ email });

//     if (!existingUser) {
//       existingUser = new Login({ email, password });
//       console.log("💾 Saving new user:", existingUser);
//       await existingUser.save();
//       console.log("✅ Saved successfully!");
//     }

//     await sendMail(
//       email,
//       "🚀 Login Success - Quiz App",
//       `Hi ${email},\n\nYou're logged in successfully.\nEnjoy your quiz journey! 🌌`
//     );

//     res.status(200).json({
//       success: true,
//       message: "✅ Login success & confirmation mail sent!",
//     });

//   } catch (err) {
//     console.error("⚠️ Login Error:", err);
//     res.status(500).json({
//       success: false,
//       message: "⚠️ Server error. Please try again later.",
//     });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Login = require("../model/login");
// const sendMail = require("../utils/sendMail");

// const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com", "protonmail.com"];
// const adminEmail = "variyajanvii2024.katargam@gmail.com";

// // Test GET
// router.get("/", (req, res) => {
//   res.send("🔐 Login route is active and reachable via POST method!");
// });

// router.post("/", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ success: false, message: "❌ Email and password required." });
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ success: false, message: "❌ Invalid email format." });
//   }

//   const domain = email.split("@")[1];
//   if (!allowedDomains.includes(domain)) {
//     return res.status(403).json({
//       success: false,
//       message: `❌ Only emails from ${allowedDomains.join(", ")} are allowed.`,
//     });
//   }

//   try {
//     let existingUser = await Login.findOne({ email });

//     if (!existingUser) {
//       const role = email === adminEmail ? "admin" : "user";
//       const newUser = new Login({ email, password, role });

//       const savedUser = await newUser.save();
//       console.log("✅ User saved:", savedUser);
//     } else {
//       console.log("👤 Existing user logged in:", existingUser.email);
//     }

//     // Send mail only if DB operation succeeded
//     await sendMail(
//       email,
//       "🚀 Login Success - Quiz App",
//       `Hi ${email},\n\nYou're logged in successfully.\nEnjoy your quiz journey! 🌌`
//     );

//     res.status(200).json({
//       success: true,
//       message: "✅ Login success & confirmation mail sent!",
//     });

//   } catch (err) {
//     console.error("⚠️ Login Error:", err);
//     res.status(500).json({
//       success: false,
//       message: "⚠️ Server error. Please try again later.",
//     });
//   }
// });

// module.exports = router;




// backend/routes/login.js
const express = require("express");
const router = express.Router();
const Login = require("../model/login");
const sendMail = require("../utils/sendMail");

const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com", "protonmail.com"];
router.get("/", (req, res) => {
  res.send("🔐 Login route is active and reachable via POST method!");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "❌ Email and password required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "❌ Invalid email format." });
  }

  const domain = email.split("@")[1];
  if (!allowedDomains.includes(domain)) {
    return res.status(403).json({
      success: false,
      message: `❌ Only emails from ${allowedDomains.join(", ")} are allowed.`,
    });
  }

  try {
    // 🔍 Check if user exists
    let user = await Login.findOne({ email });

    if (!user) {
      // 🔐 Create user if not exists
      const role = email === "variyajanvii2024.katargam@gmail.com" ? "admin" : "user";
      user = new Login({ email, password, role });
      await user.save();
      console.log("✅ New user saved:", user);
    } else {
      console.log("👤 Existing user logged in:", user.email);
    }

    await sendMail(
      email,
      "🚀 Login Success - Quiz App",
      `Hi ${email},\n\nYou're logged in successfully.\nEnjoy your quiz journey! 🌌`
    );

    res.status(200).json({
      success: true,
      message: "✅ Login success & confirmation mail sent!",
    });

  } catch (err) {
    console.error("⚠️ Login Error:", err);
    res.status(500).json({
      success: false,
      message: " Server error",
    });
  }
});

module.exports = router;
