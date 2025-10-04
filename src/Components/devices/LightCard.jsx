import React, {useState} from 'react'
import './WifiRouterCard.css'
import Image8 from '../../assets/images/light.svg'

const LightCard = () => {
  const [isOn, setIsOn] = useState(true);
      
        const toggleRouter = () => {
          setIsOn(prev => !prev);
        };
  return (
    <div className='Light'>
          <div className='basliq1'>
            <h1>Light, 5 lights</h1>
    <div className='switchinput'>
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={toggleRouter} />
          <span className="slider"></span>
        </label>
        <span className="status-text">{isOn ? "ON" : "OFF"}</span>
        </div>
          </div>
          <div className='Lightimage'>
            <img src={Image8} alt="image" />
          </div>
        </div>
  )
}

export default LightCard