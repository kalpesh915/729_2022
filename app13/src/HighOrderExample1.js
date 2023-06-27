import { useState } from "react";

function HighOrderExample1(){
    return <>
        <RedComponent data={Counter}></RedComponent>
        <BlueComponent data={Counter}></BlueComponent>
        <GreenComponent data={Counter}></GreenComponent>
    </>
}

function Counter(){
    let [count, setCount] = useState(0);
    return<>
        <p>Counter Component</p>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update</button>
    </>
}


function RedComponent(Props){
    return <>
        <div style={{backgroundColor:"Red", width:"300px"}}>
            <Props.data></Props.data>
        </div>
    </>
}

function BlueComponent(Props){
    return <>
        <div style={{backgroundColor:"blue", width:"300px"}}>
            <Props.data></Props.data>
        </div>
    </>
}

function GreenComponent(Props){
    return <>
        <div style={{backgroundColor:"green", width:"300px"}}>
            <Props.data></Props.data>
        </div>
    </>
}

export default HighOrderExample1;