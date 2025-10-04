import React, {useState} from 'react'
import './WifiRouterCard.css'
import Image10 from '../../assets/images/pngwing 2.svg'

const SpeakerCard = () => {
  const [isOn, setIsOn] = useState(true);
  
    const toggleRouter = () => {
      setIsOn(prev => !prev);
    };
  return (
    <div className='speaker'>
            <div className='basliq1'>
                <h1>Speaker
Amazon  Echo</h1>
                 <div className='switchinput'>
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={toggleRouter} />
          <span className="slider"></span>
        </label>
        <span className="status-text">{isOn ? "ON" : "OFF"}</span>
        </div>
            </div>
            <div className='speakerimage' >
                <img  src={Image10} alt="image" />
            </div>
        </div>
  )
}

export default SpeakerCard