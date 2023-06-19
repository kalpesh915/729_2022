function Event1(){

    function msg(){
        alert("Today is "+Date());
    }

    return <>
        {/* <button onClick={msg()}>Click Me</button> */}
        <button onClick={msg}>Click Me</button>
    </>
}

export default Event1;