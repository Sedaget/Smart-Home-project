import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'; 
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const [rooms,setRooms] = useState([
    {name: 'LivingRoom', path: 'livingroom'},
    {name: 'BedRoom', path: 'bedroom'},
    {name: 'Kitchen', path: 'kitchen'},
    {name: 'KidRoom', path: 'kidroom'}
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newRoom, setNewRoom] =useState('');
  const { t } = useTranslation();
  const handleAddRoom = () => {
    if (!newRoom.trim()) return;
    const path = newRoom.toLowerCase().replace(/\s+/g, '');
    setRooms(prev => [...prev, { name: newRoom, path }]);
    setNewRoom('');
    setShowModal(false);
  };
  return (
    <div className="dashboard">
      {/* Room seçim navbarı */}
      <div className="room-navbar" >
          {rooms.map((room, index) => (
          <NavLink key={index} to={`/${room.path}`} className={({ isActive }) =>
        isActive ? 'room-tab active-room' : 'room-tab'
      }>
            {t(room.name)}
          </NavLink>
        ))}
        {/* Button əmr kimi işləyir */}
        <button className="room-tab" style={{ background: "rgba(255, 255, 255, 0.2)" }} onClick={() => setShowModal(true)}>+</button>
      </div>

      {/* Aktiv otağın kontenti burada görünür */}
      <div className="room-content">
        <Outlet />
        </div>
        {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>{t('AddNewRoom')}</h3>
            <input
              type="text"
              placeholder={t('Enterroomname')}
              value={newRoom}
              onChange={(e) => setNewRoom(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleAddRoom}>Add</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;