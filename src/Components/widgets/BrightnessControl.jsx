import React, {useState} from 'react'
import './Brightness.css'

const BrightnessControl = () => {
  const [brightness, setBrightness] = useState(50);

  const handleChange = (e) => {
    setBrightness(e.target.value);
  };
  return (
    <div className="brightness-container">
      <h4>Brightness:</h4>
      <div className="brightness-value">{brightness}%</div>
      <input
        type="range"
        min="0"
        max="100"
        value={brightness}
        onChange={(e) => setBrightness(e.target.value)}
        className="brightness-slider"
      />
    </div>
  )
}

export default BrightnessControl