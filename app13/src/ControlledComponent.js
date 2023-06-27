import { useState } from "react";

function ControlledComponent(){
    let [fname, setFname] = useState("Jigar");
    return <>
        <h1>Controlled Component</h1>
        <input type="type" id="fname" name="fname" placeholder="Enter First Name" defaultValue={fname} onChange={(event)=>setFname(event.target.value)}></input>
        <h1>Welcome {fname}</h1>
    </>
}

export default ControlledComponent;