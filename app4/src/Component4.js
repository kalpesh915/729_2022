import { useState } from "react";

function Component4(){
    const [student, setStudent] = useState({
        roll : 123,
        fname : "Krushil",
        lname : "Dangar",
        city : "Rajkot"
    });
    return <>
        <h1>Welcome {student.fname} {student.lname} to {student.city} your Roll No. is {student.roll}</h1>
        <button onClick={()=>{setStudent({roll : 112, fname :"Faizan", lname : "Aakhunji", city :"Ahamdabad"})}}>Update Data</button>
    </>
}

export default Component4;