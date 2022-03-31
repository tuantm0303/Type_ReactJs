import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer-main bg-black px-[10%] pt-[80px]">
      <div className="row-flex flex justify-between pb-10">
        <div className="col w-[300px]">
          <Link to='#'><img className='h-[100px]' src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/e9/b9/99e9b974-b824-15c3-1eea-59669fa296d6/AppIconSSPV6-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt="" /></Link>
          <p>There are many variations of passages of look even slightly believable.</p>
          <div className="social-block flex">
            <a href="#"><svg className='w-[35px] h-[35px] mx-2 my-2' xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z" /><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z" /></svg></a>
            <a href="#"><svg className='w-[35px] h-[35px] mx-2 my-2' xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="126.444 2.281 589 589"><circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1" /><path fill="#fff" d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z" /></svg></a>
            <a href="#"><svg className='w-[35px] h-[35px] mx-2 my-2' xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#D42428" d="M7.9 256C7.9 119 119 7.9 256 7.9S504.1 119 504.1 256 393 504.1 256 504.1 7.9 393 7.9 256z" /><path fill="#CC202D" d="M431.4 80.6c96.9 96.9 96.9 254 0 350.8-96.9 96.9-254 96.9-350.8 0L431.4 80.6z" /><path fill="#BA202E" d="M499.1 305.7L376.3 182.9l-144.8 16.5L143.9 335l163.7 163.7c96.2-20.4 171.9-96.5 191.5-193z" /><path fill="#FFF" fill-rule="evenodd" d="M385.8 208.1c0-20.8-16.8-37.6-37.6-37.6H171.6c-20.8 0-37.6 16.9-37.6 37.6v101c0 20.8 16.8 37.7 37.6 37.7h176.5c20.8 0 37.6-16.9 37.6-37.7v-101zm-151.1 93.1v-94.8l71.9 47.4-71.9 47.4z" clip-rule="evenodd" /></svg></a>
            <a href="#"><svg className='w-[35px] h-[35px] mx-2 my-2' xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#CC3731" d="M7.9 256C7.9 119 119 7.9 256 7.9S504.1 119 504.1 256 393 504.1 256 504.1 7.9 393 7.9 256z" /><path fill="#BC2B2A" d="M431.4 80.6c96.9 96.9 96.9 253.9 0 350.8s-254 96.9-350.8 0L431.4 80.6z" /><path fill="#A52728" d="M502 287.6L360.1 145.7l-29.4 29.4-31.3-31.3-39.8 7.3-13.7 5.8-44.4-8.4-39.8 24.8-7.6 75.4 62 62-38.1 8.1-36.6 17.6-9.6 58.5 108.7 108.7c5.1.3 10.3.5 15.5.5 126.3 0 230.5-94.4 246-216.5z" /><g fill="#FFF"><path d="M254.6 156.6c2.3 1.4 4.9 3.5 7.7 6.2 2.7 2.8 5.4 6.3 8 10.5 2.5 3.9 4.7 8.5 6.7 13.8 1.6 5.3 2.4 11.5 2.4 18.6-.2 13-3.1 23.4-8.6 31.2-2.7 3.8-5.6 7.3-8.6 10.5-3.4 3.2-6.9 6.4-10.7 9.7-2.2 2.2-4.2 4.8-6 7.6-2.2 3-3.2 6.4-3.2 10.3 0 3.8 1.1 6.9 3.3 9.4 1.9 2.4 3.7 4.4 5.5 6.2l12.3 10.1c7.7 6.3 14.4 13.2 20.2 20.7 5.4 7.7 8.3 17.7 8.5 30.2 0 17.6-7.8 33.2-23.3 46.8-16.1 14.1-39.4 21.3-69.8 21.8-25.5-.2-44.5-5.7-57-16.3-12.7-9.9-19-21.8-19-35.6 0-6.7 2.1-14.2 6.2-22.5 4-8.2 11.2-15.5 21.7-21.8 11.8-6.7 24.1-11.2 37.1-13.5 12.8-1.9 23.5-2.9 32-3.2-2.6-3.5-5-7.1-7-11.1-2.4-3.8-3.6-8.4-3.6-13.7 0-3.2.5-5.9 1.4-8 .8-2.3 1.5-4.3 2.2-6.2-4.1.5-8 .7-11.7.7-19.4-.2-34.1-6.3-44.3-18.3-10.6-11.1-15.9-24.1-15.9-38.8 0-17.9 7.5-34 22.6-48.6 10.3-8.5 21.1-14 32.2-16.7 11-2.2 21.4-3.4 31-3.4h72.7L277 156.6h-22.4zm14.1 209.2c0-9.2-3-17.3-9-24.1-6.4-6.5-16.3-14.5-29.9-23.9-2.3-.2-5-.4-8.2-.4-1.9-.2-6.6 0-14.2.7-7.5 1.1-15.2 2.8-23.1 5.1-1.9.7-4.4 1.8-7.8 3.2-3.4 1.5-6.8 3.7-10.2 6.6-3.4 3-6.2 6.6-8.5 11-2.7 4.6-4 10.2-4 16.7 0 12.8 5.8 23.3 17.3 31.6 11 8.3 26 12.5 45.2 12.8 17.1-.2 30.2-4 39.2-11.4 8.8-7.2 13.2-16.5 13.2-27.9zM218 259.3c9.6-.4 17.5-3.8 23.9-10.3 3.1-4.6 5.1-9.4 5.9-14.2.5-4.9.8-8.9.8-12.3 0-14.3-3.7-28.8-11-43.3-3.4-7-8-12.7-13.6-17.1-5.7-4.1-12.3-6.3-19.8-6.6-9.9.2-18 4.2-24.6 11.9-5.5 8-8.1 17.1-7.9 27 0 13.1 3.8 26.8 11.5 41 3.7 6.6 8.5 12.3 14.4 16.9 6.1 4.7 12.8 7 20.4 7zM398 183.2h-38.2V145h-18.4v38.2h-38.2v18.5h38.2v38.1h18.4v-38.1H398z" /></g></svg></a>
            <a href="#"><svg className='w-[35px] h-[35px] mx-2 my-2' xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21" /><stop offset=".78" stop-color="#d82d7e" /></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" /><stop offset="1" stop-color="#8c3aaa" /></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16" /><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17" /><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)" /></svg></a>
          </div>
        </div>
        <div className="col infor w-[230px]">
          <h5 className="title-footer font-bold text-base text-white">Information</h5>
          <ul className="navlink">
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>About Us</Link></li>
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Delivery Information</Link></li>
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Privacy Policy</Link></li>
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Terms & Conditions</Link></li>
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Site Map</Link></li>
          </ul>
        </div>
        <div className="col extras w-[230px]">
          <h5 className="title-footer font-bold text-base text-white">Extras</h5>
          <ul className="navlink">
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Brands</Link></li>
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Gift Certificates</Link></li>
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Affiliate</Link></li>
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Specials</Link></li>
            <li className='py-2'><Link to="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>Contact Us</Link></li>
          </ul>
        </div>
        <div className="col store w-[230px]">
          <h5 className="title-footer font-bold text-base text-white">Store Information</h5>
          <ul className="navlink">
            <li className='py-2'><a href="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              Trịnh Văn Bô - Nam Từ Liêm - Hà Nội</a></li>
            <li className='py-2'><a href="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>0348090652
            </a></li>
            <li className='py-2'><a href="#" className='text-white text-xs text-opacity-20 hover:text-opacity-60'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>minhtuan0330@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr className='my-2' />
      <div className="bottom-footer flex justify-between h-10">
        <div className="contact-footer">
          <p className='text-white text-xs leading-8'>Powered By <a href="#">OpenCart</a> Artcraft - Arts & Craft Store © 2022</p>
        </div>
        <div className="payment-footer flex py-2">
          <a href="#" className='mx-2'><img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/catalog/visa.png" alt="" /></a>
          <a href="#" className='mx-2'><img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/catalog/discover.png" alt="" /></a>
          <a href="#" className='mx-2'><img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/catalog/american_express.png" alt="" /></a>
          <a href="#" className='mx-2'><img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/catalog/google_wallet.png" alt="" /></a>
          <a href="#" className='mx-2'><img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/catalog/paypal.png" alt="" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer