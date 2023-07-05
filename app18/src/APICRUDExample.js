import { useEffect } from "react";
import { useState } from "react";
import './APICrud.css';
function APICRUDExample(){

    // Create Required variables and State
    const APIURL = "http://localhost:3000/students";
    let [sid, setSid] = useState(0);
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [city, setCity] = useState("");
    let [status, setStatus] = useState(true);
    let [studentData, setStudentData] = useState([]);

    function saveData(event){
        
        event.preventDefault();
        // if status is true then add new data process called
        if(status){
            //alert("Called");
            fetch(APIURL, {
                method : "POST",
                headers : {
                    "content-type" : "Application/json",
                    "accept" : "application/json"
                },
                body : JSON.stringify({fname, lname, email, phone, city})
            }).then((result)=>{
                result.json().then((response)=>{
                    loadAllData();
                    resetForm();
                    alert("New Record Inserted");
                })
            })
        }
        else{
            // if status is false then update existing data process called
            fetch(APIURL+"/"+sid, {
                method : "PUT",
                headers : {
                    "content-type" : "application/json",
                    "accept" : "application/json"
                },
                body : JSON.stringify({fname, lname, email, phone, city})
            }).then((result)=>{
                result.json().then((response)=>{
                    loadAllData();
                    setStatus(true);
                    resetForm();
                    alert("Data updated with "+sid);
                })
            });
        }
        
        
    }

    function resetForm(){
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setCity("");
        setStatus(true);
    }

    function loadAllData(){
        fetch(APIURL).then((result)=>{
            result.json().then((response)=>{
                setStudentData(response);
                console.log(response);
            });
        });
    }

    //  this call is executed when our page load first time
    useEffect(()=>{
        loadAllData();
    }, [])

    function deleteData(id){
        //alert(id);
        if(window.confirm("Are you sure to delete data with ID "+id)){
            fetch(APIURL+"/"+id, {
                method: "DELETE"
            }).then((result)=>{
                result.json().then((response)=>{
                    loadAllData();
                    //alert("Data Deleted With ID "+id);
                });
            });
        }
    }

    function getEditData(id){
        fetch(APIURL+"/"+id).then((result)=>{
            result.json().then((response)=>{
                setSid(response.id);
                setFname(response.fname);
                setLname(response.lname);
                setEmail(response.email);
                setPhone(response.phone);
                setCity(response.city);
                setStatus(false);
            })
        })
    }

    return <>
        <h1 className="bg-primary text-white text-center p-4">CRUD WIth API</h1>
        <div className="row">
            <div className="col-md-3">
                <form onSubmit={saveData}>
                    <div className="form-floating my-2">
                        <input type="text" name="fname" id="fname" placeholder="Enter First Name" required className="form-control" onChange={(event)=>setFname(event.target.value)} value={fname}></input>
                        <label className="form-label" htmlFor="fname">Enter First Name</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="text" name="lname" id="lname" placeholder="Enter Last Name" required className="form-control" onChange={(event)=>setLname(event.target.value)} value={lname}></input>
                        <label className="form-label" htmlFor="lname">Enter Last Name</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="email" name="email" id="email" placeholder="Enter Email Address" required className="form-control" onChange={(event)=>setEmail(event.target.value)} value={email}></input>
                        <label className="form-label" htmlFor="email">Enter Email Address</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="text" name="phone" id="phone" placeholder="Enter Phone" required className="form-control" pattern="\d{10,13}" onChange={(event)=>setPhone(event.target.value)} value={phone}></input>
                        <label className="form-label" htmlFor="phone">Enter Phone</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="text" name="city" id="city" placeholder="Enter City" required className="form-control" onChange={(event)=>setCity(event.target.value)} value={city}></input>
                        <label className="form-label" htmlFor="city">Enter City Name</label>
                    </div>
                    <div className="form-floating my-2">
                        {
                            status ? <>
                            <input type="submit" value="Add new Data" className="btn btn-primary"></input>
                            <input type="reset" value="Reset" className="btn btn-danger"></input></>
                            :
                            <>
                            <input type="submit" value="Save Data" className="btn btn-primary"></input>
                            <input type="button" value="Cancel" className="btn btn-danger" onClick={()=>setStatus(true)}></input></>
                        }
                        
                    </div>
                </form>
            </div>
            <div className="col-md-9">
                <div className="table-responsive">
                    <table className="table table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* printing data in table format */}

                            {
                                studentData.map((student, id)=><tr>
                                    <td>{student.id}</td>
                                    <td>{student.fname}</td>
                                    <td>{student.lname}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.city}</td>
                                    <td>
                                        <button className="btn btn-primary mx-2" onClick={()=>getEditData(student.id)}><i className="fa fa-pen"></i></button>
                                        <button className="btn btn-danger" onClick={()=>deleteData(student.id)}><i className="fa fa-trash"></i></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default APICRUDExample;