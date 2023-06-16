import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Button
} from 'reactstrap';
import styled from 'styled-components';

const Title = styled.h2`
    text-align: center;
    margin: 20px;
`;

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <NavigationBar />
            <Form
                style={{
                    width: '50vw',
                    margin: 'auto'}}

                onSubmit={handleSubmit}
            >
                <Title>Create an account</Title>
                <FormGroup >
                    <Label for="firstname">
                    Firstname
                    </Label>
                    <Input
                    id="firstname"
                    name="firstname"
                    placeholder="with a placeholder"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">
                    Lastname
                    </Label>
                    <Input
                    id="lastname"
                    name="lastname"
                    placeholder="with a placeholder"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    />
                </FormGroup>
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
                <Button type='submit' color='primary' >
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Signup;