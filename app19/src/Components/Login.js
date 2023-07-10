import React from "react";
import { Common } from "./CommonContext";

function Login(){
    const myCommon = React.useContext(Common);
    return <>
        <h1 style={{backgroundColor:myCommon.bg, color:myCommon.fg}}>Login Component</h1>
    </>
}

export default Login;