import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { products } from "./data";

export default function ProductPage() {
    const params = useParams();
    const [theProduct, setTheProdut] = useState(0);
    useEffect(() => {
        // let href = window.location.href;
        // let splitArr = href.split("/");
        // setProductId(splitArr[splitArr.length - 1])
        // // console.log(window.location.href);
        let myProdut = products.find((el, index) => { return el.id == params.product_id })
        setTheProdut(myProdut)
        console.log(myProdut);
    }, [])
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <td>{theProduct.title}</td>
                    </tr>
                    <tr>
                        <th>Product Price</th>
                        <td>{theProduct.price} $</td>
                    </tr>
                    <tr>
                        <th>Product Photo</th>
                        <td><img src={theProduct.image} />  </td>
                    </tr>
                    <tr>
                        <th>Product Rating</th>
                        <td>{theProduct.rating ? theProduct.rating.rate : "-----"}</td>
                    </tr>

                </thead>
            </table>
        </div>
    )
}
