import React from 'react'

function ImgBanner() {
  return (
    <header>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 ">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">

              <div className="flex md:hidden">
                <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="w-full bg-cover bg-center animate-pulse" style={{ height: '32rem', backgroundImage: `url(https://www.sammyfans.com/wp-content/uploads/2021/12/galaxy-s22-ultra-green-render-img-1.jpg)` }}>
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Welcome to us</h1>
            <button className="mt-4 px-6 py-4 bg-white text-sm uppercase font-medium rounded hover:bg-slate-500 hover:text-yellow-200 focus:outline-none">BUY NOW</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ImgBanner