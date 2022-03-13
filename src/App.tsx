import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Student from './pages/Student';
function App() {
  const [data, setData] = useState(
    [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ]
  )
  const removeProduct = (id: number) => {
    setData(data.filter(item => item.id !== id))
  }
  return (
    <table>
      <Student />
      {/* <Login />
      <Header />
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Giá</th>
        <th>Hành động</th>
      </tr>
      {data.map((item, index) =>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><button onClick={() => removeProduct(item.id)}>Xóa</button></td>
        </tr>
      )} */}
    </table>
  );
}

export default App;
