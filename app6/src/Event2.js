function Event2(){
    function greetings(fname){
        alert("Welcome "+fname+", Good Morning");
    }

    return <>
        {/* <button onClick={greetings("Bansi")}>Click Me</button> */}
        <button onClick={()=>greetings("Bansi")}>Click Me</button>
    </>
}
export default Event2;