import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { list, remove } from '../../api/user'
import type { userType } from '../../type'

function UserAdmin() {

  const [users, setUsers] = useState<userType[]>([])
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await list()
      setUsers(data)
    }
    getUsers();
  }, []);

  const handleRemove = async (id: number | string) => {
    if (window.confirm('Are you sure delete??')) {
      setUsers(users.filter(user => user._id !== id))
      remove(id);
      (() => toast.success("Xóa người dùng thành công!!"))()
    }
  }
  return (
    <>
      <ToastContainer />
      <h2 className='text-3xl font-semibold text-center text-gray-800 pb-10'>Manager Uses</h2>
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={user._id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {index + 1}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {user.name}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {user.email}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {user.role}
                </th>
                <td className="px-6 py-4 flex justify-evenly">
                  <button
                    className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
                    onClick={() => handleRemove(user._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/admin/user/edit/${user._id}`} className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">Edit</Link>
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

export default UserAdmin