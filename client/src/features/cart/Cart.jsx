import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import './Cart.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import CartCard from './CartCard';
import { Button } from 'reactstrap';
import { removeAll } from './cartSlice';

const Container = styled.div`
    height: 100vh; 
    width: 40vw; 
    position: absolute; 
    z-index: 1; 
    top: 0;
    background-color: white;
`;

const Cart = ({open, setOpen}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.content);

    const totalPrice = () => {
        let total = 0;
        cart.forEach(element => {
            total += element.price;
        });
        return total;
    }

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
            <h3>{`Price : ${totalPrice()}`}</h3>
            <Button color='danger' onClick={() => dispatch(removeAll())} >
                Delete Cart
            </Button>
        </Container>
    );
};

export default Cart;