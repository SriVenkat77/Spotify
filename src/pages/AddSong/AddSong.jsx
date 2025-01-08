import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { url } from '../../App'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddSong = () => {

  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("audio", song);
      formData.append("album", album);
      const response = await axios.post(`${url}/api/song/add`, formData);
      if (response.data.success) {
        toast.success("Song Added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        toast.error("Something went wrong");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Error occurred");
      setLoading(false);
    }
  }

  const loadAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      setAlbumData(response.data.albums);
    } catch (error) {
      console.error("Error loading album data", error);
    }
  }

  useEffect(() => {
    loadAlbumData();
  }, [])

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center gap-8 text-gray-600 px-4 sm:px-12'>

      <div className='flex flex-wrap gap-8 justify-center w-full'>
        <div className="flex flex-col gap-4 text-white w-full sm:w-auto">
          <p>Upload song</p>
          <input onChange={(e) => setSong(e.target.files[0])} type="file" id='song' accept='audio/*' hidden />
          <label htmlFor="song">
            <img className='w-24 cursor-pointer' src={song ? assets.upload_added : assets.upload_song} alt="" />
          </label>
        </div>
        <div className="flex flex-col gap-4 text-white w-full sm:w-auto">
          <p>Upload Image</p>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
          <label htmlFor="image">
            <img className='w-24 cursor-pointer' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 text-white w-full sm:w-[40vw]">
        <p>Song name</p>
        <input className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-full sm:w-auto' onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Type here' required />
      </div>

      <div className="flex flex-col gap-2.5 text-white w-full sm:w-[40vw]">
        <p>Song description</p>
        <input className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-full sm:w-auto' onChange={(e) => setDesc(e.target.value)} value={desc} type="text" placeholder='Type here' required />
      </div>

      <div className="flex flex-col gap-2.5 text-white w-full sm:w-[40vw]">
        <p>Album</p>
        <select className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-full sm:w-auto text-black' onChange={(e) => setAlbum(e.target.value)} defaultValue={album}>
          <option value="none">None</option>
          {albumData.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))}
        </select>
      </div>

      <button className='text-base bg-black text-white py-2.5 px-14 cursor-pointer w-full sm:w-auto' type='submit'>ADD</button>
    </form>
  )
}

export default AddSong
