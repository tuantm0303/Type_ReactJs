import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function CartPage() {
  return (
    <>
      <div className="w-full h-full top-0 overflow-y-auto overflow-x-hidden sticky-0" id="chec-div">
        <div className="w-full flex justify-center z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
          <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-hidden overflow-x-hidden h-auto" id="scroll">
            <div className="flex items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <Link to="/" className="text-sm pl-2 leading-none">Back</Link>
            </div>
            <p className="lg:text-4xl text-3xl font-black leading-10 pt-3">Cart</p>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" className="h-full object-center object-cover md:block hidden" />
                <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg" alt="Black Leather Bag" className="md:hidden w-full h-full object-center object-cover" />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 md:pt-0 pt-4">RF293</p>
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none">North wolf bag</p>
                  <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                    <option value='1'>01</option>
                    <option value='2'>02</option>
                    <option value='3'>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 pt-2">Height: 10 inches</p>
                <p className="text-xs leading-3 py-4">Color: Black</p>
                <p className="w-96 text-xs leading-3">Composition: 100% calf leather</p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline cursor-pointer">Add to favorites</p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                  </div>
                  <p className="text-base font-black leading-none">,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-96 md:w-8/12 w-full pt-10 justify-between overflow-y-hidden overflow-x-hidden h-auto">
            <div>
              <p className="lg:text-4xl text-3xl font-black leading-9">Summary</p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none">Subtotal</p>
                <p className="text-base leading-none">,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none">Shipping</p>
                <p className="text-base leading-none"></p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none">Tax</p>
                <p className="text-base leading-none"></p>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal">Total</p>
                <p className="text-2xl font-bold leading-normal text-right">,240</p>
              </div>
              <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default CartPage