import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { listCate, remove } from '../../api/category'
import { categoryType } from '../../type'

function CategoryAdmin() {
  const [categories, setCategories] = useState<categoryType[]>([])

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCate()
      setCategories(data)
    }
    getCategories()
  }, [])

  const handleRemove = async (id: number | string) => {
    if (window.confirm('Are you sure delete??')) {
      setCategories(categories.filter(category => category._id !== id))
      remove(id)
    }
  }
  return (
    <>
      <h2 className='text-3xl font-semibold text-center text-gray-800'>Manager Categories</h2>
      <Link to={`/admin/category/add`} className="border-2 border-blue-500 float-right rounded-lg font-bold text-blue-500 px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mb-5">ADD</Link>
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Aciton
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={category._id}>
                <td className="px-6 py-4">
                  {category.name}
                </td>
                <td className="px-6 py-4 text-center">
                  <Link to={`/admin/category/${category._id}`} className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">Detail</Link>
                  <Link to={`/admin/category/edit/${category._id}`} className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">Edit</Link>
                  <button
                    className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2"
                    onClick={() => handleRemove(category._id)}
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

export default CategoryAdmin