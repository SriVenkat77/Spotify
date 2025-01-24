import React, { useState } from 'react';
import { FaSpotify, FaHome, FaSearch, FaBell, FaUser } from 'react-icons/fa'; 
import { IoClose } from 'react-icons/io5'; 
import { useNavigate } from 'react-router-dom';
import { BsBrowserChrome } from "react-icons/bs";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State to handle the hamburger menu toggle
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); // State to handle profile dropdown
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
    window.location.reload();
  };

  const handleSearch = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu on item click
  };

  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-black text-white" style={{ height: '60px' }}>
      {/* Left Section: Spotify Icon */}
      <div className="flex items-center">
        <FaSpotify
          className="text-4xl text-green-500 cursor-pointer"
          onClick={() => navigate('/')}
          title="Spotify Home"
        />
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center gap-6 flex-grow justify-center">
        {/* Home Icon */}
        <div
          className="hidden lg:flex items-center justify-center w-12 h-12 bg-[#282828] rounded-full cursor-pointer"
          onClick={() => navigate('/')}
          title="Home"
        >
          <FaHome className="text-2xl text-white" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#282828] px-4 py-2 rounded-full w-[200px] sm:w-[300px] lg:w-[400px]">
          <FaSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={window.innerWidth <= 768 ? 'Search' : 'What do you want to play?'} // Dynamic placeholder based on screen size
            className="bg-transparent text-base text-white focus:outline-none ml-3 w-full"
          />
          {searchQuery && (
            <IoClose
              className="text-white text-2xl cursor-pointer ml-2"
              onClick={clearSearch}
              title="Clear Search"
            />
          )}
          <button onClick={handleSearch} className="text-white ml-3">
            <BsBrowserChrome className="text-2xl" /> {/* Replaced second search icon with ads click icon */}
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 hidden lg:flex">
        <p className="text-sm font-bold cursor-pointer hover:underline bg-white text-black px-2 py-2 rounded-full">
          Explore Premium
        </p>
        <p className="text-sm font-bold cursor-pointer hover:underline">Install App</p>
        <div
          className="flex items-center justify-center w-10 h-10 bg-[#282828] rounded-full cursor-pointer"
          title="Notifications"
        >
          <FaBell className="text-xl text-white" />
        </div>

        {/* Profile Icon */}
        <div
          className="flex items-center justify-center w-10 h-10 bg-[#282828] rounded-full cursor-pointer"
          onClick={() => setProfileMenuOpen(!profileMenuOpen)} // Toggle profile menu on click
        >
          <FaUser className="text-white" />
        </div>

        {/* Profile Dropdown Menu */}
        {profileMenuOpen && (
          <div className="absolute top-[60px] right-0 bg-black text-white w-[200px] rounded-lg shadow-lg">
           
            <p
              onClick={() => handleMenuClick('/')}
              className="py-2 px-4 cursor-pointer hover:bg-gray-700"
            >
              Profile
            </p>
            <p
              onClick={() => handleMenuClick('/')}
              className="py-2 px-4 cursor-pointer hover:bg-gray-700"
            >
              Settings
            </p>
            <p
              onClick={onLogout}
              className="py-2 px-4 cursor-pointer hover:bg-gray-700"
            >
              Logout
            </p>
          </div>
        )}
      </div>

      {/* Dropdown Menu for mobile */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full bg-black text-white flex flex-col p-4 z-10">
          <p onClick={() => handleMenuClick('/')} className="py-2 cursor-pointer hover:underline">Home</p>
          <p className="py-2 cursor-pointer hover:underline">Notifications</p>
          <p className="py-2 cursor-pointer hover:underline">Profile</p>
          <p className="py-2 cursor-pointer hover:underline">Explore Premium</p>
          <p className="py-2 cursor-pointer hover:underline">Install App</p>
          <p onClick={onLogout} className="py-2 cursor-pointer hover:underline">Logout</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
