import React from 'react'
import Image10 from '../../assets/images/router.jpg'
const WifiRouterCard = () => {
  return (
    <div className='Router'>
          <div className='basliq5'>
            <h1>Wifi Router
212 kwh Usage</h1>
    <div className='on-off'></div>
          </div>
          <div className='Routerimage'>
            <img src={Image10} style={{width:'150px', height: '150px'}} alt="image" />
          </div>
        </div>
  )
}

export default WifiRouterCard