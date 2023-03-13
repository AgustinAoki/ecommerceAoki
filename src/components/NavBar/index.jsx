import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect fixed='top' bg='dark' variant='dark'>
        <Container className='fondo'>
          <Navbar.Brand href='/'>Mercado Pokemon</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>Pokemones</Nav.Link>
              <NavDropdown title='Tipos' id='collasible-nav-dropdown'>
                <NavDropdown.Item>
                  <NavLink to={'/type/plant'}>Planta</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={'/type/fire'}>Fuego</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={'/type/water'}>Agua</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={'/type/electric'}>Electricos</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={'/type/legend'}>Legendarios</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href='profile'>Mi perfil</Nav.Link>
              <Nav.Link eventKey={2}>
                <CartWidget updateText={0} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
