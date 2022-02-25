import React, {useState} from 'react';
import PixelArtGallery from './PixelArtGallery.jsx';
import Navbar from './Navbar.jsx';
import Test from './Test.jsx';
import {useStateGateway} from 'use-linked-state';




function Home(props){

    const sideMenuState = useStateGateway(false);

    return(
        <div>
            <Navbar stateGateway={sideMenuState} />
            <PixelArtGallery />
            {/* <Test /> */}

        </div>
    );
}

export default Home;