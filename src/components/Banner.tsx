import React, { Component } from 'react'
import Slider from './Slider'

function Banner() {
  return (

    <>
      <Slider />
      <div className="service-container flex justify-between py-20 px-[10%] relative">
        <div className="service-transport flex">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-8 p-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
          </div>
          <div className="service-content">
            <div className="service-title text-sm font-extrabold">Free Shipping</div>
            <div className="service-desc text-xs text-gray-400">Lorem Ipsum is simply</div>
          </div>
        </div>
        <div className="service-hotline flex">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-8 p-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div className="service-content">
            <div className="service-title text-sm font-extrabold">Online Support</div>
            <div className="service-desc text-xs text-gray-400">Lorem Ipsum is simply</div>
          </div>
        </div>
        <div className="service-refund flex">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-8 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="service-content">
            <div className="service-title text-sm font-extrabold">Money Back</div>
            <div className="service-desc text-xs text-gray-400">Lorem Ipsum is simply</div>
          </div>
        </div>
        <div className="service-setting flex">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-8 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="service-content">
            <div className="service-title text-sm font-extrabold">Our Services</div>
            <div className="service-desc text-xs text-gray-400">Lorem Ipsum is simply</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner