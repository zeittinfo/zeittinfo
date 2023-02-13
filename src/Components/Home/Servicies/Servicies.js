import React from 'react'
import './Servicies.css'
import Card from 'react-bootstrap/Card';
const Servicies = () => {
  return (

    <div>
        <h1 className='stitle'> Services</h1>
        <div className='main'>
             <Card className='card1'>
      <Card.Img variant="top" src= {require("../../../images/mobile.png")} />
      <Card.Body>
        <Card.Title>MOBILE APPLICATION</Card.Title>
        <Card.Text>
        We build mobile application for efficient management of different business activities.
        We apply smart automation to streamline workflows and integrate corporate systems together for coherent operation.
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card className='card2'>
      <Card.Img variant="top" src={require("../../../images/web.png")}/>
      <Card.Body>
        <Card.Title>WEB APPLICATION</Card.Title>
        <Card.Text>
        We take a proactive approach to web development and elaborate on ways to uncover less obvious business requirements, save costs and envisage risks for your project.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='card3'>
      <Card.Img variant="top" src={require("../../../images/ss.jpg")} />
      <Card.Body>
        <Card.Title>SOFTWARE SOLUTIONS</Card.Title>
        <Card.Text>
        We provide customers with software solutions to assist them in resolving a variety of issues or enhancing their business procedures. 
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    
    </div>
  )
}

export default Servicies
