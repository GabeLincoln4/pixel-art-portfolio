import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from '@firebase/storage';
import {storage} from "../firebase.js";
import {useNavigate} from 'react-router-dom';
import Home from './Home.jsx';


function Admin(){

    let navigate = useNavigate();

    const [character, setCharacter] = useState({
        name: '',
        description: ''
    });

    const [urlHook, setUrlHook] = useState("");

    const [image, setImage] = useState("");

    useEffect(() => {

        if (image == "") return;

        const storageRef = ref(storage, `/images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                        setUrlHook(url);
                    })
            }
        );

        setImage("");
    })

    function handleChange(e){
        const {name, value} = e.target;

        setCharacter(prevCharacters => {
            return {
                ...prevCharacters,
                [name]: value
            }
        })

    };

    const handleImageChange = (e) => {
        
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }

        
    };

    // function handleClick(){

        

        
    // };

   

    function handleSubmit(){

        const newPixelCard = {
            name: character.name,
            image: urlHook,
            description: character.description
        };

        axios.post("http://localhost:5000/createpixelartcard", newPixelCard);

        navigate("/admin/pixelcardchoice");
    };

   

    return (<div>
        <h1 className="text-3xl">Admin Page</h1>
        <form onSubmit={handleSubmit} >
            <h1>Name: </h1>
            <input onChange={handleChange} type="text" name="name" value={character.name} />
            <h1>Photo: </h1>
            <input onChange={handleImageChange} type="file" name="image" />
            <h1>Description: </h1>
            <textarea onChange={handleChange} name="description" type="text" rows="5" cols="25" value={character.description} />
            <button>Submit</button>
        </form>
     
    </div>);
}

export default Admin;