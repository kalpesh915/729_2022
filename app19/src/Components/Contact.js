import React from "react";
import { Common } from "./CommonContext";

function Contact(){
    const myCommon = React.useContext(Common);
    return <>
        <h1 style={{backgroundColor:myCommon.bg, color:myCommon.fg}}>Contact Component</h1>
    </>
}

export default Contact;