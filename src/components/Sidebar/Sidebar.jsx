import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='bg-[#121212] min-h-screen pl-[4vw]'>
      {/* Logo */}
      <img 
        src={assets.logo} 
        alt="Logo" 
        className="mt-5 w-[max(10vw,100px)] hidden sm:block" 
      />
      <img 
        src={assets.logo_small} 
        alt="Small Logo" 
        className="mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block" 
      />

      {/* Navigation Links */}
      <div className="flex flex-col gap-5 mt-10">
 

        {/* Add Album */}
        <NavLink 
          to='/add-album' 
          className="flex items-center gap-2.5 text-white bg-[#242424] p-2 rounded-md hover:bg-[#333333] transition-all"
        >
          <img className='w-5' src={assets.add_album} alt="Add Album Icon" />
          <p className='hidden sm:block'>Add Album</p>
        </NavLink>
        {/* Add Song */}
        <NavLink 
          to='/add-song' 
          className="flex items-center gap-2.5 text-white bg-[#242424] p-2 rounded-md hover:bg-[#333333] transition-all"
        >
          <img className='w-5' src={assets.add_song} alt="Add Song Icon" />
          <p className='hidden sm:block'>Add Song</p>
        </NavLink>

        {/* List Albums */}
        <NavLink 
          to='/list-albums' 
          className="flex items-center gap-2.5 text-white bg-[#242424] p-2 rounded-md hover:bg-[#333333] transition-all"
        >
          <img className='w-5' src={assets.album_icon} alt="List Albums Icon" />
          <p className='hidden sm:block'>List Albums</p>
        </NavLink>
        {/* List Songs */}
        <NavLink 
          to='/list-songs' 
          className="flex items-center gap-2.5 text-white bg-[#242424] p-2 rounded-md hover:bg-[#333333] transition-all"
        >
          <img className='w-5' src={assets.song_icon} alt="List Songs Icon" />
          <p className='hidden sm:block'>List Songs</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
