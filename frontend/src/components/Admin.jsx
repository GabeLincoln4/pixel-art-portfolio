import React, {useState} from 'react';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from '@firebase/storage';
import {storage} from "../firebase.js";


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

    function handleImageClick(){
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
    };

    return (<div>
        <h1>Admin Page</h1>
        <form>
            <h1>Name: </h1>
            <input onChange={handleChange} type="text" name="name" value={character.name} />
            <h1>Photo: </h1>
            <input onChange={handleImageChange} type="file" name="image" />
            <button onClick={handleImageClick}>Submit Photo</button>
            <h1>Description: </h1>
            <textarea onChange={handleChange} name="description" type="text" rows="5" cols="25" value={character.description} />
        </form>

        <img src={imageTest} />
    </div>);
}

export default Admin;