import React from "react";
class MultiPropsClass extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <>
            <h1>Class Component WIth Multiple Props</h1>
            <h1>Welcome {this.props.data.fname} {this.props.data.lname} to {this.props.data.city}</h1>
        </>
    }
}
export default MultiPropsClass;