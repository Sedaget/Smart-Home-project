import React, { useState } from 'react';
import './AirConditioner.css';
import Image3 from '../../assets/images/Group 21.svg';
import Image4 from '../../assets/images/Group 22.svg';
import Image5 from '../../assets/images/Group 23.svg';
import TemperatureCircle from './TemperatureCircle';

const AirConditionerCard = () => {
    const [mode, setMode] = useState('cooling');
    const [fanSpeed, setFanSpeed] = useState(2);
   
    return (
        <>
        <div className='right-container'>
            <h3>Air Conditioner</h3>
            
                <div>
                  <TemperatureCircle/>
                  </div>
                <div className="fan-speed">
                    <div className="fan-values">
                        <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                    </div>
                    <input type="range"
                        min="0"
                        max="4"
                        value={fanSpeed}
                        onChange={(e) => setFanSpeed(e.target.value)}
                    />
                    <label>Fan Speed</label>
                </div>
            </div>

            <div className="mode-buttons">
                <button className={mode === 'cooling' ? 'active' : ''} onClick={() => setMode('cooling')}><img src={Image3} alt="image" /> <p>Cold</p> </button>
                <button className={mode === 'heat' ? 'active' : ''} onClick={() => setMode('heat')}> <img src={Image4} alt="image" /> <p>Heat</p></button>
                <button className={mode === 'dry' ? 'active' : ''} onClick={() => setMode('dry')}> <img src={Image5} alt="image" /> <p>Dry</p></button>
            </div>


        </>
    );
};

export default AirConditionerCard
