import React, {useState, useEffect} from 'react';

function Contact(){

    const[input, setInput] = useState({
        name: "",
        message: "",
        email: ""
    });

    const[profilePic, setProfilePic] = useState("");

    

    function handleChange(e){
        const{name, value} = e.target;

        setInput(prevInputs => {
            return {
                ...prevInputs,
                [name]: value
            }
        })
    };

    return(
        <div>
            <h1>Contact</h1>
            <img src="" alt="Gabriel" />
            <form action="">
                <input name="name" value={input.name} onChange={handleChange} type="text" placeholder="Name" />
                <input name="message" value={input.message} onChange={handleChange} type="text" placeholder="Message" />
                <input name="email" value={input.email} onChange={handleChange} type="text" placeholder="email"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Contact;