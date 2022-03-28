import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { list, remove } from '../api/post'
import { postType } from '../type/post'

function PostAdmin() {
  const [posts, setPosts] = useState<postType[]>([])

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await list()
      setPosts(data)
    }
    getPosts()
  }, [])

  const handleRemove = async (id: number) => {
    remove(id)
    if (window.confirm('Are you sure delete??')) {
      setPosts(posts.filter(post => post.id !== id))
    }
  }
  return (
    <div>
      <Link to={`/post/add`}>ADD</Link>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Thumbnail
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={post.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {post.title}
                </th>
                <td className="px-6 py-4">
                  {post.desc}
                </td>
                <td className="px-6 py-4">
                  {post.author}
                </td>
                <td className="px-6 py-4">
                  {post.category}
                </td>
                <td className="px-6 py-4">
                  {post.thumbnail}
                </td>
                <td className="px-6 py-4">
                  {post.status}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/post/${post.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</Link>
                  <Link to={`/post/edit/${post.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleRemove(post.id)}
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

export default PostAdmin