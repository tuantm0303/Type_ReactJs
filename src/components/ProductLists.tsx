import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { list } from '../pages/api/product'
import type { productType } from '../pages/type/index'

function ProductLists() {
  const [products, setProducts] = useState<productType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list()
      setProducts(data)
    }
    getProducts()
  }, [])
  return (
    <div className="product-show flex flex-wrap">
      {products.map(product => (
        <div key={product.id} className="group products p-1 pb-5 border-2 border-solid border-gray-400 m-3 w-[275px] rounded-lg shadow-2xl relative">
          <div className="product-img relative">
            <div className="product-reviews flex justify-between w-full absolute z-20">
              <div className="star-quantily flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 w-2.5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 w-2.5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 w-2.5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 w-2.5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 w-2.5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <div className="quantily">
                  <span className="text-red-500 text-sm">(5)</span>
                </div>
              </div>
              <button className="tags border-2 rounded-xl h-7 w-11 bg-red-500 text-white-500">New</button>
            </div>
            <div className="pro-img overflow-hidden">
              <Link to="#">
                <img src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/November2021/uBT5A9094_copy_450x663.jpg" alt="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/November2021/uBT5A9094_copy_450x663.jpg" className="w-[385px] h-[261] group-hover:hidden" />
                <img src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/December2021/densoro_copy_450x663.jpg" alt="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/December2021/densoro_copy_450x663.jpg" className="w-[385px] h-[261] hidden group-hover:block group-hover:filter group-hover:scale-125 transition-all transform duration-500 object-cover z-10" />
              </Link>
            </div>
            <div className="group-hover:translate-y-[-50px] w-[95%] product-btn relative translate-y-[60px] duration-100 mx-auto absolute">
              <button
                className="btn border-2 overflow-hidden border-solid border-blue-500 rounded-xl bg-blue-500 w-full h-10">
                <a href="#">Mua ngay</a>
              </button>
            </div>
            <div className="product-heading pl-2 relative bg-white py-5">
              <h3 className="product-title font-semibold">{product.title}</h3>
              <div className="product-price">
                <div rel-script="product-price" className="product-prices flex">
                  <ins className="text-red-500 text-sm pr-5">priceNew</ins>
                  <del className="text-xs">priceOld</del>
                  <span className="text-red-500 text-sm px-5">sale</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-full"></div>
        </div>
      ))}
    </div>
  )
}

export default ProductLists