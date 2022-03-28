import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostOutlet from "./pages/posts/PostOutliet";
import ProductAdmin from "./pages/products";
import PostAdmin from "./pages/posts";
import AddProduct from "./pages/products/addProduct";
import AddPost from "./pages/posts/addPost";
import ProductDetail from "./pages/products/productDetail";
import ProductOutlet from "./pages/products/ProductOutlet";
import PostDetail from "./pages/posts/PostDetail";
import EditProduct from "./pages/products/editProduct";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/post">Post</Link></li>
        </ul>
      </div>
      {/* product */}
      <Routes>
        <Route path="product" element={<ProductOutlet />}>
          <Route index element={<ProductAdmin />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        {/* post */}
        <Route path="post" element={<PostOutlet />}>
          <Route index element={<PostAdmin />} />
          <Route path="add" element={<AddPost />} />
          {/* <Route path="edit/:id" element={<EditPost />} /> */}
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;