import React from 'react'
import { useState } from 'react'
import './DeviceManager.css'

const DeviceManager = () => {
    const [showForm, setShowForm] = useState(false);
    const [deviceName, setDeviceName] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [devices, setDevices] = useState([]);

    const handleAddDevice = (e) => {
        e.preventDefault();
        if (!deviceName || !deviceType) return;
        setDevices(prev => [...prev, { deviceName, deviceType }]);
        setDeviceName('');
        setDeviceType('');
        setShowForm(false);
    };

    const handleDeleteDevice = (index) => {
        setDevices(prev => prev.filter((_, i) => i !== index));
    };
    return (
        <div className="device-manager">
            <button className="add-widget" onClick={() => setShowForm(!showForm)}>
                + Add Widget
            </button>

            {showForm && (<div className="add-device-modal">
                <h3>Add New Device</h3>
                <form onSubmit={handleAddDevice}>
                    <input
                        type="text"
                        placeholder="Device Name"
                        value={deviceName}
                        onChange={(e) => setDeviceName(e.target.value)}
                    />
                    <select
                        value={deviceType}
                        onChange={(e) => setDeviceType(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        <option>Light</option>
                        <option>TV</option>
                        <option>Speaker</option>
                        <option>Camera</option>
                    </select>
                    <button type="submit">Add</button>
                </form>
                <button onClick={() => setShowForm(false)}>Close</button>
            </div>
            )}

            <div className="device-list">
                {devices.map((device, index) => (
                    <div className="device" key={index}>
                        <strong>{device.deviceType}</strong> - {device.deviceName}
                        <button onClick={() => handleDeleteDevice(index)}>Sil</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeviceManager