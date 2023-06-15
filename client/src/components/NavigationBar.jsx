import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai'

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const cart = useSelector(state => state.cart.content);

  return (
    <div>
      <Navbar expand={'md'} >
        <NavbarBrand href="/">Clothes Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to='/' >
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
                Example
              </NavLink>
            </NavItem>
          </Nav>
          <Button>
            <AiOutlineShoppingCart /> Cart 
            {
              cart && ` (${cart.length})`
            }
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;