import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSpotify } from "react-icons/fa";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate(); // To redirect to the login page

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset error message before new attempt
    setError("");

    // Check if passwords match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Make API request to register the user
      await axios.post("http://localhost:4000/api/user/register", form);
      // Redirect after successful registration
      setTimeout(() => {
        navigate("/");
      }, 2000); // Delay for 2 seconds before redirect
    } catch (error) {
      // Check if the error is about existing user
      if (error.response?.data?.message === "User already exists") {
        setError("User already exists");
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Spotify Logo and Title */}
        <div className="mb-6 text-center">
          <FaSpotify className="text-[#1db954] mx-auto text-5xl" />
          <h1 className="text-white text-2xl font-bold mt-2">Sign up to start listening</h1>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-600 text-white text-center py-2 rounded mb-4">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1 text-left"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#1db954]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#1db954]"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1 text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#1db954]"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300 mb-1 text-left"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#1db954]"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1db954] hover:bg-[#1ed760] text-black font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1db954]"
          >
            Register
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-[#1db954] hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
