import React, {useState} from 'react';
import Hamburger from '../svg/Hamburger.jsx';
import Test from './Test';
import Exit from '../svg/Exit.jsx';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    return(
        <div className="grid grid-cols-2 p-2 z-0">
            <h1 className="text-2xl">Gavin Art</h1>
            
            <button onClick={handleClick}>
                {isOpen ? <Exit /> : <Hamburger /> }
            </button>
            {isOpen && <Test />}

        </div>
    );
}

export default Navbar;