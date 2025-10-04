import React from 'react'
import Image10 from '../../assets/images/pngwing 2.svg'
const SpeakerCard = () => {
  return (
    <div className='speaker'>
            <div className='basliq4'>
                <h1>Speaker
Amazon  Echo</h1>
                <div className='on-off'></div>
            </div>
            <div className='speakerimage' >
                <img  src={Image10} alt="image" />
            </div>
        </div>
  )
}

export default SpeakerCard