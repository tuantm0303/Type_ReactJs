import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <>
      <header className="w-full bg-gray-800 p-4 flex justify-between items-center"></header>
      <main className="flex w-full h-full">
        <aside className="w-80 bg-gray w-fulll hidden sm:block">
          <div className="flex flex-col justify-between h-full p-4 bg-gray-800">
            <div className="text-sm">
              <Link to="post"><div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Post</div></Link>
              <Link to="product"><div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Product</div></Link>
              {/* <Link to="category"><div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Category</div></Link>
              <Link to="user"><div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">User</div></Link> */}
            </div>

            <div className="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm mt-2">
              <button className="rounded inline-flex items-center">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                <span className="font-semibold">Logout</span>
              </button>
            </div>
          </div>
        </aside>
        <section className="w-full p-4">
          <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <Outlet />
          </div>
        </section>
        <div className="w-5 bg-gray-800 p-4 flex justify-between items-center"></div>
      </main>
      <footer className="w-full bg-gray-800 p-4 flex justify-between items-center"></footer>
    </>
  )
}

export default Admin