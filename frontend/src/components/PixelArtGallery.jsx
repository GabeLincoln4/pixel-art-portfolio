import React, {useState, useEffect, useRef} from 'react';
import PixelArtCard from './PixelArtCard.jsx';
import {animated, useSpring} from 'react-spring';

function PixelArtGallery(props){

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

   const ref = useRef(null);
    
    const bright = "bg-blue-400 gap-5 grid grid-cols-1 p-5";
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
                    reference={ref}
                    animation = {(e) => {
                        const rect = ref.current.getBoundingClientRect();
                        console.log(rect);
                        set(calc(e.clientX, e.clientY, rect));
                    }} 
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