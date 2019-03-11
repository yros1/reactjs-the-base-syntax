import React from 'react';

const userInput = (props) => {
    return(
        <div>
            <p>User Name is {props.username}</p>
            <input type="text" 
                   onChange={props.changed}
                   value={props.username}/>
        </div>
    )
};

export default userInput;