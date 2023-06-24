function Printer(props){
    return <>
        <h1>Welcome {props.tmp.fname} {props.tmp.lname} to {props.tmp.city} Your Roll No. is {props.tmp.roll}</h1>
    </>
}

export default Printer;