import React from 'react';
import Test from './Test.jsx';

function Dimmer(){
    return (
        <div className="bg-red-500 h-full z-10">
            <Test />  
        </div>
    );
}

export default Dimmer;