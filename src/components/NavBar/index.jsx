import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import './NavBar.css';
import { useState } from 'react';

export default function NavBAr() {
  const [itemCount, setAddItemCount] = useState(0);

  const handleAddAddWidget = () => {
    setAddItemCount(itemCount + 1);
  };

  const handleSubstractWidget = () => {
    setAddItemCount(() => {
      if (itemCount - 1 > 0) {
        return itemCount - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      <Navbar collapseOnSelect fixed='top' bg='dark' variant='dark'>
        <Container className='fondo'>
          <Navbar.Brand href='home'>Ecommerce Aoki</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='features'>Productos</Nav.Link>
              <Nav.Link href='cards'>Tarjetas de Debito</Nav.Link>
              <NavDropdown title='Cuenta' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='account/wallet'>
                  Wallet
                </NavDropdown.Item>
                <NavDropdown.Item href='account/purchases'>
                  Ultimas compras
                </NavDropdown.Item>
                <NavDropdown.Item href='account/security'>
                  Seguridad
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='account/addreses'>
                  Domicilios
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href='profile'>Mi perfil</Nav.Link>
              <Nav.Link eventKey={2}>
                <CartWidget updateText={itemCount} />
              </Nav.Link>
              <button onClick={handleAddAddWidget}>
                <i class='bi bi-cart-check-fill'></i>
              </button>
              <button onClick={handleSubstractWidget}>
                <i class='bi bi-cart-check-fill'></i>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
