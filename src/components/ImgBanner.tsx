import React from 'react'

function ImgBanner() {
  return (
    <section className='relative'>
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
      <div className="w-full bg-cover bg-center overflow-hidden h-[600px]" >
        <img src="https://www.sammyfans.com/wp-content/uploads/2021/12/galaxy-s22-ultra-green-render-img-1.jpg" className='z-20 hover:scale-105 h-full w-full object-cover transition-all ease-in-out duration-75 overflow-hidden' alt="" />
        <div className="justify-center h-full w-full bg-opacity-50">
          <div className="text-center absolute top-[45%] left-[45%]">
            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Welcome to us</h1>
            <button className="mt-4 px-6 py-4 bg-white text-sm uppercase font-medium rounded hover:bg-slate-500 hover:text-yellow-200 focus:outline-none">BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImgBanner