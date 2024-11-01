import React from 'react'
import SideBarExpand from './SideBarExpand'
import { useSelector } from 'react-redux'
import SideBarContracted from './SideBarContracted'

const Sidebar = () => {
  const sideBar=useSelector(store=>store.app.isMenuOpen)
  return (
    <div className=''>
      {sideBar?<SideBarExpand></SideBarExpand>:<SideBarContracted></SideBarContracted>}
      
    </div>
  )
}

export default Sidebar