import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './Cart.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import CartCard from './CartCard';

const Container = styled.div`
    height: 100vh; 
    width: 40vw; 
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
                style={{cursor: 'pointer', margin: '10px'}} 
                onClick={() => setOpen(false)} 
            />
            {
                cart && cart.map(product => (
                    <CartCard key={product.id} product={product} />
                ))
            }
        </Container>
    );
};

export default Cart;