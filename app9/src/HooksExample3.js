import React, { useEffect, useState } from "react"

function HooksExample3(){
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    // use Effect Hook
    React.useEffect(()=>{
        console.log("Use Effect Hook Called");
    }, [count1]);

    useEffect(()=>{
        console.log("Use Effect Hook for Count 2");
    }, [count2]);

    return <>
        <h1>Hooks Example</h1>
        <h1>Count 1 is {count1}</h1>
        <button onClick={()=>setCount1(count1 + 1)}>Update Count 1</button>
        <h1>Count 2 is {count2}</h1>
        <button onClick={()=>setCount2(count2 + 1)}>Update Count 2</button>
    </>
}

export default HooksExample3;