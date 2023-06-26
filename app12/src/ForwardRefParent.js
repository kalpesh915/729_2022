import { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

function ForwardRefParent(){
    const fnameRef = useRef();

    function updateRef(){
        fnameRef.current.style.color = "Red";
    }

    return <>
        <h1>Forward Ref Parent Component</h1>
        <ForwardRefChild ref={fnameRef}></ForwardRefChild>
        <button onClick={()=>updateRef()}>Update</button>
    </>
}

export default ForwardRefParent;