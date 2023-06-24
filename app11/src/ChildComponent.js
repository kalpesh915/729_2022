import { useState } from "react";

function ChildComponent(props){
    let [username, setUsername] = useState("Jigar");

    return <>
        <button onClick={()=>{props.data(username)}}>Print Greetings</button>
    </>
}

export default ChildComponent;