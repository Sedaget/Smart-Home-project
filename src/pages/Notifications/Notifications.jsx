import React, {useState} from 'react'
import './Notifications.css'
import { useTranslation } from 'react-i18next';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {id: 1, message:"New devices added", time:"today", read: false, type:"system"},
    {id: 2, message:"Motion detected", time:"today", read: false, type:"security"},
    {id: 3, message:"Internet disconnected", time:"today", read: true, type:"system"},
    {id: 4, message:"temperature is above 30°C", time:"today", read: true, type:"energy"}
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
            <div>
              <p>{n.message}</p>
              <span>{n.time}</span>
            </div>
            {!n.read &&(
              <button onClick={()=> markAsRead(n.id)}>Mark as read</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notifications