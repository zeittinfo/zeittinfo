import React from 'react'
import './Industries.css'

const Industries = () => {
  return (
    <div>
        <h1 className='ihead'> Industries We Work </h1>
      <div className='indust'>
        <div>
        <img src={require("../../../images/edu.png")}alt='edu.png' className='iimg'/>
        <h4>Education</h4>
        </div>

        <div>
        <img src={require("../../../images/tour.png")} alt='tour.png' className='iimg'/>
        <h4>Tourisim</h4>
        </div>

        <div>
        <img src={require("../../../images/logi.png")} alt='tour.png' className='iimg'/>
        <h4>Logistics</h4>
        </div>
      </div>
      <div className='indust2'>

        <div>
        <img src={require("../../../images/health.png")} alt='tour.png' className='iimg'/>
        <h4>Health Care</h4>
        </div>

        <div>
        <img src={require("../../../images/auto.png")} alt='tour.png' className='iimg'/>
        <h4>Automotive</h4>
        </div>

        <div>
        <img src={require("../../../images/ecom.png")} alt='tour.png' className='iimg'/>
        <h4>Ecommerce</h4>
        </div>
        </div>
    </div>
  )
}

export default Industries
