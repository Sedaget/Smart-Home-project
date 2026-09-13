import React, { useState } from 'react'
import './Analytics.css'
import EnergyLineChart from './EnergyLineChart';
import DevicesBarChart from './DevicesBarChart';
import RoomSelector from './RoomSelector'
import RoomEnergyChart from './RoomEnergyChart';

const Analytics = () => {
  const [roomData, setRoomData] = useState([]);

  return (
    <div className='analytics-container'>
      <h2>Sistem Analitikası</h2>
      <div className="charts-section">
        <div className="chart-box">
          <h3>Günlük Enerji İstifadəsi</h3>
          <EnergyLineChart />
        </div>
        <div className="chart-box">
          <h3>Otaqlara görə Cihazlar</h3>
          <DevicesBarChart />
        </div>
      </div>
      <div className='roomselector'>
        <div className='left-side'>
    <div className='selection'>
      <p>Enerji sərfiyyatına baxmaq üçün otaq seçin: </p>
      <RoomSelector onRoomDataFetched={setRoomData} />
    </div>
    {roomData.length > 0 && (
      <div className="room-stats" style={{ color: 'black', padding: '10px', width:'300px' }}>
        <h3>Seçilmiş Otaqların Statistikası:</h3>
        {roomData.map(room => (
          <div key={room.id} className="stat-card" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', fontFamily:"sans-serif",fontSize:"1.2rem", color:"white" }}>
            <h4>{room.name}</h4>
            <p>Enerji: {room.energy} kWh</p>
            <p>Cihaz sayı: {room.devices}</p>
            <p>İnternet istifadəsi: {room.internet}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  {roomData.length > 0 && (
    <div className="chart-box">
      <h3>Enerji Sərfiyyatı Qrafiki</h3>
      <RoomEnergyChart data={roomData} />
    </div>
  )}
        </div>
        
    </div>
  );
};

export default Analytics;

