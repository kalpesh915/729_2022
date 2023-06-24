import React from "react";
class PureComponentExample extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            count : 1
        }
    }

    render(){
        console.log("Render Called");
        return <>
            <h1>Pure Component Example</h1>
            <h1>Count is {this.state.count}</h1>
            {/* <button onClick={()=>this.setState({count: this.state.count+1})}>Update Count</button> */}
            <button onClick={()=>this.setState({count: this.state.count})}>Update Count</button>
        </>
    }
}

export default PureComponentExample;