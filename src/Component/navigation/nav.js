import React from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import '../../StylesComponent/navigation.css';
import logo from '../../static/logo.png';


const Navigation = () => {
    return(
        <Navbar className='navbar' variant="light">
        <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{''}
          <span>arcerem</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
      <Nav.Link href="#" className='link'>Info portal</Nav.Link>
      <Nav.Link href="#/lawyer_register" className='link'>Institution</Nav.Link>
      <Nav.Link href="#/cases" className='link'>Cases</Nav.Link>
      <Nav.Link href="#/login" className='link'>Login</Nav.Link>
      <Nav.Link href="#/register" className='link'><Button className='login-btn'>Register</Button></Nav.Link>
    </Nav>
        </Container>

      </Navbar>
    )
}

export default Navigation;