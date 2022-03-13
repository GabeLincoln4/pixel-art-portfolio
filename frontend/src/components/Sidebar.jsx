import React from 'react';
import Exit from '../svg/Exit.jsx';
import 'animate.css';

function Sidebar(props){

    const listStyle = "m-4 hover:text-black";

    return (
        
        <div className={props.style}>
            <ul className="grid grid-cols-1 h-full justify-items-center place-content-center text-5xl text-white">
                <a className={listStyle} href="">Gallery</a>
                <a className={listStyle}>About</a>
                <a className={listStyle}>Contact</a>
            </ul>
        </div>
        
    );
}

export default Sidebar;