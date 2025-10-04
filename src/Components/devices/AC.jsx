import React, {useState} from 'react'
import './WifiRouterCard.css'
import Image9 from '../../assets/images/conditioner2.jpg'

const AC = () => {
  const [isOn, setIsOn] = useState(true);
      
        const toggleRouter = () => {
          setIsOn(prev => !prev);
        };
  return (
    <div className='AC' style={{width:"230px", height:"220px"}}>
        <div className='basliq1'>
            <h1 style={{paddingRight:"40px"}}>AC LG  16 C </h1>
            <div className='switchinput'>
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={toggleRouter} />
          <span className="slider"></span>
        </label>
        <span className="status-text">{isOn ? "ON" : "OFF"}</span>
        </div>
        </div>
        <div className='acimage'style={{marginTop:"40px", marginRight:'30px'}}>
            <img style={{width:"150px", height:"50px"}} src={Image9} alt="image" />
        </div>
    </div>
  )
}

export default AC