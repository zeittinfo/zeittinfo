import React from 'react'
import './Industries.css'

const Industries = () => {
  return (
    <div>
        <h1 className='ihead'> Industries We Work </h1>
      <div className='indust'>
        <div>
        <img src='edu.png' alt='edu.png' className='iimg'/>
        <h4>Education</h4>
        </div>

        <div>
        <img src='tour.png' alt='tour.png' className='iimg'/>
        <h4>Tourisim</h4>
        </div>

        <div>
        <img src='logi.png' alt='tour.png' className='iimg'/>
        <h4>Logistics</h4>
        </div>
      </div>
      <div className='indust2'>

        <div>
        <img src='health.png' alt='tour.png' className='iimg'/>
        <h4>Health Care</h4>
        </div>

        <div>
        <img src='auto.png' alt='tour.png' className='iimg'/>
        <h4>Automotive</h4>
        </div>

        <div>
        <img src='ecom.png' alt='tour.png' className='iimg'/>
        <h4>Ecommerce</h4>
        </div>
        </div>
    </div>
  )
}

export default Industries
