import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex bg-black'>
      <Sidebar></Sidebar>
      <MainContainer></MainContainer>
    </div>
  )
}

export default Body