import React, {useState, useEffect} from 'react';
import PixelArtCard from './PixelArtCard.jsx';

function PixelArtGallery(){

    const [pixelCards, setPixelCards] = useState([{
        name: '',
        image: '',
        description: ''
    }]);

    useEffect(() => {
        fetch("/retrievepixelartcard").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setPixelCards(jsonRes))
    });

    return (<div>
        <div className="bg-blue-400 gap-5 grid grid-cols-1 p-5">
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