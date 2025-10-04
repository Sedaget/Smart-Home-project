import React from 'react'
import Image9 from '../../assets/images/conditioner2.jpg'

const AC = () => {
  return (
    <div className='AC' style={{width:"230px", height:"220px"}}>
        <div className='basliq3'>
            <h1>AC LG  16 C </h1>
            <div className='on-off'></div>
        </div>
        <div className='acimage'>
            <img style={{width:"150px", height:"50px"}} src={Image9} alt="image" />
        </div>
    </div>
  )
}

export default AC