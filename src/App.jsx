import React, { useContext, useEffect, useState, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import DisplayHome from './components/DisplayHome';
import Search from './components/SearchPage';
import Navbar from './components/Navbar';
import { PlayerContext } from './context/PlayerContext';
import DisplayAlbum from './components/DisplayAlbum';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

const App = () => {
  const { audioRef, track, songsData, albumsData } = useContext(PlayerContext);
  const [bgColor, setBgColor] = useState('#121212'); // Default background color
  const [user, setUser] = useState(null); // User state management
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";

  // Set background color based on album data
  useEffect(() => {
    if (isAlbum && albumsData) {
      const album = albumsData.find((x) => x._id === albumId);
      if (album) {
        setBgColor(album.bgColour);
      }
    } else {
      setBgColor('#121212'); // Default color when not in album view
    }
  }, [isAlbum, albumId, albumsData]);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    }
  }, [bgColor]);

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col overflow-hidden">
      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <div className="flex flex-grow flex-col lg:flex-row w-full overflow-hidden gap-4"> {/* Added gap-4 here */}
            {/* Sidebar */}
            <Sidebar className="hidden lg:block lg:w-[40%] lg:px-4" />
            {/* Main Content */}
            <div
              ref={displayRef}
              className="flex-grow overflow-auto p-2 lg:w-[60%]"
            >
              <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </div>
          </div>
          {/* Player */}
          <Player />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-black via-black to-[#1db954]">
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Routes>
        </div>
      )}
      <audio ref={audioRef} src={track ? track.file : ""} preload="auto"></audio>
    </div>
  );
};

export default App;
