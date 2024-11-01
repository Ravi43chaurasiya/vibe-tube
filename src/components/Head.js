import React from 'react'
import { ham_menu_icon, search_icon, user_icon, youtube_icon } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch=useDispatch();
  const handleHamClick=()=>{
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-cols-3 items-center p-4 bg-gray-100 shadow-md'>
    {/* Left Section: Menu and YouTube Icons */}
    <div className='flex items-center space-x-3'>
      <img onClick={handleHamClick} className='w-8 cursor-pointer' src={ham_menu_icon} alt='Menu' />
      <img className='w-14 cursor-pointer' src={youtube_icon} alt='YouTube' />
    </div>
  
    {/* Center Section: Search Form */}
    <form className='flex justify-center'>
      <input
        className='w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-l-3xl focus:outline-none focus:border-blue-500'
        type='text'
        placeholder='Search'
      />
      <button className='bg-gray-400 text-white px-4 py-2 rounded-r-3xl hover:bg-blue-600 focus:outline-none'>
        <img className='w-5 h-6' src={search_icon} alt='Search' />
      </button>
    </form>
  
    {/* Right Section: User Icon */}
    <div className='flex justify-end'>
      <img className='w-10 h-10 rounded-full border border-gray-300 cursor-pointer' src={user_icon} alt='User' />
    </div>
  </div>
  
  )
}

export default Head