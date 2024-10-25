import axios from "axios"
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProdcuts] = useState([]);

  const getData = () => {
    axios.get("http://localhost:1337/api/products?populate=*").then((res) => {
      setProdcuts(res.data.data);
      console.log(res.data.data);
    })
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="col-12 container d-flex flex-wrap gap-3">
      <h1>Hello This is Front Website</h1>
      {
        products.map((el, index) => {

          return (
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={`http://localhost:1337` + el.product_img
              [0].url} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{el.product_name}</h5>
                <p className="card-text">{el.product_price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
