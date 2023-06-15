import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import styled from 'styled-components';
import {
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 50vw;
    margin: auto;
    justify-content: center;
`;

const ContainerSignUp = styled.div`
    border-top: solid lightgrey 2px;
    margin: 5vh 0;
    padding: 10px;
    text-align: center;
`;

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <NavigationBar />
            <Container>
                <FormGroup>
                    <Label for="exampleEmail">
                    Email
                    </Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                    Password
                    </Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button color='primary'>Sign In</Button>
                <ContainerSignUp>
                    Create an account
                </ContainerSignUp>
                <Button tag={Link} to='/sign-up' >
                    Sign Up
                </Button>
            </Container>
        </>
    );
};

export default Signin;