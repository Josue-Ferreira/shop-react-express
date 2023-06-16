import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: auto;
`;

const Title = styled.h2`
    text-align: center;
`;

const Profile = () => {
    const user = useSelector(state => state.user.profile);

    return (
        <>
            <NavigationBar />
            <Container>
                <Title>MY PROFILE</Title>
                <div>FirstName : {user.first_name}</div>
                <div>LastName : {user.last_name}</div>
                <div>Email : {user.email}</div>
            </Container>
        </>
    );
};

export default Profile;