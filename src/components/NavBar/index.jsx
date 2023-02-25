import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import './NavBar.css';

export default function NavBAr() {
  return (
    <div>
      <Navbar collapseOnSelect fixed='top' bg='dark' variant='dark'>
        <Container className='fondo'>
          <Navbar.Brand href='#home'>Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features'>Productos</Nav.Link>
              <Nav.Link href='#cards'>Tarjetas de Debito</Nav.Link>
              <NavDropdown title='Cuenta' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#account/wallet'>
                  Wallet
                </NavDropdown.Item>
                <NavDropdown.Item href='#account/purchases'>
                  Ultimas compras
                </NavDropdown.Item>
                <NavDropdown.Item href='#account/security'>
                  Seguridad
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#account/addreses'>
                  Domicilios
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href='#profile'>Mi perfil</Nav.Link>
              <Nav.Link eventKey={2} href='#cart'>
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
