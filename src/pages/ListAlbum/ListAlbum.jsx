import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../App';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa'; 

const ListAlbum = () => {

  const [data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setData(response.data.albums);
      }

    } catch (error) {
      toast.error("Error occurred");
    }
  };

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbums();
      }

    } catch (error) {
      toast.error("Error occurred");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <p className='text-white'>All Albums List</p>
      <br />
      <div className=''>
        {/* Table headers */}
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100 ">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Colour</b>
          <b>Action</b>
        </div>

        {/* Album List */}
        {data.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 text-white'>
              {/* Image */}
              <img className='w-12' src={item.image} alt={item.name} />

              {/* Name */}
              <p>{item.name}</p>

              {/* Description - Visible only on larger screens */}
              <p className="hidden sm:block">{item.desc}</p>

              {/* Album Colour */}
              <input type="color" value={item.bgColour} className="hidden sm:block" />

              {/* Action (Trash Icon on small screens) */}
              <p className='cursor-pointer' onClick={() => removeAlbum(item._id)}>
                {/* Show trash bin icon on small screens */}
                <span className="sm:hidden text-xl">
                  <FaTrash  />
                </span>
                {/* Show "Remove" text on larger screens */}
                <span className="hidden sm:block">
                  Remove
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAlbum;
