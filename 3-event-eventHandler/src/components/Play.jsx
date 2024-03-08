import { useState } from "react";
import { PropTypes } from "prop-types";

export default function Play({children, onPlay2,onPause2}){
    let [status,setStatus]=useState(false);
    
    function handleClick(event){
        // This stops Event Bubbling
        event.stopPropagation();

        status?onPause2():onPlay2();
        setStatus(!status);
    }
    
    return(
        <>
        <button onClick={handleClick}>
            {children} {status?"⏸️":"▶️"}
        </button>
        </>
    )
}

Play.propTypes={
    onPlay2:PropTypes.func,
    onPause2:PropTypes.func,
    children:PropTypes.node
}

