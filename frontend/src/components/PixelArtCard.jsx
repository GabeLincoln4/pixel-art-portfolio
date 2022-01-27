import React from 'react';

function PixelArtCard(props){
    return (<div>
        <h1>Pixel Art Card</h1>
        <h1>{props.name}</h1>
        <img src={props.image} />
        <p>{props.description}</p>
    </div>);
}

export default PixelArtCard;