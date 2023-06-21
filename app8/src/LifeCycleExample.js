import React from "react";
class LifeCycleExample extends React.Component{
    constructor(){
        super();
        console.log("Construtor Called");

        this.state = {
            count : 0
        }
    }

    render(){
        console.log("Render Method Called");
        return <>
            <h1>Life Cycle Methods Example</h1>
            <h1>Count is {this.state.count}</h1>
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
        console.log("Should Component Update");
        if(this.state.count %5 == 0){
            return true;
        }else{
            return false;
        }
    }

    componentWillUnmount(){
        console.log("Component will Unmount Called");
    }
}

export default LifeCycleExample;