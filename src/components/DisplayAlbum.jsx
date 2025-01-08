import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams(); // Get the album ID from the URL
  const { albumsData, songsData, playWithId } = useContext(PlayerContext);
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    // Find the album from the albumsData based on the id
    const album = albumsData.find((item) => item._id === id);
    if (album) {
      setAlbumData(album);
    }
  }, [id, albumsData]);

  if (!albumData) return null; // Ensure albumData is loaded

  return (
    <>
      {/* Album Content */}
      <div className="mt-10 flex gap-8 flex-col lg:flex-row lg:items-center">
        <img className="w-48 rounded-lg shadow-md" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col mt-4 lg:mt-0">
          <p className="text-lg text-[#a7a7a7]">Playlist</p>
          <h2 className="text-3xl font-bold mb-4 md:text-5xl lg:text-6xl">{albumData.name}</h2>
          <h4 className="text-[#a7a7a7]">{albumData.desc}</h4>
          <p className="mt-4 text-sm md:text-base">
            <img className="inline-block w-5 mr-2" src={assets.spotify_logo} alt="Spotify Logo" />
            <b>Spotify</b> • 1,323,154 likes • <b>50 songs</b>, about 2 hr 30 min
          </p>
        </div>
      </div>

      {/* Song list header */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7] text-sm md:text-base">
        <p><b className="mr-4">#</b>Title</p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock Icon" />
      </div>
      <hr />

      {/* Display songs */}
      {songsData.filter((item) => item.album === albumData.name).map((item, index) => (
        <div
          onClick={() => playWithId(item._id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt={item.name} />
            {item.name}
          </p>
          <p className="text-[15px] hidden sm:block">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
