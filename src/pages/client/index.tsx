import ProductLists from '../../components/ProductLists'
import ImgBanner from '../../components/ImgBanner'
import { Outlet } from 'react-router-dom'

function ClientPage() {
  return (
    <>
      <Outlet />
      <ProductLists />
      <ImgBanner />
      {/* <SimpleSlider /> */}
    </>
  )
}

export default ClientPage