import React from 'react'
import './Contactus.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { } from '@iconify/react';
import { Icon } from '@iconify/react';

const Contactus = () => {
  return (
    <div className='contact'>
    
      <div className='lets'>
      <h1 className='cutitle'>Lets Talk</h1>
      <Form>
      <Row>
        <Col>
        <Form.Label>First Name</Form.Label>
          <Form.Control />
        </Col>
        <Col>
        <Form.Label>Last Name</Form.Label>
          <Form.Control />
        </Col>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone No" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <button className='cbtn'>Submit</button>
      </Row>
    </Form>
      </div>
      <div className='cdetails'>
    <p> <Icon icon="ic:outline-location-on" />&nbsp;&nbsp;coimbatore</p>
    <p><Icon icon="ic:baseline-mail-outline" />&nbsp;&nbsp;Zeittinfo@gmail.com</p>

    </div>
    </div>
  )
}

export default Contactus
