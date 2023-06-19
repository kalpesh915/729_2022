import { useState } from "react";

function Input2(){
    let [fname, setFname] = useState("");
    return <>
        <input type="text" placeholder="Enter your name" onKeyUp={(e)=>setFname(e.target.value)}></input>
        <hr></hr>
        Welcome {fname}
    </>
}
export default Input2;