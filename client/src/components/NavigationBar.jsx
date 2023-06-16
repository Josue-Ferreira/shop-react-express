import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reload } from '../features/cart/cartSlice';
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
import {BsPersonCircle} from 'react-icons/bs'
import Cart from '../features/cart/Cart';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [openCart, setOpenCart] = useState(false);
  const user = useSelector(state => state.user.profile);

  const cart = useSelector(state => state.cart.content);
  const dispatch = useDispatch();

  const getCartOnDB = async() => {
    const responseDB = await fetch('/cart/'+user.id);
    const responseJson = await responseDB.json();

    const clothesRawData = await fetch('https://fakestoreapi.com/products');
    const clothesJson = await clothesRawData.json();
    
    const cartOnDB = clothesJson.filter(product => responseJson[0].products_id.includes(product.id));
    dispatch(reload(cartOnDB));
  }

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
          {
            user 
            ? (
                <>
                <Button 
                  color='primary' 
                  style={{marginRight: "10px"}}
                  tag={Link}
                  to='/profile'
                  >
                  {`Hello ${user.first_name}`}
                </Button>
                <Button 
                  color='success' 
                  style={{marginRight: "10px"}}
                  onClick={getCartOnDB}
                  >
                  Get saved cart
                </Button>
                </>
            )
            : (
              <Button 
                  color='primary' 
                  style={{marginRight: "10px"}}
                  tag={Link}
                  to='/sign-in'
                  >
                  <BsPersonCircle style={{marginRight: '5px'}} />Sign In
              </Button>
            )
          }
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