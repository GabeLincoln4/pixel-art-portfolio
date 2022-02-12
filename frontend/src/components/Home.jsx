import React, {useState} from 'react';
import PixelArtGallery from './PixelArtGallery.jsx';
import Navbar from './Navbar.jsx';


function Home(props){

    return(
        <div>
            <Navbar />
            <PixelArtGallery />

        </div>
    );
}

export default Home;