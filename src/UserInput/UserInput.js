import React from 'react';

const userInput = (props) => {
    return(
        <div>
            {/* <input type="text" onChange={props.changed} value={props.name} ></input> */}
            <input type="text" onChange={props.changed}></input>
        </div>
    )
};

export default userInput;