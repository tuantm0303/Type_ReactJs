import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { list, remove } from '../../api/product'
import type { productType } from '../../type'

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
    <>
      <h2 className='text-3xl font-semibold text-center text-gray-800'>Manager Products</h2>
      <Link to={`/admin/product/add`} className="border-2 border-blue-500 float-right rounded-lg font-bold text-blue-500 px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mb-5">ADD</Link>
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
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
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={product.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {product.title}
                </th>
                <td className="px-6 py-4">
                  {product.priceOld}
                </td>
                <td className="px-6 py-4">
                  {product.desc}
                </td>
                <td className="px-6 py-4">
                  {product.categoryId}
                </td>
                <td className="px-6 py-4 text-center">
                  <Link to={`/admin/product/${product.id}`} className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">Detail</Link>
                  <Link to={`/admin/product/edit/${product.id}`} className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">Edit</Link>
                  <button
                    className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2"
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
    </>
  )
}

export default ProductAdmin