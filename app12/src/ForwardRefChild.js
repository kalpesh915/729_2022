import { ForwardedRef, forwardRef } from "react";
function ForwardRefChild(props, ref){
    return <>
        <p>Child Component of Forward Ref</p>
        <input type="text" name="fname" id="fname" placeholder="Enter Your First Name" ref={ref} ></input>
    </>
}

export default forwardRef(ForwardRefChild);