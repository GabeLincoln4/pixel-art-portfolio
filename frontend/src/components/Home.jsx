import React, {useState} from 'react';
import PixelArtGallery from './PixelArtGallery.jsx';
import Navbar from './Navbar.jsx';
import Test from './Sidebar.jsx';

function Home(){

    return(
        <div>
            <Navbar  />
            <PixelArtGallery />
            {/* <Test /> */}

        </div>
    );
}

export default Home;