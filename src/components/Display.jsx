import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Display = () => {
  const { albumsData } = useContext(PlayerContext);

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  const bgColor = isAlbum ? albumsData.find((x) => x._id === albumId)?.bgColour : "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto 
        sm:w-full sm:px-4 sm:pt-3 lg:w-[75%] lg:ml-0 xl:w-[70%] xl:px-8 xl:pt-6"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
       </Routes>
    </div>
  );
};

export default Display;
