import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaSpotify } from "react-icons/fa";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/user/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setUser(data);
      // Reset error state on successful login
      setError("");
    } catch (error) {
      // Update error state with a message when login fails
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Spotify Logo and Title */}
        <div className="mb-6 text-center">
          <FaSpotify className="text-[#1db954] mx-auto text-5xl" />
          <h1 className="text-white text-2xl font-bold mt-2">Log in to Spotify</h1>
        </div>

        {/* Error Message (Only show if error exists) */}
        {error && (
          <div className="bg-red-600 text-white text-center p-2 rounded-full mb-4">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1db954] hover:bg-[#1ed760] text-black font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1db954]"
          >
            Log In
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-sm text-center">
          <Link to="/forgot-password" className="text-[#1db954] hover:underline">
            Forgot your password?
          </Link>
        </div>
        <div className="mt-4 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#1db954] hover:underline">
            Sign up for Spotify
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
