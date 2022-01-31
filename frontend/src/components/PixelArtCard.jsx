import React from 'react';

function PixelArtCard(props){

    let style;

    let newIndex = (props.index) + 1;

    if(newIndex == 0){
        style = "bg-white grid justify-items-center justify-self-start p-3 rounded-xl w-72";
    } else if (newIndex % 2 == 0){
        style = "bg-white grid justify-items-center justify-self-end p-3 rounded-xl w-72";
    } else {
        style = "bg-white grid justify-items-center justify-self-start p-3 rounded-xl w-72";
    }

    return (<div className={style} > 
        <h1 className="text-4xl">{props.name}</h1>
        <img className="mt-5 mb-2 h-64" src={props.image} />
        <p className="mb-3 text-xl">{props.description}</p>
        {console.log(style)}
    </div>);
}

export default PixelArtCard;