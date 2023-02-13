import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='brandlogo'>
        <Link to='car'spy={true} smooth={true} offset={-100} duration={300}><button className='hbtn'>Zeitt</button></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='topleft'>
            <Nav.Link href="#About">
            <Link to='atitle'spy={true} smooth={true} offset={-100} duration={300}><button className='hbtn'>About</button></Link>
            </Nav.Link>
            <Nav.Link href="#Servicies">
              <Link to='stitle'spy={true} smooth={true} offset={-100} duration={300}><button className='hbtn'>Services</button></Link>
            </Nav.Link>
           <Nav.Link href="#our product">
           <button className='hbtn'>Our Product</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
