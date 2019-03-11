import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My username is {props.username} and I like {props.genre} video games.</p>
            <p>My username is {props.username} and I like {props.genre} video games.</p>
        </div>
    )
};

export default userOutput;