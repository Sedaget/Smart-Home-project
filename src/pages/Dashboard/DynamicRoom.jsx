import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './LivingRoom.css'; // Əgər dizayn ortaqdırsa
import BrightnessControl from '../../Components/widgets/BrightnessControl';
import { useTranslation } from 'react-i18next';

const DynamicRoom = () => {
     const { roomName } = useParams();
  const [devices, setDevices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newDevice, setNewDevice] = useState('');
  const { t } = useTranslation();

  const handleAddDevice = (e) => {
    e.preventDefault();
    if (!newDevice.trim()) return;
    setDevices(prev => [...prev, newDevice]);
    setNewDevice('');
    setShowModal(false);
  };

  const handleDeleteDevice = (index) => {
    setDevices(devices.filter((_, i) => i !== index));
  };
  return (
    <div className="living-room-container">


      <button className="add-widget" onClick={() => setShowModal(true)}>+ Add Device</button>

      <div className="right-panel">
        {devices.map((device, index) => (
          <div className="device" key={index}>
            {device}
            <button onClick={() => handleDeleteDevice(index)}>✕</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Add New Device</h3>
            <form onSubmit={handleAddDevice}>
              <input
                type="text"
                placeholder="Device name"
                value={newDevice}
                onChange={(e) => setNewDevice(e.target.value)}
              />
              <div className="modal-buttons">
                <button type="submit">Add</button>
                <button type="button" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default DynamicRoom