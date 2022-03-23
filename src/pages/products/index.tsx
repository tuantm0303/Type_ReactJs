import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { list } from '../api/product';
import { productType } from '../type/product';

function ProductAdmin() {

  const [products, setProducts] = useState<productType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

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
            {products.map((item, index) => (
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {item.name}
                </th>
                <td className="px-6 py-4">
                  {item.price}
                </td>
                <td className="px-6 py-4">
                  {item.desc}
                </td>
                <td className="px-6 py-4">
                  {item.categoryId}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                  <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                  <Link to={`/product/${item._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</Link>
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