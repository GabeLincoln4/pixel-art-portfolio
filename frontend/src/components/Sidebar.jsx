import React from 'react';
import Exit from '../svg/Exit.jsx';
import 'animate.css';



function Sidebar(props){

    const listStyle = "m-4";

    return (
        
        <div className={props.style}>
            <ul className="grid grid-cols-1 h-full justify-items-center place-content-center text-5xl text-white">
                <li className={listStyle}>Gallery</li>
                <li className={listStyle}>About</li>
                <li className={listStyle}>Contact</li>
            </ul>
        </div>
        
    );
}

export default Sidebar;