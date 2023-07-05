import { useEffect, useState } from "react";

function APICRUDExample1(){
    const APIURL = "http://localhost:3000/students";

    // create required state
    let [sid, setSid] = useState();
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [city, setCity] = useState("");
    let [status, setStatus] = useState(true);
    let [studentData, setStudentData] = useState([]);

    // function for get All Data 
    function loadAllData(){
        // GET API
        fetch(APIURL).then((result)=>{
            result.json().then((response)=>{
                setStudentData(response);
            });
        });
    }


    // use Effect Hook to load Data
    useEffect(()=>{
        loadAllData();
    }, [])

    
    // function for add new data or edit data
    function processData(event){
        event.preventDefault();


        if(status){
            // code for add new data
            fetch(APIURL, {
                method : "POST",
                headers : {
                    "content-type" : "application/json",
                    "accept" : "application/json"
                },
                body : JSON.stringify({fname, lname, email, phone, city})
            }).then((result)=>{
                result.json().then((response)=>{
                    alert("New Data Inseerted with ID "+response.id);
                    resetForm();
                    loadAllData();
                })
            })
        }else{
            // code for update data
            fetch(APIURL+"/"+sid, {
                method : "PUT",
                headers : {
                    "content-type" : "application/json",
                    "accept" : "application/json"
                },
                body : JSON.stringify({fname, lname, email, phone, city})
            }).then((result)=>{
                result.json().then((response)=>{
                    alert("Data Updated with "+sid+" ID ");
                    resetForm();
                    loadAllData();
                })
            })
        }
    }

    // Load Data for Edit
    function loadDataforEdit(id){
        fetch(APIURL+"/"+id).then((result)=>{
            result.json().then((response)=>{
                setSid(response.id);
                setFname(response.fname);
                setLname(response.lname);
                setEmail(response.email);
                setPhone(response.phone);
                setCity(response.city);
                setStatus(false);
            });
        });
    }

    //  Delete Data
    function deleteData(id){
        if(window.confirm("Are you sure to delete Data ??")){
            fetch(APIURL+"/"+id, {
                method : "DELETE"
            }).then((result)=>{
                result.json().then((response)=>{
                    alert("Data Deleted With ID " + id);
                    loadAllData();
                })
            })
        }else{
            alert("Nothing to Do");
        }
    }

    // function for reset form
    function resetForm(){
        setSid(0);
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setCity("");
        setStatus(true);
    }

    // function for cancel update process
    function cancelUpdate(){
        resetForm();
        setStatus(true);
    }

    return <>
        <div className="container-fluid">
            <h1 className="bg-primary text-white text-center p-4">API Crud Example</h1>
            <div className="row">
                 <div className="col-md-3">
                    <form onSubmit={processData}>
                        <div className="form-floating my-2">
                            <input type="text" name="fname" id="fname" placeholder="Enter First Name" className="form-control" onChange={(event)=>setFname(event.target.value)} value={fname}></input>
                            <label htmlFor="fname" className="form-label">Enter First Name</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="text" name="lname" id="lname" placeholder="Enter Last Name" className="form-control" onChange={(event)=>setLname(event.target.value)} value={lname}></input>
                            <label htmlFor="lname" className="form-label">Enter Last Name</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="email" name="email" id="email" placeholder="Enter Email Address" className="form-control" onChange={(event)=>setEmail(event.target.value)} value={email}></input>
                            <label htmlFor="email" className="form-label">Enter Email Address</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="text" name="phone" id="phone" placeholder="Enter Phone Number" className="form-control" onChange={(event)=>setPhone(event.target.value)} value={phone} pattern="\d{10,13}"></input>
                            <label htmlFor="phone" className="form-label">Enter Phone Number</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="text" name="city" id="city" placeholder="Enter City" className="form-control" onChange={(event)=>setCity(event.target.value)} value={city}></input>
                            <label htmlFor="city" className="form-label">Enter City</label>
                        </div>
                        <div className="my-2">
                            {
                                status ? <>
                                    <input type="submit" value="Add New Data" className="btn btn-primary"></input>
                                    <input type="reset" value="Reset" className="btn btn-danger"></input>
                                </> : <>
                                    <input type="submit" value="Save Data" className="btn btn-primary"></input>
                                    <input type="button" value="Cancel" onClick={()=>cancelUpdate()} className="btn btn-danger"></input>
                                </>
                            }
                        </div>
                    </form>
                 </div>

                 <div className="col-md-9">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
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
                                {
                                    studentData.map((student, keyId)=>
                                    <tr key={keyId}>
                                        <td>{student.id}</td>
                                        <td>{student.fname}</td>
                                        <td>{student.lname}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.city}</td>
                                        <th>
                                            <button className="btn btn-primary mx-2" onClick={()=>loadDataforEdit(student.id)}><i className="fa fa-pen"></i></button>
                                            <button className="btn btn-danger" onClick={()=>deleteData(student.id)}><i className="fa fa-trash"></i></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                 </div>
            </div>  
        </div>
    </>
}

export default APICRUDExample1;