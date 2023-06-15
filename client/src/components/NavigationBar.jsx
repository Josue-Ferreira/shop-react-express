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
import Cart from '../features/cart/Cart';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [openCart, setOpenCart] = useState(false);

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
          <Button 
            color='primary' 
            style={{marginRight: "10px"}}
            tag={Link}
            to='/sign-in'
            >
            Sign In
          </Button>
          <Button onClick={() => cart && setOpenCart(true)} >
            <AiOutlineShoppingCart /> Cart 
            {
              cart && ` (${cart.length})`
            }
          </Button>
        </Collapse>
      </Navbar>
      {
        cart && (<Cart open={openCart} setOpen={setOpenCart} />)
      }
    </div>
  );
}

export default NavigationBar;