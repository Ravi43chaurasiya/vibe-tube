import React from 'react';
import { FaHome, FaHistory, FaMusic, FaFilm, FaShoppingBag, FaGamepad, FaRegHeart, FaFire, FaPlay, FaBook, FaCog, FaFlag, FaQuestionCircle, FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBarExpand = () => {
  return (
    <div className='text-white w-60'>
      {/* Home Section */}
      <div className='bg-black py-3 px-4 border-b border-gray-700'>
        
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          
          <FaHome />
          <h3><Link to="/">Home</Link></h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaFire />
          <h3>Shorts</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaPlay />
          <h3>Subscription</h3>
        </div>
      </div>

      {/* Library Section */}
      <div className='bg-black py-3 px-4 border-b border-gray-700'>
        <h2 className='mb-2 font-semibold'>Library</h2>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaHistory />
          <h3>History</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaPlay />
          <h3>Playlists</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaRegHeart />
          <h3>Liked videos</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaBook />
          <h3>Your clips</h3>
        </div>
      </div>

      {/* Explore Section */}
      <div className='bg-black py-3 px-4 border-b border-gray-700'>
        <h2 className='mb-2 font-semibold'>Explore</h2>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaFire />
          <h3>Trending</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaShoppingBag />
          <h3>Shopping</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaMusic />
          <h3>Music</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaFilm />
          <h3>Movies</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaGamepad />
          <h3>Gaming</h3>
        </div>
      </div>

      {/* More from YouTube Section */}
      <div className='bg-black py-3 px-4 border-b border-gray-700'>
        <h2 className='mb-2 font-semibold'>More from YouTube</h2>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaPlay />
          <h3>YouTube Premium</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaPlay />
          <h3>YouTube Studio</h3>
        </div>
      </div>

      {/* Settings Section */}
      <div className='bg-black py-3 px-4 border-b border-gray-700'>
        <h2 className='mb-2 font-semibold'>Settings</h2>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaCog />
          <h3>Settings</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaFlag />
          <h3>Report history</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaQuestionCircle />
          <h3>Help</h3>
        </div>
        <div className='flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer'>
          <FaCommentDots />
          <h3>Send feedback</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBarExpand;
