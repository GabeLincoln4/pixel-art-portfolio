import React, {useRef, useState} from 'react';
import stylesheet from '../stylesheet';
import {animated, useSpring} from 'react-spring';

function PixelArtCard(props){

    let style;
    const ref = useRef(null);

    const [xys, set] = useState([0, 0, 1]);

    const calc = (x, y, rect) => [
        -(y - rect.top - rect.height / 2) / 5,
        (x - rect.left - rect.width /2) / 5,
        1
    ];

    const animation = (e) => {
        const rect = ref.current.getBoundingClientRect();
        console.log(rect);
        set(calc(e.clientX, e.clientY, rect));
    };
    
    const trans = (x, y, s) => 
        `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const animationProps = useSpring({ xys });

    let newIndex = (props.index) + 1;

    if(newIndex === 0){
        style = stylesheet.start;
    } else if (newIndex % 2 === 0){
        style = stylesheet.end;
    } else {
        style = stylesheet.start;
    }

    return (<animated.div className={style} ref={ref} style={{transform: animationProps.xys.to(trans)}} onMouseMove={animation} onMouseLeave={() => set([0, 0, 1])} > 
        <h1 className="text-4xl">{props.name}</h1>
        <img className="mt-5 mb-2 h-64" src={props.image} />
        <p className="mb-3 text-xl">{props.description}</p>
    </animated.div>);
}



// 

//     




export default PixelArtCard;