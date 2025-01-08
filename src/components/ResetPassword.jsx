import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaSpotify } from "react-icons/fa";

const ResetPassword = () => {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const { token } = useParams(); // Get token from URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    // Check if passwords match
    if (form.newPassword !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      // API request to reset password
      await axios.post("https://spotify-1-fgy2.onrender.com/api/user/reset-password", {
        token,
        newPassword: form.newPassword,
      });

      setMessage("Password reset successful!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setMessage(
        error.response?.data || "Error resetting password. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Spotify Logo and Title */}
        <div className="mb-6 text-center">
          <FaSpotify className="text-[#1db954] mx-auto text-5xl" />
          <h1 className="text-white text-2xl font-bold mt-2">Reset Password</h1>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`${
              message.includes("successful")
                ? "bg-green-600"
                : "bg-red-600"
            } text-white text-center py-2 rounded mb-4`}
          >
            {message}
          </div>
        )}

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-300 mb-1 text-left"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter your new password"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#1db954]"
              value={form.newPassword}
              onChange={(e) =>
                setForm({ ...form, newPassword: e.target.value })
              }
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
              placeholder="Confirm your new password"
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
            Reset Password
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-sm text-center">
          Remembered your password?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-[#1db954] hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
