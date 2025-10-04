import React, {useState} from 'react'
import './WifiRouterCard.css'
import Image7 from '../../assets/images/pngegg 1.svg'

const SmartTVCard = () => {
  const [isOn, setIsOn] = useState(true);
    
      const toggleRouter = () => {
        setIsOn(prev => !prev);
      };
  return (
    <div className='SmartTv'>
      <div className='basliq1'>
        <h1>Smart TV
Samsung, 32 Inch</h1>
<div className='switchinput'>
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={toggleRouter} />
          <span className="slider"></span>
        </label>
        <span className="status-text">{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
      <div className='TVimage'>
        <img src={Image7} alt="image" />
      </div>
    </div>
  )
}

export default SmartTVCard