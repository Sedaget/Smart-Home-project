import React, {useState} from 'react'
import './Notifications.css'
import { useTranslation } from 'react-i18next';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {id: 1, message:"Newdevicesadded", time:"today", read: false, type:"system"},
    {id: 2, message:"motiondetected", time:"today", read: false, type:"security"},
    {id: 3, message:"internetdisconnected", time:"today", read: true, type:"system"},
    {id: 4, message:"temperatureabove30", time:"today", read: true, type:"energy"}
  ]);
  const markAsRead=(id)=>{
    setNotifications(prev=>
      prev.map(n=>n.id===id?{...n, read: true}: n)
    );
  };
  const addNotification = (message, type = "system") => {
  setNotifications(prev => [
    { id: Date.now(), message, time: "just now", read: false, type },
    ...prev
  ]);
};
const { t } = useTranslation();
  return (
    <div className='notifications-container'>
      <ul className='notification-list'>
        {notifications.map(n=>(
          <li key={n.id} className={`notification-item ${n.read? 'read':'unread'}`}>
            <div className='message'>
              <p>{t(n.message)}</p>
              <span>{t(n.time)}</span>
            </div>
            {!n.read &&(
              <button onClick={()=> markAsRead(n.id)} style={{fontFamily: "sans-serif", fontSize:"1.2rem"}}>{t('Read')}</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notifications