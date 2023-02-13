import React from 'react'
import './Caro.css'
import {Link} from 'react-scroll'


const Caro = () => {
  return (
    <div className='car'>
      <div className='car1'>
      <p className='con'>
        <h1>Grow your business with <br/>world class technology</h1>
        <p> </p>
      Zeit help you to automate your business process in a cost- compressed fashion <br/>without compromising a commitment to best practices.<br/>
      We helps to create all types of web-based software and ensure great experience for web users.
     </p>
     <img className='carimg'src={require("../../../images/dev.webp")} alt =''/>
      </div>
      <button className='carbtn'><Link to ='cutitle'spy={true} smooth={true} offset={-200} duration={300}>Contact Us ➙</Link></button>
    </div>
  )
}

export default Caro
