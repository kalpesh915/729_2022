/*
    create state insted of simple variables 
    when you update state react re render component and give output
*/
import { useState } from "react";

function Component2(){
    // [stateName, stateUpdateFunction] = useState(defaut value);

    let [x, setX] = useState(0);

    return <>
        <h1>Value of x is {x}</h1>
        <button onClick={()=>{setX(x + 1)}}>Increment</button>
        
    </>
}

export default Component2;