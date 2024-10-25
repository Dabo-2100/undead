import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { products } from "./data.js";
import ProductPage from "./ProductPage.jsx";
import ShopPage from "./ShopPage.jsx";
export default function App() {
  const [myProducts] = useState(products);
  return (
    <div className="col-12 App contianer">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ShopPage myProducts={myProducts} />} />
            <Route path="product/:product_id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}