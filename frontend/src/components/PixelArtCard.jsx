import React from 'react';

function PixelArtCard(props){
    return (<div className="bg-white grid justify-items-center p-3 rounded-xl w-72"> 
        <h1 className="text-4xl">{props.name}</h1>
        <img className="mt-5 mb-2 h-64" src={props.image} />
        <p className="mb-3 text-xl">{props.description}</p>
    </div>);
}

export default PixelArtCard;