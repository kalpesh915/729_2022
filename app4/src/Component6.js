import React from "react";
class Component6 extends React.Component{
    constructor(){
        super();
        this.state = {
            roll : 123,
            fname : "Jigar",
            lname : "Tikharji",
            city : "Rajkot"
        }
    }

    render(){
        return <>
            <h1>Welcome {this.state.fname} {this.state.lname} to {this.state.city} your Roll No.is {this.state.roll}</h1>
            <button onClick={()=> this.setState({ roll : 124, fname : "Jeel", lname : "Bhatti", city : "Rajkot" })}>Update Data</button>
        </>
    }
}
export default Component6;