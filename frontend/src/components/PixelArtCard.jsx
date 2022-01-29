import React from 'react';

function PixelArtCard(props){
    return (<div className="bg-white grid justify-items-center rounded-xl"> 
        <h1 className="mb-5 text-5xl">{props.name}</h1>
        <img className="mb-3" src={props.image} />
        <p className="mb-3 text-xl">{props.description}</p>
    </div>);
}

export default PixelArtCard;