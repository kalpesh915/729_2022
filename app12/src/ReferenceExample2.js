import { useRef } from "react";

function ReferenceExample2(){

    function getData(){
        //alert("Called");
        //alert("Welcome "+fnameRef.current.value+" "+lnameRef.current.value);
        fnameRef.current.value = fnameRef.current.value.toUpperCase();
        lnameRef.current.value = lnameRef.current.value.toUpperCase();
    }

    const fnameRef = useRef();
    const lnameRef = useRef();
    return<>
        <h1>Reference Example With Function Component</h1>
        <input type="text" name="fname" id="fname" placeholder="Enter Your First Name" ref={fnameRef}></input>
        <input type="text" name="lname" id="lname" placeholder="Enter Your Last Name" ref={lnameRef}></input>
        <button onClick={()=>getData()}>Get Data</button>
    </>
}

export default ReferenceExample2;