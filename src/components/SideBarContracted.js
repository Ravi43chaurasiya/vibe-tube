import React from 'react';
import { FaHome, FaFire, FaPlay, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBarContracted = () => {
  return (
    <div className='bg-black text-white w-20 flex flex-col items-center py-4 space-y-6 h-full'>
      {/* Home Icon with Tooltip */}
      <div className='relative group'>
        <div className='flex flex-col items-center cursor-pointer hover:text-gray-400'>
          <Link to="/"><FaHome size={24} /></Link>
          
        </div>
        <span className="absolute left-12 -top-1.5 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Home
        </span>
      </div>

      {/* Shorts Icon with Tooltip */}
      <div className='relative group'>
        <div className='flex flex-col items-center cursor-pointer hover:text-gray-400'>
          <FaFire size={24} />
        </div>
        <span className="absolute left-12 -top-1.5 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Shorts
        </span>
      </div>

      {/* Subscriptions Icon with Tooltip */}
      <div className='relative group'>
        <div className='flex flex-col items-center cursor-pointer hover:text-gray-400'>
          <FaPlay size={24} />
        </div>
        <span className="absolute left-12 -top-1.5 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Subscriptions
        </span>
      </div>

      {/* User Icon with Tooltip */}
      <div className='relative group'>
        <div className='flex flex-col items-center cursor-pointer hover:text-gray-400'>
          <FaUserCircle size={24} />
        </div>
        <span className="absolute left-12 -top-1.5 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          You
        </span>
      </div>
    </div>
  );
};

export default SideBarContracted;
