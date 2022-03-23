import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductAdmin from "./pages/products";
import AddProduct from "./pages/products/addProduct";
import ProductDetail from "./pages/products/productDetail";
import ProductOutlet from "./pages/products/ProductOutlet";
import type { productType } from "./pages/type/product"

function App() {
  const [products, setProducts] = useState<productType[]>([]);

  //add product
  // const getData = () => {
  //   const data: any = {
  //     name: addName,
  //     age: addAge,
  //     phone: addPhone,
  //   };

  //   setProducts([...products, data])
  // };

  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="product/" element={<ProductOutlet />}>          
          <Route index element={<ProductAdmin />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;