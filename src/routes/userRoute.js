import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import nodemailer from "nodemailer"; 

const router = express.Router();

// Define the User model directly here
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// Register route
router.post("/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) return res.status(400).send("Passwords do not match");

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send("User registered");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid credentials");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid credentials");

  const token = jwt.sign({ id: user._id }, "secretKey");
  res.send({ token });
});

// Forgot Password route (send reset email)
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("User not found");

  // Generate a password reset token (or a link to reset the password)
  const resetToken = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });

  // Create a transporter for sending email using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'venkatasmi143@gmail.com', // Your email
      pass: 'pcehahrsdgkpkrrb' // Your email password (use App Passwords for Gmail)
    }
  });

  const mailOptions = {
    from: 'venkatasmi143@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: http://localhost:5173/reset-password/${resetToken}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send("Error sending email: " + err.message);
    }
    res.send("Password reset link sent to your email");
  });
});

// Reset Password route
router.post("/reset-password", async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(token, "secretKey");
    const userId = decoded.id;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the password in the database
    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    res.send("Password has been reset successfully");
  } catch (error) {
    res.status(400).send("Invalid or expired token");
  }
});


export { router as userRouter };
