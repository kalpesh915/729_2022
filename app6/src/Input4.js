function Input4(){
    function getData(event){
        //alert("Called");
        event.preventDefault();
        alert("Welcome "+event.target.fname.value+" "+event.target.lname.value);
    }
    return <>
        <form onSubmit={getData}>
        <input type="text" placeholder="Enter First Name" id="fname" required></input> <br/>
        <input type="text" placeholder="Enter Last Name" id="lname" required></input> <br/>
        <input type="submit" value="Send Data" ></input>
        </form>
    </>
}

export default Input4;