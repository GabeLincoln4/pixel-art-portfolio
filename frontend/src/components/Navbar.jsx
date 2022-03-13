import React, {useState, useEffect, useRef} from 'react';
import Hamburger from '../svg/Hamburger.jsx';
import Sidebar from './Sidebar.jsx';
import Exit from '../svg/Exit.jsx';
import PixelArtGallery from './PixelArtGallery.jsx';
import Dimmer from './Dimmer.jsx';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const animatedEntrance = "animate__animated  animate__slideInRight absolute bg-blue-700 h-screen top-0 right-0 rounded-xl shadow-2xl w-80 z-20";
    const animatedExit = "animate__animated  animate__fadeOut absolute bg-blue-700 h-screen top-0 right-0 rounded-xl shadow-2xl w-80 z-0";
    const prevBar = useRef(false);
    const renderCount = useRef(1);

    // function handleClick(){
    //     setIsOpen(!isOpen);
    // }

    useEffect(() => {
        
        renderCount.current = renderCount.current + 1;
        prevBar.current = isOpen;

    },[isOpen])
    

    return(
        <div className="grid grid-cols-2 p-2 z-0">
            <h1 className="text-2xl">Gavin Art</h1>
            <button className="z-30" onClick={() => setIsOpen(!isOpen)}>
                {<Exit />}
            </button>
            
            {renderCount.current >= 2 && <div>{isOpen ? <Sidebar style={animatedEntrance} /> : <Sidebar style={animatedExit} />}</div>}
        </div>
    );
}

export default Navbar;