import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-[250px] lg:h-full bg-[#121212] p-4 text-white">
      {/* Your Library Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>

        {/* Create Playlist Section */}
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col gap-2">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we will help you</p>
          <button className="px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        {/* Browse Podcasts Section */}
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col gap-2 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className="px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
