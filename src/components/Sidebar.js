import React from 'react'
import SideBarExpand from './SideBarExpand'
import { useSelector } from 'react-redux'
import SideBarContracted from './SideBarContracted'

const Sidebar = () => {
  const sideBar=useSelector(store=>store.app)
  return (
    <div className=''>
      {sideBar.isMenuOpen?<SideBarExpand></SideBarExpand>:<SideBarContracted></SideBarContracted>}
      
      
    
    </div>
  )
}

export default Sidebar