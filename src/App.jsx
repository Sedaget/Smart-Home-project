import './App.css'
import { Outlet, NavLink } from 'react-router-dom'
import Navbar from './Components/navbar/Navbar'
import bgImage from './assets/images/1.png'
import { FaHome } from "react-icons/fa"
import { SiGoogleanalytics } from "react-icons/si"
import { IoNotifications } from "react-icons/io5"
import { IoSettingsSharp } from "react-icons/io5"
import './i18n/i18n.js';
import SideBar from './Components/navbar/SideBar'
import { useState, useEffect } from 'react'

function App() {
   const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

   const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='App'
      style={{
         minHeight: `${windowHeight}px`,
        backgroundImage: `url(${bgImage})`,
        
      }}>
           {sidebarOpen && (
        <div className="mobile-sidebar-overlay" onClick={() => setSidebarOpen(false)}>
          <div className="mobile-sidebar" onClick={e => e.stopPropagation()}>
            <SideBar />
          </div>
        </div>
      )}
      <div className='container'>
        <nav className='sidebar' > 
        <SideBar />
        </nav>
        <div className='main'>
           <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <div className='center'>
            <Outlet /> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;