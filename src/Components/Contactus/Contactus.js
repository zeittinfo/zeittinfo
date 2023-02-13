import React from 'react'
import { useState } from 'react';
import './Contactus.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { } from '@iconify/react';
import { Icon } from '@iconify/react';
import axios from 'axios';

const Contactus = () => {

const[firstname,setFirstname] = useState('');
const[lastname,setLastname] = useState('');
const[email,setEmail] = useState('');
const[phone,setPhone] = useState('');
const[message,setMessage] = useState('');

const handleSubmit = (e)=>{
  e.preventDefault();

  const data={
    Firstname:firstname,
    Lastname:lastname,
    Email:email,
    Phone:phone,
    Message : message
  }
  axios.post('https://sheetdb.io/api/v1/xrcr49dxpn8tn',data).then((response)=>{})
  console.log(data);
  setFirstname('');
  setLastname('');
  setEmail('');
  setPhone('');
  setMessage('');
}

return (
    
    <div className='contact'>
    
      <div className='lets'>
      <h1 className='cutitle'>Lets Talk</h1>
      <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label>First Name</Form.Label>
          <Form.Control  onChange = {(e)=>setFirstname(e.target.value)} value = {firstname}/>
        </Col>
        <Col>
        <Form.Label>Last Name</Form.Label>
          <Form.Control onChange = {(e)=>setLastname(e.target.value)} value = {lastname} />
        </Col>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        onChange = {(e)=>setEmail(e.target.value)} value = {email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="tel" placeholder="Enter Phone No"
        onChange = {(e)=>setPhone(e.target.value)} value = {phone} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" 
        onChange = {(e)=>setMessage(e.target.value)} value = {message}/>
      </Form.Group>
      <button className='cbtn' on>Submit</button>
      </Row>
    </Form>
      </div>
      <div className='cdetails'>
    <p className='cdetail1'> <Icon icon="ic:outline-location-on" />&nbsp;&nbsp;39, Divine Residency<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cheran Maanagar<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coimbatore- 641035</p>

    <p className='cdetail2'> <Icon icon="ic:baseline-phone-in-talk" />&nbsp;&nbsp;+91 6369838301</p>
    <p><Icon icon="ic:baseline-mail-outline" />&nbsp;&nbsp;Zeittinfo@gmail.com</p>

    </div>
    </div>
  )
}

export default Contactus
