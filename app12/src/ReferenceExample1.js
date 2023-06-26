import React, { createRef } from "react";
class ReferenceExample1 extends React.Component{
    constructor(){
        super();
        this.fnameref = createRef();
        this.lnameref = createRef();
    }

    getData() {
        //alert("Called");
        alert("Welcome "+this.fnameref.current.value+" "+this.lnameref.current.value);
        // this.fnameref.current.style.color = "Red";
        // this.fnameref.current.style.border = "1px solid red";
    }

    render(){
        return <>
            <h1>Reference Example with Class Component</h1>
            <input type="text" name="fname" id="fname" placeholder="Enter Your First Name" ref={this.fnameref}></input>
            <input type="text" name="lname" id="lname" placeholder="Enter Your Last Name" ref={this.lnameref}></input>
            <button onClick={()=>this.getData()}>Click Me</button>
        </>
    }
}

export default ReferenceExample1;