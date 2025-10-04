import React from 'react'
import { CiSearch } from "react-icons/ci";
import './Navbar.css'
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import SideBar from './SideBar';

const Navbar = ({ toggleSidebar }) => {
  const { t } = useTranslation();
  
  return (
    <nav className='navbar'>
      <div className="left">
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
        <h1>{t('welcome')}</h1>
    </div>
    <div className="searchbox">
      <CiSearch className="icon" />
      <input type="text" className="search" placeholder={t("Search")}></input>
    </div>
    <div className="right">
      <p>10:00 AM Sunday, <br />13 sept 2025</p>
    </div>

    </nav>
  )
}

export default Navbar