import React from "react";

class LifeCycleMethodsExample extends React.Component{
    constructor(){
        super();
        console.log("Constructor Method Called");

        this.state = {
            count : 0
        }
    }

    render(){
        console.log("Render Method Called");
        return <>
            <h1>Life Cycle Methods Example</h1>
            <hr/>
            <h1>Value of Count is {this.state.count}</h1>
            <button onClick={()=>this.setState({count : this.state.count + 1})}>Update Count</button>
        </>
    }

    componentDidMount(){
        console.log("Component Did Mount Called");
    }

    componentDidUpdate(){
        console.log("Component Did Update Called");
    }

    shouldComponentUpdate(){
        console.log("Should Component Update Called");
        //return false;
        //return true;

        if(this.state.count %5 == 0){
            return true;
        }else{
            return false;
        }
    }

    componentWillUnmount(){
        console.log("COmponent will Unmount Called");
    }
}

export default LifeCycleMethodsExample;