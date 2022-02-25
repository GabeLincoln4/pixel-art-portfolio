import React, {useState} from 'react';
import Hamburger from '../svg/Hamburger.jsx';
import Test from './Test';
import Exit from '../svg/Exit.jsx';
import PixelArtGallery from './PixelArtGallery.jsx';
import Dimmer from './Dimmer.jsx';
import {useLinkedState} from "use-linked-state";
import {useStateGateway} from "use-linked-state";

function Navbar(stateGateway){

    const [isOpen, setIsOpen] = useLinkedState(stateGateway);
    

    function handleClick(){
        setIsOpen(!isOpen);
    }

    const sideMenuState = useStateGateway(isOpen);

    return(
        <div className="grid grid-cols-2 p-2 z-0">
            <h1 className="text-2xl">Gavin Art</h1>
            
            <button className="z-30" onClick={handleClick}>
                {isOpen ? <Exit /> : <Hamburger /> }
            </button>
            {isOpen && <Test stateGateway={sideMenuState} /> }
            
            
            

        </div>
    );
}

export default Navbar;