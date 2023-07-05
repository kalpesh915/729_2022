function APIProject(){

    const APIURL = "http://localhost:3000/students";

    function addNewData(){
        let fname = prompt("Enter Your First Name");
        let lname = prompt("Enter Your Last Name");
        let city = prompt("Enter Your City");

        // POST API
        fetch(APIURL, {
            method:"POST",
            headers : {
                        "content-type" : "Application/json",
                        "accept" : "Application/json"
                    },
            body : JSON.stringify({fname, lname, city})
            
        }).then((result)=>{
            result.json().then((response)=>{
                alert("New Data Inserted WIth ID "+response.id);
            })
        })
    }

    // get All Data
    function getAllData(){
        fetch(APIURL).then((result)=>{
            result.json().then((response)=>{
                console.log(response);
            })
        });
    }


    // Get data with ID
    function getData(){
        const id = prompt("Enter ID to get Data");
        fetch(APIURL+"/"+id).then((result)=>{
            result.json().then((response)=>{
                console.log(response);
            })
        });
    }


    // Update API
    function updateData(){
        const id = prompt("Enter ID to Update Data");
        let fname = prompt("Enter new First Name");
        let lname = prompt("Enter new Last Name");
        let city = prompt("Enter new City");

        fetch(APIURL+"/"+id, {
            method : "PUT",
            headers : {
                "accept" : "Application/json",
                "content-type" : "Application/json"
            },
            body : JSON.stringify({fname, lname, city})
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Data Updated");
            })
        })
    }


    // Delete Data
    function deleteData(){
        const id = prompt("Enter ID to delete Data ");
        fetch(APIURL+"/"+id, {
            method : "DELETE"
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Data Deleted WIth ID "+id);
            })
        })
    }

    return<>
        <button onClick={()=>addNewData()}>Add New Data</button>
        <button onClick={()=>getAllData()}>Get All Data</button>
        <button onClick={()=>getData()}>Get Data</button>
        <button onClick={()=>updateData()}>Update Data</button>
        <button onClick={()=>deleteData()}>Delete Data</button>
    </>
}

export default APIProject;