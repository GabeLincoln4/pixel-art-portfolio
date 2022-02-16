import React from 'react';
import Exit from '../svg/Exit.jsx';
import 'animate.css';
import {useLinkedState} from "use-linked-state";


function Test(stateGateway){

    const [sideMenu, setSideMenu] = useLinkedState(stateGateway);

    const animatedEntrance = "animate__animated  animate__slideInRight absolute bg-blue-700 h-screen top-0 right-0 rounded-xl shadow-2xl w-1/2 z-20";
    const animatedExit = "animate__animated  animate__slideOutRight absolute bg-blue-700 h-screen top-0 right-0 rounded-xl shadow-2xl w-1/2 z-20"

    return (
        
        <div className={sideMenu ? animatedEntrance : animatedExit }>
            <button>
                <h1>Navbar</h1>
            </button>
            
        </div>
        
    );
}

export default Test;