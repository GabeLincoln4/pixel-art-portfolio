import React, {useState, useEffect} from 'react';
import PixelArtCard from './PixelArtCard.jsx';

function PixelArtGallery(props){

    const [pixelCards, setPixelCards] = useState([{
        name: '',
        image: '',
        description: ''
    }]);

   
    
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