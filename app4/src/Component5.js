import React from "react";

class Component5 extends React.Component {
    constructor(){
        super();
        this.state = {
            ip : 0
        }
    }

    render(){
        return <>
            <h1>Exmaple of State in Class Component</h1>
            <h1>IP is {this.state.ip}</h1>
            <button onClick={()=>this.setState({ip : this.state.ip + 1})}>Update</button>
        </>
    }
}

export default Component5;