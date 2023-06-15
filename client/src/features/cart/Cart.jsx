import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './Cart.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Container = styled.div`
    height: 100vh; 
    width: 20vw; 
    position: absolute; 
    z-index: 1; 
    top: 0;
    background-color: white;
`;

const Cart = ({open, setOpen}) => {
    const cart = useSelector(state => state.cart.content);

    return (
        <Container id='cart' className={open ? 'open-cart' : 'close-cart'}>
            <AiOutlineCloseCircle
                style={{cursor: 'pointer'}} 
                onClick={() => setOpen(false)} 
            />
            {
                // product && product.map()
            }
        </Container>
    );
};

export default Cart;