import React from "react";
import { Common } from "./CommonContext";

function About(){
    const myCommon = React.useContext(Common);
    return <>
        <h1 style={{backgroundColor:myCommon.bg, color:myCommon.fg}}>About Component</h1>
    </>
}

export default About;