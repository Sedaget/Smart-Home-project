import React from 'react'
import Image7 from '../../assets/images/pngegg 1.svg'

const SmartTVCard = () => {
  return (
    <div className='SmartTv'>
      <div className='basliq1'>
        <h1>Smart TV
Samsung, 32 Inch</h1>
<div className='on-off'></div>
      </div>
      <div className='TVimage'>
        <img src={Image7} alt="image" />
      </div>
    </div>
  )
}

export default SmartTVCard