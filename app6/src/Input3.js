import { useState } from "react";

function Input3(){
    let [fname, setFname] = useState("Ronak Gokani");
    return <>
        <input type="text" placeholder="Enter your name" onKeyUp={(e)=>setFname(e.target.value)} defaultValue={fname}></input>
        <hr></hr>
        Welcome {fname}
    </>
}
export default Input3;