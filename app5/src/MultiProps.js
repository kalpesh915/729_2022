function MultiProps(props){
    return <>
        <h1>Example of Multi Props</h1>
        <h1>Welcome {props.data.fname} {props.data.lname} to {props.data.city}</h1>
    </>
}

export default MultiProps;