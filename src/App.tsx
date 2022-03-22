import React, { useState } from "react";
import Student from "./pages/student";

import { Routes, Route, Link } from "react-router-dom";
import ClientLayout from "./pages/layouts/clientLayout"
import AdminLayout from "./pages/layouts/adminLayout";
import HomePage from "./pages/homepage";
import ProductAdmin from "./pages/product";
import AdminHomePage from "./pages/adminHomePage";
import ProductDetail from "./pages/product/productDetail";

type studentType = {
  name: string;
  age: string;
  phone: string;
}

function App() {
  const [addName, setAddName] = useState<string>('')
  const [addAge, setAddAge] = useState<string>('')
  const [addPhone, setAddPhone] = useState<string>('')

  const [student, setStudent] = useState<studentType[]>([
    {
      name: 'Trịnh Minh Tuấn',
      age: '21',
      phone: '0348090652',
    }
  ]);

  const getData = () => {
    const data: any = {
      name: addName,
      age: addAge,
      phone: addPhone,
    };

    setStudent([...student, data]);
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <form>
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddName(e.target.value)}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddAge(e.target.value)}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddPhone(e.target.value)}
            />
            <button
              className="btn btn-warning"
              type="submit"
              onClick={
                (e) => {
                  e.preventDefault()
                  getData()
                }
              }
            >
              ADD
            </button>
          </form>
        </div>
        <Student rows={student} />
      </header>
      <div className="navbar">
        <ul>
          <li><Link to="/">Client Home</Link></li>
          <li><Link to="/product">Client Product</Link></li>
          <li><Link to="/admin">Admin Home</Link></li>
          <li><Link to="/admin/product">Admin Product</Link></li>
        </ul>
      </div>

      <Routes>
        {/* group client */}
        <Route path="/" element={<ClientLayout />} />
        <Route path="/product" element={<HomePage />} />

        {/* group admin */}
        <Route path='admin' element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
            <Route path='product'>
              <Route index element={<ProductAdmin />} />
              <Route path=':id' element={<ProductDetail />} />
              {/* <Route path=':id/edit' element={<ProductForm />} /> */}
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;