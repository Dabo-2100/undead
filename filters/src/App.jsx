import { useState } from "react"

export default function App() {
  const [products, setProducts] = useState([
    {
      name: "iPhone x",
      price: 400,
      stock_qty: 3,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "iPhone 11",
      price: 500,
      stock_qty: 4,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "iPhone 12",
      price: 600,
      stock_qty: 10,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "Samsung 1",
      price: 500,
      stock_qty: 4,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "Samsung 2",
      price: 600,
      stock_qty: 10,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "Samsung 12",
      price: 500,
      stock_qty: 4,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "Samsung 3",
      price: 600,
      stock_qty: 10,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

  ])

  const [res, setRes] = useState([
    {
      name: "iPhone x",
      price: 400,
      stock_qty: 3,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "iPhone 11",
      price: 500,
      stock_qty: 4,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "iPhone 12",
      price: 600,
      stock_qty: 10,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "Samsung 1",
      price: 500,
      stock_qty: 4,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "Samsung 2",
      price: 600,
      stock_qty: 10,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "Samsung 12",
      price: 500,
      stock_qty: 4,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

    {
      name: "Samsung 3",
      price: 600,
      stock_qty: 10,
      img: "https://m.media-amazon.com/images/I/517cbS1x8gL._AC_.jpg"
    },

  ]);

  const [selectedPrices, setSelectedPrices] = useState([]);

  const toggelPrice = (price) => {
    let oState = [...selectedPrices];
    let index = oState.indexOf(price);
    if (index == -1) {
      oState.push(price);
      setSelectedPrices(oState);
    }
    else {
      oState.splice(index, 1);
      setSelectedPrices(oState);
    }

    let searchRes = products.filter((el) => {
      return oState.some((price) => el.price === price);
    });
    
    setRes(searchRes);
  }

  return (
    <div className="col-12 App">
      <h1 className="col-12 bg-danger text-white">Data Filtering</h1>
      <input className="form-control" onChange={(event) => {
        let val = event.target.value;
        let searchRes = products.filter((el, index) => {
          return el.name.toLowerCase().includes(val.toLowerCase()) == true;
        })
        setRes(searchRes);
      }} placeholder="Search Products" />

      <select onChange={(event) => {
        let val = event.target.value;
        let searchRes = products.filter((el, index) => {
          return el.name.toLowerCase().includes(val.toLowerCase()) == true;
        })
        setRes(searchRes);
      }}>
        <option value="-1" hidden>Select Brand</option>
        <option value="samsung">Samsung</option>
        <option value="iphone">iPhone</option>
        <option value="">All</option>
      </select>

      <div className="d-flex gap-3 p-3">
        <div>
          <input id="p400" type="checkbox" onChange={() => toggelPrice(400)} />
          <label htmlFor="p400">400</label>
        </div>
        <div>
          <input id="p500" type="checkbox" onChange={() => toggelPrice(500)} />
          <label htmlFor="p500">500</label>
        </div>
        <div>
          <input id="p600" type="checkbox" onChange={() => toggelPrice(600)} />
          <label htmlFor="p600">600</label>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {
          res.map((el, index) => {
            return (
              <div key={index} className="card" style={{ width: "18rem" }}>
                <img src={el.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.price}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            )
          })
        }




      </div>
    </div>
  )
}
