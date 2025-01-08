import { useState } from "react";
import axios from "axios";
import { FaSpotify } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State to hold success or error message
  const [isError, setIsError] = useState(false); // State to differentiate between success and error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/user/forgot-password", { email });
      setIsError(false); // Indicate success
      setMessage("Password reset link sent to your email!"); // Success message
    } catch (error) {
      setIsError(true); // Indicate error
      setMessage("Incorrect email."); // Error message
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Spotify Logo and Title */}
        <div className="mb-6 text-center">
          <FaSpotify className="text-[#1db954] mx-auto text-5xl" />
          <h1 className="text-white text-2xl font-bold mt-2">Reset Your Password</h1>
          <p className="text-sm text-gray-300 mt-2">
            Enter the email address linked to your Spotify account, and we'll send you an email.
          </p>
        </div>

        {/* Message display */}
        {message && (
          <div
            className={`${
              isError ? "bg-red-600" : "bg-green-600"
            } text-white text-center p-2 rounded-full mb-4`}
          >
            {message}
          </div>
        )}

        {/* Reset Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1 text-left"
            >
              Email Address
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
          <button
            type="submit"
            className="w-full bg-[#1db954] hover:bg-[#1ed760] text-black font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1db954]"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
