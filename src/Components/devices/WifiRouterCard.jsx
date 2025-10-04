import React, { useState } from 'react';
import './WifiRouterCard.css'
import Image10 from '../../assets/images/Wifi Signal.svg';

const WifiRouterCard = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleRouter = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div className='Router'>
      <div className='basliq1'>
        <h1>
          Wifi Router <br />
          212 kwh Usage
        </h1>
        <div className='switchinput'>
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={toggleRouter} />
          <span className="slider"></span>
        </label>
        <span className="status-text">{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>

      <div className='Routerimage'>
        <img
          src={Image10}
          style={{ width: '150px', height: '150px', opacity: isOn ? 1 : 0.3 }}
          alt="image"
        />
      </div>
    </div>
  );
};

export default WifiRouterCard;