import React from 'react';
import { useNavigate } from 'react-router-dom';

function PixelCardChoice(){

    let navigate = useNavigate();

    function handleYes(){
        navigate("/admin");
    }

    function handleNo(){
        navigate("/");
    }

    return (<div>
        <h1>PixelCardChoice</h1>
        <div>
            <h2>Would you like to create another pixel card?</h2>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
        </div>
    </div>);
}

export default PixelCardChoice;