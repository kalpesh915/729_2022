function ArrayExcample1(){
    
  const students = [
    {roll:1, "fname" : "Faizan", "lname" : "Aakhunji", "city" :"Rajkot", gender :"Male", marks : {sub1 : 56, sub2 : 45, sub3 : 65}},
    {roll:2, "fname" : "Ronak", "lname" : "Gokani", "city" :"Jamanagar", gender :"Male"},
    {roll:3, "fname" : "Jeel", "lname" : "Bhatti", "city" :"Bhavnagar", gender :"Male"},
    {roll:4, "fname" : "Danagr", "lname" : "Krushil", "city" :"Baroda", gender :"Male"},
    {roll:5, "fname" : "Patel", "lname" : "Gayatri", "city" :"Junagadh", gender :"Female"},
    {roll:6, "fname" : "Kyada", "lname" : "Bansi", "city" :"Jamnanagr", gender :"Female"},
    {roll:7, "fname" : "Tikharji", "lname" : "Jigar", "city" :"Ahamdabad", gender :"Male"},
    {roll:8, "fname" : "Sahid", "lname" : "Dhanani", "city" :"Canada", gender :"Male"},
    {roll:9, "fname" : "Shaily", "lname" : "Zinzuvadiya", "city" :"Baroda", gender :"Female"},
    {roll:10, "fname" : "Kajal", "lname" : "Gadara", "city" :"Surat", gender :"Female"}
  ];

    return <>
        <h1 className="text-white bg-primary p-4">
            Array Example With Map Function
        </h1>
        <div className="table-rosponsive">
                <table className="table table-hover table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Roll</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>Gender</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student, keyValue)=>
                            <tr key={keyValue}>
                                <td>{student.roll}</td>
                                <td>{student.fname}</td>
                                <td>{student.lname}</td>
                                <td>{student.city}</td>
                                <td>{student.gender}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
    </>
}

export default ArrayExcample1;