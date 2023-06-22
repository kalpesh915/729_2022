import React, { useState } from "react"

function HooksExample1(){
    let [count, setCount] = useState(0);

    // use Effect Hook
    React.useEffect(()=>{
        console.log("Use Effect Hook Called");
    });
    return <>
        <h1>Hooks Example</h1>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update Count</button>
    </>
}

export default HooksExample1;