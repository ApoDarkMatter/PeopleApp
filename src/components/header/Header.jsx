import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { setSearchField, setSearchResult } from '../../reducers/peopleApp';
import { Link } from 'react-router-dom';

const Header = () => {

  const [searchInputValue, setSearchInputValue] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
      const timer = setTimeout(() => {
        dispatch(setSearchResult(searchInputValue))
        dispatch(setSearchField(searchInputValue))
      }, 250)
  
      return () => clearTimeout(timer)
    
  }, [searchInputValue])

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">PeopleApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={`./`}>Home</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              value={searchInputValue}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange= {(e) => setSearchInputValue(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;