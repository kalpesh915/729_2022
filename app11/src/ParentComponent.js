import ChildComponent from "./ChildComponent";

function ParentComponent(){
    function greetings(username){
        alert("Welcome User "+username);
    }
    return <>
        <h1>Welcome to Example of Child to Parent Data Sending</h1>
        <ChildComponent data={greetings}></ChildComponent>
    </>
}

export default ParentComponent;