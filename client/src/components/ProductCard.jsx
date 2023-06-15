import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import styled from 'styled-components'

const Image = styled.img`
    max-width: 100px;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

const ProductCard = ({product}) => {
    return (
        <Card style={{height: '25rem', margin: '10px'}}>
            <ImageContainer>
                <Image
                    alt="clothe"
                    src={product.image}
                />
            </ImageContainer>
            <CardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <CardTitle tag="h5">
                        {product.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        >
                        {product.category}
                    </CardSubtitle>
                </div>
                <Button color="success">
                    Add to cart
                </Button>
            </CardBody>
        </Card>
    );
};

export default ProductCard;