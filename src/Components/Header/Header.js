import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Zeitt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='topleft'>
          <Nav.Link href="#Home">
            <Link to='car'spy={true} smooth={true} offset={-100} duration={300}>Home</Link></Nav.Link>
            <Nav.Link href="#About">
            <Link to='atitle'spy={true} smooth={true} offset={-100} duration={300}> About</Link>
            </Nav.Link>
            <Nav.Link href="#Servicies">
              <Link to='stitle'spy={true} smooth={true} offset={-100} duration={300}>Servicies</Link>
            </Nav.Link>
            <Nav.Link href="#contactus">
              <Link to ='cutitle'spy={true} smooth={true} offset={-200} duration={300}>Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
