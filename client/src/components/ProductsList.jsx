import React from 'react';
import ProductCard from './ProductCard';
import {
    Container,
    Row,
    Col
} from 'reactstrap'

const ProductsList = () => {
    return (
        <Container>
            <Row xs="4">
                <Col >
                    <ProductCard />
                </Col>
                <Col >
                    <ProductCard />
                </Col>
                <Col >
                    <ProductCard />
                </Col>
                <Col >
                    <ProductCard />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductsList;