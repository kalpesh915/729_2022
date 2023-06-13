import React from "react";
class PropsWithClass extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <>
            <h1>Props With Class Component</h1>
            <h1>Count is {this.props.count}</h1>
        </>
    }
}
export default PropsWithClass;