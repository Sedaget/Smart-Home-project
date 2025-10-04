import React, { useState } from 'react'
import CircularSlider from '@fseehawer/react-circular-slider';


const TemperatureCircle = () => {
    const [temperature, setTemperature] = useState(16);
    return (
        <div >
            <CircularSlider
                label="°C"
                min={10}
                max={40}
                dataIndex={temperature - 10} // Sliderə başlanğıc dəyəri ötürülür
                knobColor="#00bfff"
                progressColorFrom="#00bfff"
                progressColorTo="#00bfff"
                progressSize={15}
                trackColor="#ddd"
                trackSize={20}
                onChange={value => setTemperature(value)}
                width={150}
                arcStart={100}
                arcLength={140}
                valueFontSize="2.5rem"
                labelColor="#cbcacaff"
                labelFontSize="1.5rem"
            />
            
        </div>
    )
}

export default TemperatureCircle