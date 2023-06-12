/*
    create simple variable in react and update value on button click,
    update in simple variable are not reflected in output
*/ 

function Component1(){
    let x = 1;

    function increment(){
        x++;
        console.log(x);
    }

    return <>
        <h1>Value of X is {x}</h1>
        <button onClick={()=>increment()}>Increment</button>
    </>
}
export default Component1;