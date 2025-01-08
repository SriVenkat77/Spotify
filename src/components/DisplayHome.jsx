import React, { useState, useRef } from 'react';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import Footer from './Footer';

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);
  const [activeButton, setActiveButton] = useState('all'); // 'all', 'music', 'podcasts'
  const albumContainerRef = useRef(null);
  const songContainerRef = useRef(null);

  const scrollAlbums = (direction) => {
    const container = albumContainerRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollSongs = (direction) => {
    const container = songContainerRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const renderContent = () => {
    if (activeButton === 'all') {
      return (
        <>
          <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='relative group'>
              <button
                onClick={() => scrollAlbums('left')}
                className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                &lt;
              </button>
              <div
                className="flex flex-col sm:flex-row overflow-auto"
                ref={albumContainerRef}
              >
                {albumsData.map((item, index) => (
                  <AlbumItem
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    id={item._id}
                    image={item.image}
                    className="w-full sm:w-1/5"
                  />
                ))}
              </div>
              <button
                onClick={() => scrollAlbums('right')}
                className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
            <div className='relative group'>
              <button
                onClick={() => scrollSongs('left')}
                className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                &lt;
              </button>
              <div
                className="flex flex-col sm:flex-row overflow-auto"
                ref={songContainerRef}
              >
                {songsData.map((item, index) => (
                  <SongItem
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    id={item._id}
                    image={item.image}
                    className="w-full sm:w-1/5"
                  />
                ))}
              </div>
              <button
                onClick={() => scrollSongs('right')}
                className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                &gt;
              </button>
            </div>
          </div>
        </>
      );
    }

    if (activeButton === 'music') {
      return (
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
          <div className='relative group'>
            <button
              onClick={() => scrollSongs('left')}
              className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              &lt;
            </button>
            <div
              className="flex flex-col sm:flex-row overflow-auto"
              ref={songContainerRef}
            >
              {songsData.map((item, index) => (
                <SongItem
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  id={item._id}
                  image={item.image}
                  className="w-full sm:w-1/5"
                />
              ))}
            </div>
            <button
              onClick={() => scrollSongs('right')}
              className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              &gt;
            </button>
          </div>
        </div>
      );
    }

    if (activeButton === 'podcasts') {
      return (
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
          <div className='relative group'>
            <button
              onClick={() => scrollAlbums('left')}
              className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              &lt;
            </button>
            <div
              className="flex flex-col sm:flex-row overflow-auto"
              ref={albumContainerRef}
            >
              {albumsData.map((item, index) => (
                <AlbumItem
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  id={item._id}
                  image={item.image}
                  className="w-full sm:w-1/5"
                />
              ))}
            </div>
            <button
              onClick={() => scrollAlbums('right')}
              className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              &gt;
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen">
      <div className="flex items-center gap-2 mt-4">
        <p
          onClick={() => setActiveButton('all')}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            activeButton === 'all' ? 'bg-white text-black' : 'bg-black text-white'
          }`}
        >
          All
        </p>
        <p
          onClick={() => setActiveButton('music')}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            activeButton === 'music' ? 'bg-white text-black' : 'bg-black text-white'
          }`}
        >
          Music
        </p>
        <p
          onClick={() => setActiveButton('podcasts')}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            activeButton === 'podcasts' ? 'bg-white text-black' : 'bg-black text-white'
          }`}
        >
          Podcasts
        </p>
      </div>

   
      {renderContent()}

      <Footer />
    </div>
  );
};

export default DisplayHome;
