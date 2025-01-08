import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

  return track ? (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 py-2 flex-wrap sm:flex-nowrap">
      {/* Left Section: Song Details (Hidden on Small Screens) */}
      <div className="hidden sm:flex items-center gap-4">
        <img className="w-12 h-12 object-cover rounded-full" src={track.image} alt={track.name} />
        <div>
          <p className="text-sm sm:text-base font-semibold">{track.name}</p>
          <p className="text-xs sm:text-sm text-gray-400">{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Center Section: Player Controls */}
      <div className="flex flex-col items-center gap-1 mx-auto w-full sm:w-auto">
        <div className="flex gap-4 justify-center">
          <img className="w-5 sm:w-6 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img onClick={previous} className="w-5 sm:w-6 cursor-pointer" src={assets.prev_icon} alt="Previous" />
          {playStatus ? (
            <img onClick={pause} className="w-5 sm:w-6 cursor-pointer" src={assets.pause_icon} alt="Pause" />
          ) : (
            <img onClick={play} className="w-5 sm:w-6 cursor-pointer" src={assets.play_icon} alt="Play" />
          )}
          <img onClick={next} className="w-5 sm:w-6 cursor-pointer" src={assets.next_icon} alt="Next" />
          <img className="w-5 sm:w-6 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Time & Seek Bar */}
        <div className="flex items-center gap-3 sm:gap-5 w-full mt-2">
          <p className="text-xs sm:text-sm">{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-full sm:w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p className="text-xs sm:text-sm">{track.duration}</p>
        </div>
      </div>

      {/* Right Section: Extra Controls (Hidden on Small Screens) */}
      <div className="hidden sm:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="Plays" />
        <img className="w-4" src={assets.mic_icon} alt="Mic" />
        <img className="w-4" src={assets.queue_icon} alt="Queue" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker" />
        <img className="w-4" src={assets.volume_icon} alt="Volume" />
        <div className="w-16 sm:w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="Mini Player" />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  ) : null;
};

export default Player;
