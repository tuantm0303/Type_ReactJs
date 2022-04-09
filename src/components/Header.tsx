import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listCate } from '../pages/api/category'
import { search } from '../pages/api/product'
import { categoryType } from '../pages/type'

function Header() {
  const [categories, setCategories] = useState<categoryType[]>([])
  const handleSearch = () => {
    (async (keyword) => {
      const data = await search(keyword)
      console.log(data)
    })()
  }

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCate()
      console.log(data)
      setCategories(data)
    }
    getCategories()
  }, [])

  const signout = () => {
    localStorage.removeItem("user")
  }

  return (
    <header className="header-main text-center h-[100px]">
      <ul className='flex p-5 justify-end text-center leading-[10px]'>
        <li className='px-2 hover:opacity-70 font-semibold'><Link to="/admin" className='hover:border-b-2 hover:border-solid hover:border-blue-400'>Admin</Link></li>
        <li className='px-2 hover:opacity-70 font-semibold'><Link to="/signin" className='hover:border-b-2 hover:border-solid hover:border-blue-400'>Signin</Link></li>
        <li className='px-2 hover:opacity-70 font-semibold'><Link to="/signup" className='hover:border-b-2 hover:border-solid hover:border-blue-400'>Signup</Link></li>
        <li className='px-2 hover:opacity-70 font-semibold'><button onClick={() => signout()} className='hover:border-b-2 font-semibold hover:border-solid hover:border-blue-400'>Signout</button></li>
      </ul>
      <hr />
      <div className="row-menu flex justify-between">
        <div className="logo"><Link to="/"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/e9/b9/99e9b974-b824-15c3-1eea-59669fa296d6/AppIconSSPV6-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt="" className="logo-img h-[100px] " /></Link></div>
        <div className="nav-menu">
          <ul className='flex p-5 text-center leading-[50px]'>
            {categories.map(category => (
              <li key={category._id} className='px-5 mx-2 hover:opacity-70 font-semibold'><Link to={`${category._id}`} className='hover:border-b-2 hover:border-solid hover:border-blue-400'>{category.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="menu-icon flex my-[30px]">
          <form action="" className='flex'
            onClick={() => handleSearch()}
          >
            <input type="text" name="search" placeholder="Nhập từ khoá để tìm kiếm..." required />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </form>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <Link to="cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header