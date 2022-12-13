import React from 'react'
import './Servicies.css'
import Card from 'react-bootstrap/Card';
const Servicies = () => {
  return (

    <div>
        <h1 className='stitle'> Servicies</h1>
        <div className='main'>
             <Card className='card1'>
      <Card.Img variant="top" src="mobile.png" />
      <Card.Body>
        <Card.Title>MOBILE APPLICATION</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card className='card2'>
      <Card.Img variant="top" src="web.png" />
      <Card.Body>
        <Card.Title>WEB APPLICATION</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='card3'>
      <Card.Img variant="top" src="ss.jpg" />
      <Card.Body>
        <Card.Title>SOFTWARE SOLUTIONS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    
    </div>
  )
}

export default Servicies
