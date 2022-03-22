import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../api/product'

function ProductAdmin() {
  type productType = {
    _id: String | number,
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.categoryId}</td>
                <td><Link to={`${item._id}`}><button className="btn btn-warning">Detail</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductAdmin