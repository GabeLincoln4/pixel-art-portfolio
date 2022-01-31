import React, {useState, useEffect} from 'react';
import PixelArtCard from './PixelArtCard.jsx';

function creatPixelCard(props){
    return <PixelArtCard 
        key = {props.name}
        name = {props.name}
        image = {props.image}
        description = {props.description}
    />
}


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
        <div className="bg-blue-400 gap-5 grid grid-cols-1 justify-items-center p-5">
            {pixelCards.map(creatPixelCard)}
        </div>
    </div>);
}

export default PixelArtGallery;