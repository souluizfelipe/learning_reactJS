import React,{ useState } from "react";
import './App.css';

function Tweet({name, message}) {
    
    const [likes, setLikes] = useState(0);
    
    const likeCounter = () => {
        setLikes(likes + 1);
    };

    return(
        <div className='tweet'>
            <h3>{name}</h3>
            <p>{message}</p>
            <button onClick={likeCounter}>Like</button>
            <h3>{likes}</h3>
        </div>
    )
}

export default Tweet