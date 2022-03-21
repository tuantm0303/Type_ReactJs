import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../api/product'

function ProductAdmin() {
  type productType = {
    name: String,
    price: Number,
    desc: String,
    categoryId: String
  }

  const [products, setProducts] = useState<productType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAll();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <h1>Product Admin</h1>
      <div className="navbar">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Desc</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.categoryId}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul>
          <li><Link to="/products">hehe</Link></li>
          <li><Link to="/product/:id">hehe</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default ProductAdmin