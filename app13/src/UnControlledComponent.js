import { useRef } from "react";

function UnControlledComponent(){
    const fnameRef = useRef("Jigar");

    function printer(){
        alert("Welcome "+fnameRef.current.value);
    }
    return <>
        
        <h1>Un Controlled Component </h1>
        <input type="text" name="fname" id="fname" placeholder="Enter First Name" ref={fnameRef} onBlur={()=>printer()}></input>

    </>
}

export default UnControlledComponent;