import React, {useState, useEffect, useRef} from 'react';
import PixelArtCard from './PixelArtCard.jsx';
import {animated, useSpring} from 'react-spring';

function PixelArtGallery(){

    const [pixelCards, setPixelCards] = useState([{
        name: '',
        image: '',
        description: ''
    }]);

    

    const [xys, set] = useState([0, 0, 1]);

    const calc = (x, y, rect) => [
        -(y - rect.top - rect.height / 2) / 5,
        (x - rect.left - rect.width /2) / 5,
        1.4
    ];

    const props = useSpring({ xys });

    const trans = (x, y, s) => 
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

   const ref = useRef(null);
    
    const bright = "bg-blue-400 gap-5 grid grid-cols-1 py-5 px-8 z-20";
    const dimmer = "bg-blue-400 brightness-50 gap-5 grid grid-cols-1 p-5"

    useEffect(() => {
        fetch("/retrievepixelartcard").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setPixelCards(jsonRes));

       
    });

    return (<div>
        <div className={bright}>
            {pixelCards.map((card, index) => { 

                return <PixelArtCard 
                    key = {card.name}
                    index = {index}
                    name = {card.name}
                    image = {card.image}
                    description = {card.description}
                />
            })}
        </div>
    </div>);
}

export default PixelArtGallery;