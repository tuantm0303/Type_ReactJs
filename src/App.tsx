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
import CategoryDetail from "./pages/admin/categories/CategoryDetail";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserOutlet from "./pages/admin/users/userOutlet";
import UserAdmin from "./pages/admin/users";
import ProductOnCategory from "./components/ProductOnCategory";
import CartPage from "./components/CartPage";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientPage />} />
        <Route path="/:name" element={<ProductOnCategory />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="admin" element={<Admin />}>
          <Route path="category" element={<CategoryOutlet />}>
            <Route index element={<CategoryAdmin />} />
            <Route path="add" element={<FormCategory />} />
            <Route path="edit/:id" element={<FormCategory />} />
            <Route path=":id" element={<CategoryDetail />} />
          </Route>

          {/* user */}
          <Route path="user" element={<UserOutlet />}>
            <Route index element={<UserAdmin />} />
            <Route path="add" element={<FormCategory />} />
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
    </div>
  );
}

export default App;