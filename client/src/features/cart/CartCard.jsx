import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import {MdOutlineDelete} from 'react-icons/md'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid lightgrey 2px;
    border-radius: 5px;
    margin: 10px;
`;

const Image = styled.img`
    max-width: 50px;
`;

const CartCard = ({product}) => {
    return (
        <Container>
            <Image src={product.image} />
            <div>{product.title}</div>
            <div>{product.price}€</div>
            <Button color='danger' style={{}}>
                <MdOutlineDelete />
            </Button>
        </Container>
    );
};

export default CartCard;