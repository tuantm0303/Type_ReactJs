import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <header className="w-full bg-gray-800 p-4 flex justify-between items-center"></header>
      <div className="flex bg-gray-800 items-center cursor-pointer p-2 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-left text-white"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
        <Link to="/" className="text-sm pl-2 leading-none text-white">
          Back Home
        </Link>
      </div>
      <main className="flex w-full h-full">
        <aside className="w-80 bg-gray w-fulll hidden sm:block">
          <div className="flex flex-col justify-between h-full p-4 bg-gray-800">
            <div className="text-sm">
              <Link to="post">
                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                  Post
                </div>
              </Link>
              <Link to="product">
                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                  Product
                </div>
              </Link>
              <Link to="category">
                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                  Category
                </div>
              </Link>
              <Link to="user">
                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                  User
                </div>
              </Link>
            </div>

            <div className="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm mt-2">
              <button className="rounded inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Logout</span>
              </button>
            </div>
          </div>
        </aside>
        <section className="w-full p-4">
          <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <div className="flex-grow py-12 px-10">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-sm font-bold text-indigo-600">
                    Hi Andrei,
                  </h4>
                  <h1 className="text-2xl font-bold text-indigo-900 mt-">
                    Welcome to Trịnh Minh Tuấn
                  </h1>
                  <h1 className="text-2xl font-bold text-indigo-900 mt-">
                    PH13096
                  </h1>
                </div>
                <div>
                  <div className="flex items-center border rounded-lg bg-white w-max py-2 px-4 space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      className="outline-none"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mt-10 justify-center"></div>
              </div>
            </div>

            <Outlet />
          </div>
        </section>
        <div className="w-5 bg-gray-800 p-4 flex justify-between items-center"></div>
      </main>
      <footer className="w-full bg-gray-800 p-4 flex justify-between items-center"></footer>
    </>
  );
}

export default Admin;
