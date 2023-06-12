import { useState } from "react";

function Component3(){
    const [ip, setIP] = useState(0);

    return <>
        <h1>IP is {ip}</h1>
        <button onClick={()=>{setIP(ip + 1)}}>Increment</button>
        <button onClick={()=>{setIP(ip - 1)}}>Decrement</button>
    </>
}

export default Component3;