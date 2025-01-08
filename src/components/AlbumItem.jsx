import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-200"
    >
      <div className="relative">
        <img className="rounded-lg w-full h-auto" src={image} alt={name} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-2 rounded-b-lg">
          <p className="font-bold text-white">{name}</p>
        </div>
      </div>
      <p className="text-slate-200 text-sm mt-1 hidden lg:block">{desc}</p>
    </div>
  );
};

export default AlbumItem;
