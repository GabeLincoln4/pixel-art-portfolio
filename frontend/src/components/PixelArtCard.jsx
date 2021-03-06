import React from 'react';
import stylesheet from '../stylesheet';

function PixelArtCard(props){

    let style;

    let newIndex = (props.index) + 1;

    if(newIndex === 0){
        style = stylesheet.start;
    } else if (newIndex % 2 === 0){
        style = stylesheet.end;
    } else {
        style = stylesheet.start;
    }

    return (<div className={style} > 
        <h1 className="text-4xl">{props.name}</h1>
        <img className="mt-5 mb-2 h-64" src={props.image} />
        <p className="mb-3 text-xl">{props.description}</p>
    </div>);
}

export default PixelArtCard;