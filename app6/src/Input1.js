function Input1(){

    function greetings(data){
        alert("Welcome "+data.target.value);
    }

  return <>
    <input type="text" placeholder="Enter your Name" onBlur={(e)=>greetings(e)}></input>
  </>
}
export default Input1;