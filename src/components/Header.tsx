import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { listCate } from '../pages/api/category'
import { categoryType } from '../pages/type'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthenticate } from '../utils/localStorage';

function Header() {
  const [categories, setCategories] = useState<categoryType[]>([])
  const [search, setSearch] = useState<string>('')
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCate()
      setCategories(data)
    }
    getCategories()
  }, [])

  const navigate = useNavigate()
  const onHandleSearch = () => {
    if (search !== '') {
      navigate(`search?q=${search}`)
    }
  }
  const signout = () => {
    localStorage.removeItem("user");
    (() => toast.success("Bạn đã đăng xuất!!"))()
  }
  const user = isAuthenticate();
  if (user) {
    return (
      <>
        <ToastContainer />
        <header className="header-main text-center h-[100px]">
          <div className="flex justify-between">
            <div className="name-student px-[50px] leading-[50px]">PH13096 - TRỊNH MINH TUẤN</div>
            <ul className='flex p-5 justify-end text-center leading-[10px]'>
              <li className='px-2 hover:opacity-70 font-semibold'><Link to="/admin" className='hover:border-b-2 hover:border-solid hover:border-blue-400'>{user.user.name}</Link></li>
              <li className='px-2 hover:opacity-70 font-semibold'><button onClick={() => signout()} className='hover:border-b-2 font-semibold hover:border-solid hover:border-blue-400'>Signout</button></li>
            </ul>
          </div>
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
            <div className="menu-icon flex my-[15px]">
              <form action="">
                <div className=" pt-2 relative mx-auto  text-gray-600">
                  <input onChange={(e) => setSearch(e.target.value)} className="border-2 border-gray-300 bg-white h-10 pr-10  px-2 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                  <button type="button" onClick={() => onHandleSearch()} className="absolute right-0 top-0 mt-5 mr-4">
                    <svg className=" text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                      version="1.1" id="Capa_1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966"
                      width="512px" height="512px">
                      <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </form>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <Link to="cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </header>
      </>
    )
  }
  return (
    <>
      <ToastContainer />
      <header className="header-main text-center h-[100px]">
        <ul className='flex p-5 justify-end text-center leading-[10px]'>
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
            <form action="" className='flex'>
              <input type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder="Nhập từ khoá để tìm kiếm..." required />
              <button type='button' onClick={() => onHandleSearch()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
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
    </>
  )
}

export default Header