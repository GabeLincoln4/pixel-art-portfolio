import React, {useState} from 'react';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from '@firebase/storage';
import {storage} from "../firebase.js";
import {useNavigate} from 'react-router-dom';
import Home from './Home.jsx';


function Admin(){

    const [character, setCharacter] = useState({
        name: '',
        description: ''
    });

    const [image, setImage] = useState("");
    const [imageTest, setImageTest] = useState("");

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

    function handleSubmit(){
        const navigate = useNavigate();
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
                        console.log(url);

                    });
            }
        )
        
        navigate('/');
    };

    return (<div>
        <h1>Admin Page</h1>
        <form >
            <h1>Name: </h1>
            <input onChange={handleChange} type="text" name="name" value={character.name} />
            <h1>Photo: </h1>
            <input onChange={handleImageChange} type="file" name="image" />
            <h1>Description: </h1>
            <textarea onChange={handleChange} name="description" type="text" rows="5" cols="25" value={character.description} />
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
        <img src={imageTest} />
    </div>);
}

export default Admin;