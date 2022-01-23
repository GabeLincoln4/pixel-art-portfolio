import React from 'react';
import PixelArtGallery from './PixelArtGallery.jsx';
import Navbar from './Navbar.jsx';

function Home(){
    return(
        <div>
            <Navbar />
            <PixelArtGallery />
        </div>
    );
}

export default Home;