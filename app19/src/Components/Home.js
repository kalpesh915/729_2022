import React from "react";
import { Common } from "./CommonContext";

function Home(props){
   const myCommon = React.useContext(Common);
   console.log(myCommon);
    return <>
        <h1 style={{backgroundColor: myCommon.bg, color:myCommon.fg}}>Home Component</h1>
    </>
}

export default Home;