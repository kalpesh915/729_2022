import { useEffect, useState } from "react";

function ArrayExample2(){

    let [productsData, setProductsData] = useState([]);
    const APIURL = "https://dummyjson.com/products";

    useEffect(()=>{
        loadData();
    }, [])

    function loadData(){
        fetch(APIURL).then((result)=>{
            result.json().then((response)=>{
                setProductsData(response.products)
                console.log(productsData);
            })
        })
    }

    return <>
        <h1 className="bg-primary text-white p-4">Products Data From API</h1>
        <div className="container-fluid my-2 table-rsponsive">
            <table className="table table-hover table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Discount</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productsData.map((product, id)=><tr key={id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.discountPercentage}</td>
                            <td>{product.rating}</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td><img src={product.thumbnail} className="rounded" style={{width:"100px"}}></img></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default ArrayExample2;