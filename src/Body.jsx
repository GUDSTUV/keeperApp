import React from "react";

function Body(props) {
    return (
        <div className="mainText">
            <div className="text">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
            
        </div>
    )
}

export default Body;