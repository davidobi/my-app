import React from "react";


const CardEvent = () => { 
    const clicker = () => {
        console.log ('Say Hello')
        alert("you clicked")
    }

    const keyDown = () => {
        alert("You pressed the down key button")
    };

    return (
        <div>
            <h2 onClick={clicker}>Hello</h2>
            <input type="text" onKeyDown={keyDown} />
        </div>
    )
}
export default CardEvent;