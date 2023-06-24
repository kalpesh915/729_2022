import Printer from "./Printer";
function Students(){
    const data = [
        {roll: 1, fname : "Krsuhil", lname : "Dangar", city :"Rajkot"},
        {roll: 2, fname : "Jigar", lname : "Tikharji", city :"Rajkot"},
        {roll: 3, fname : "Sahid", lname : "Dhanani", city :"Rajkot"},
        {roll: 4, fname : "Riddhi", lname : "Sarasiya", city :"Rajkot"},
        {roll: 5, fname : "Bansi", lname : "Kyada", city :"Rajkot"},
        {roll: 6, fname : "Gayatri", lname : "Patel", city :"Rajkot"},
        {roll: 6, fname : "Faizan", lname : "Aakhunji", city :"Rajkot"},
    ];
    return <>
        <h1>Students Data</h1>

        {
            data.map((tmp)=>
                <Printer tmp={tmp}></Printer>
            )
        }
    </>
}

export default Students;