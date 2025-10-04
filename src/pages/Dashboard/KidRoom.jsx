import React, { useState, useEffect } from 'react';
import Image1 from '../../assets/images/Group 36.svg';
import Image2 from '../../assets/images/Wifi Signal.svg';
import BrightnessControl from '../../Components/widgets/BrightnessControl';
import AirConditionerCard from '../../Components/widgets/AirConditionerCard';
import CameraWidget from '../../Components/widgets/CameraWidget';
import Image6 from '../../assets/images/Rectangle 7.svg';
import SmartTVCard from '../../Components/devices/SmartTVCard';
import './LivingRoom.css'
import LightCard from '../../Components/devices/LightCard';
import AC from '../../Components/devices/AC';
import SpeakerCard from '../../Components/devices/SpeakerCard';
import { useTranslation } from 'react-i18next';

const KidRoom = () => {
    const [showModal, setShowModal] = useState(false);
    const [newDevice, setNewDevice] = useState('');
    const [devices, setDevices] = useState([]);
    const { t } = useTranslation();

    const handleAddDevice = (e) => {
        e.preventDefault();
        if (!newDevice.trim()) return;
        setDevices(prev => [...prev, newDevice]);
        setNewDevice('');
        setShowModal(false);
    };

    const handleLightOff = () => {
        // işığı söndürmək üçün lojiq...
        addNotification("Kid Room: Lights turned off", "energy");
    };

    return (
        < >
            <div className="left-panel" >
                <div className="weather-box"><img src={Image1} alt="image" /></div>
                <div className="brightness-box"><BrightnessControl /></div>
                <div className="internet-box"><img src={Image2} alt="wifi" /><h1>Internet speed: 70 MB/s <p>5 device connected </p></h1></div>
                <div className="ac-box">
                    <AirConditionerCard />
                </div>
                <div className="camera-box" style={{ backgroundImage: `url(${Image6})` }}>
                    <CameraWidget />
                </div>
            </div>

            <div className="right-panel" >
                <div className='device2'><LightCard /></div>
                <div className='device3'><AC /></div>
                <div className='device4'><SpeakerCard /></div>
                
                {devices.map((device, i) => (
                    <div key={i} className="added-device">{device}</div>
                ))}
                <button className="add-device" onClick={() => setShowModal(true)}>+ Add Device</button>
            </div>
            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal">
                        <h3>Add New Device</h3>
                        <form onSubmit={handleAddDevice}>
                            <input type="text"
                                placeholder="Enter device name"
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
        </>
    );
};
export default KidRoom