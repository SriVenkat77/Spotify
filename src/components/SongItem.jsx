import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all ease-in-out duration-200"
    >
      <div className="relative">
        {/* Song Image */}
        <img
          className="w-full h-[180px] object-cover rounded-lg"
          src={image}
          alt={name}
        />
      
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg" />
      </div>
      <p className="font-bold mt-2 mb-1 text-sm md:text-base lg:text-lg">{name}</p>
      <p className="text-slate-200 text-xs md:text-sm lg:text-base">{desc}</p>
    </div>
  );
};

export default SongItem;
