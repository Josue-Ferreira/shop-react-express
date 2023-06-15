import React, {useEffect} from 'react';
import NavigationBar from '../components/NavigationBar';
import ProductsList from '../components/ProductsList';

const Home = () => {
    return (
        <>
            <NavigationBar />
            <ProductsList />
        </>
    );
};

export default Home;