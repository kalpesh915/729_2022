import {Fragment} from "react";

function FragmentExample1(){
    // tradition code with error
    // return <h1> Welcome this is Fragment Example </h1>
    // <p>Another Text for Return From our Component</p>

    // return <React.Fragment>
    //     <h1> Welcome this is Fragment Example </h1>
    //     <p>Another Text for Return From our Component</p>
    // </React.Fragment>

    // return <Fragment>
    //     <h1> Welcome this is Fragment Example </h1>
    //     <p>Another Text for Return From our Component</p>
    // </Fragment>

    return <>
        <h1> Welcome this is Fragment Example </h1>
        <p>Another Text for Return From our Component</p>
    </>
}

export default FragmentExample1;