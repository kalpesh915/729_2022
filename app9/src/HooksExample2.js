import React, { useState } from "react"

function HooksExample2(){
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);


    // update function
    function updateCounts(){
        setCount1(count1 + 1);
        setCount2(count1 + 1);
    }

    // use Effect Hook
    React.useEffect(()=>{
        console.log("Use Effect Hook Called");
    });
    return <>
        <h1>Hooks Example</h1>
        <h1>Count1 is {count1} and Count2 is {count2}</h1>
        <button onClick={updateCounts}>Update Counts</button>
    </>
}

export default HooksExample2;