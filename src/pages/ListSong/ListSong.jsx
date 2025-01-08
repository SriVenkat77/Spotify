import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../App';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa'; // Importing the trash icon

const ListSong = () => {
  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);

      console.log(response);

      if (response.data.success) {
        setData(response.data.songs);
      }
    } catch (error) {
      toast.error('Error occurred');
    }
  };

  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, { id });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchSongs();
      }
    } catch (error) {
      toast.error('Error occurred');
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <p className='text-white'>All Songs List</p>
      <br />
      <div>
        {/* Header for Large Screens */}
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>

        {/* Song List */}
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 text-white'
            >
              {/* Image */}
              <img className='w-12' src={item.image} alt="" />
              
              {/* Name */}
              <p>{item.name}</p>
              
              {/* Album */}
              <p>{item.album}</p>

              {/* Duration - Only shown on larger screens */}
              <p className='sm:block hidden'>{item.duration}</p>

              {/* Action - Remove button */}
              <p className='cursor-pointer' onClick={() => removeSong(item._id)}>
                {/* Trash Icon for small screens */}
                <span className="sm:hidden ">
                  <FaTrash />
                </span>
                {/* Remove Text for larger screens */}
                <span className="sm:block hidden">Remove</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSong;
