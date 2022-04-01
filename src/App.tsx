import { Routes, Route, Link } from "react-router-dom";
import PostOutlet from "./pages/admin/posts/PostOutliet";
import ProductAdmin from "./pages/admin/products";
import PostAdmin from "./pages/admin/posts";
import AddProduct from "./pages/admin/products/addProduct";
import AddPost from "./pages/admin/posts/addPost";
import ProductDetail from "./pages/admin/products/productDetail";
import ProductOutlet from "./pages/admin/products/ProductOutlet";
import PostDetail from "./pages/admin/posts/PostDetail";
import EditProduct from "./pages/admin/products/editProduct";
import EditPost from "./pages/admin/posts/editPost";
import Admin from "./pages/admin";
import ClientPage from "./pages/client";
import CategoryOutlet from "./pages/admin/categories/CategoryOutlet";
import CategoryAdmin from "./pages/admin/categories";
import FormCategory from "./pages/admin/categories/FormCategory";
import CategoryDetail from "./pages/admin/posts/PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientPage />} />
        <Route path="admin" element={<Admin />}>
          {/* category */}
          <Route path="category" element={<CategoryOutlet />}>
            <Route index element={<CategoryAdmin />} />
            <Route path="add" element={<FormCategory />} />
            <Route path="edit/:id" element={<FormCategory />} />  
            <Route path=":id" element={<CategoryDetail />} />
          </Route>

          {/* product */}
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
            <Route path="edit/:id" element={<EditPost />} />
            <Route path=":id" element={<PostDetail />} />
          </Route>
        </Route>
      </Routes>
      
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin/post">Admin</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default App;