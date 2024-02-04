import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>PeopleApp</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={`./`}><Nav>Home</Nav></Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;