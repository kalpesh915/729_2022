import { useEffect, useState } from "react";

function HooksExample(){

    let [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Use Effect Called");
    })

    return <>
        <h1>Hooks Example</h1>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update</button>
    </>
}

export default HooksExample;