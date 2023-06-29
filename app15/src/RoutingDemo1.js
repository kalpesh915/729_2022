import { useParams } from "react-router-dom";

function RoutingDemo1(){
    const {fname} = useParams("fname");
    const {city} = useParams("city");
    const {roll} = useParams("roll");
    return <>
        <div className="container-fluid table-responsive">
            <h1 className="text-center text-white p-4 bg-primary">Dynamic Data Example</h1>
            <h1>Welcome {fname} to {city} your Roll No. is {roll}</h1>
        </div>
    </>
}

export default RoutingDemo1;