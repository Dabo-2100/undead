import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../../ProjectContext";
import Cart from "./Cart";

export default function PackagesSection() {
    const [cats, setCats] = useState([]);
    const [products, setProducts] = useState([]);
    const { cart, addToCart, removeFromCar, cartIndex, toggleCart } = useContext(ProjectContext);

    // 2000 
    // 10
    // 50
    const getCats = () => {
        axios.get("http://localhost:1337/api/product-cats").then((res) => {
            console.log(res.data);
            setCats(res.data.data)
        })
    }
    const getCatProducts = (cat_id) => {
        axios.get("http://localhost:1337/api/product-cats/" + cat_id, {
            params: {
                populate: "*",
            }
        }).then((res) => {
            console.log(res.data);
            setProducts(res.data.data.products)
            // setCats(res.data.data)
        })
    }
    useEffect(() => {
        console.log(cart);
        getCats();
    }, []);
    return (
        <div>

            <div className="col-12 d-flex flex-wrap gap-3" >
                {
                    cats.map((el, index) => {
                        return (
                            <div key={el.documentId} className="col-3 bg-dark text-white p-3" onClick={() => {
                                getCatProducts(el.documentId);
                            }}>
                                {el.cat_name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="col-12 d-flex flex-wrap gap-3">
                {
                    products.map((el, index) => {
                        return (
                            <button className="btn btn-primary" onClick={() => {
                                addToCart({ ...el })
                            }} key={el.documentId}>{el.product_name}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}
