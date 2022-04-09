import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function OutletPage() {
  return (
    <>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </>
  )
}

export default OutletPage