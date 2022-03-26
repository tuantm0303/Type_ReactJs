import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { list, remove } from '../api/product';
import type { productType } from '../type/product';

function ProductAdmin() {

  const [products, setProducts] = useState<productType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list()
      setProducts(data)
    }
    getProducts();
  }, []);

  const handleRemove = async (id: number) => {
    remove(id)
    if (window.confirm('Are you sure delete??')) {
      setProducts(products.filter(product => product.id !== id))
    }
  }
  return (
    <div className="max-w-2xl mx-auto mb-[20px]">
      <Link to={`/product/add`}>ADD</Link>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                CategoryId
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={product.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {product.name}
                </th>
                <td className="px-6 py-4">
                  {product.price}
                </td>
                <td className="px-6 py-4">
                  {product.desc}
                </td>
                <td className="px-6 py-4">
                  {product.categoryId}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/product/${product.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</Link>
                  <Link to={`/product/edit/${product.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleRemove(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Outlet />
      </div>
    </div>
  )
}

export default ProductAdmin