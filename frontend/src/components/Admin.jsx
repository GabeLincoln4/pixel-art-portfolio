import React, {useState} from 'react';

function Admin(){

    const [character, setCharacter] = useState({
        name: '',
        description: ''
    });

    function handleChange(e){
        const {name, value} = e.target;

        setCharacter(prevCharacters => {
            return {
                ...prevCharacters,
                [name]: value
            }
        })
    };

    return (<div>
        <h1>Admin Page</h1>
        <form>
            <h1>Name: </h1>
            <input onChange={handleChange} type="text" name="name" value={character.name} />
            <h1>Photo: </h1>
            <input type="file" />
            <h1>Description: </h1>
            <textarea onChange={handleChange} name="description" type="text" rows="5" cols="25" value={character.description} />
        </form>
    </div>);
}

export default Admin;