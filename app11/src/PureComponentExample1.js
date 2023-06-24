import { useMemo } from "react";
import { useState } from "react";

function PureComponentExample1(){
    let [count, setCount] = useState(0);
    useMemo(()=>{
        console.log("Render Called");
    }, [count])
    return <>
        <h1>Pure Functional Component </h1>
        <h1>Count is {count}</h1>
        {/* <button onClick={()=>setCount(count+1)}>Update</button> */}
        <button onClick={()=>setCount(count)}>Update</button>
    </>
}

export default PureComponentExample1;