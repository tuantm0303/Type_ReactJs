import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
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
  }, [])

  const handleRemove = async (id: number | string) => {
    if (window.confirm('Are you sure delete??')) {
      setProducts(products.filter(product => product._id !== id))
      remove(id);
      (() => toast.success("Xóa sản phẩm thành công!!"))()
    }
  }
  return (
    <>
      <ToastContainer />
      <h2 className='text-3xl font-semibold text-center text-gray-800'>Manager Products</h2>
      <Link to={`/admin/product/add`} className="border-2 border-blue-500 float-right rounded-lg font-bold text-blue-500 px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mb-5">ADD</Link>
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                PriceOld
              </th>
              <th scope="col" className="px-6 py-3">
                PriceNew
              </th>
              <th scope="col" className="px-6 py-3">
                Sale
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                CategoryId
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={product._id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {index + 1}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {product.title}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  <img className='w-[110px] h-[261]' src={product.image} alt={product.image} />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {product.priceOld}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {product.priceNew}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {product.sale}
                </th>
                <td className="px-6 py-4">
                  {product.status}
                </td>
                <td className="px-6 py-4">
                  {product.categoryId}
                </td>
                <td className="px-6 py-4 text-center flex justify-between">
                  <Link to={`/admin/product/${product.slug}`} className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">Detail</Link>
                  <Link to={`/admin/product/edit/${product.slug}`} className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">Edit</Link>
                  <button
                    className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2"
                    onClick={() => handleRemove(product._id)}
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