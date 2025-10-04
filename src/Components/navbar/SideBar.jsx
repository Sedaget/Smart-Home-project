import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { SiGoogleanalytics } from "react-icons/si"
import { IoNotifications, IoSettingsSharp } from "react-icons/io5"
import './SideBar.css'

function SideBar({ closeSidebar }) {
  return (
    <div className="sidebar-overlay" onClick={closeSidebar}>
   <div className="nav sidebar-content" onClick={e => e.stopPropagation()}>
      <NavLink to="/" className={({ isActive }) => isActive ? "icon-link active" : "icon-link"}>
        <FaHome className='navicon' />
      </NavLink>
      <NavLink to="/analytics" className={({ isActive }) => isActive ? "icon-link active" : "icon-link"}>
        <SiGoogleanalytics className='navicon' /> 
      </NavLink>
      <NavLink to="/notifications" className={({ isActive }) => isActive ? "icon-link active" : "icon-link"}>
        <IoNotifications className='navicon' /> 
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? "icon-link active" : "icon-link"}>
        <IoSettingsSharp className='navicon' /> 
      </NavLink>
    </div>
    </div>
  )
}

export default SideBar