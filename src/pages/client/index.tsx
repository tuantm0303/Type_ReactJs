import ProductLists from '../../components/ProductLists'
import ImgBanner from '../../components/ImgBanner'
import { Outlet } from 'react-router-dom'

function ClientPage() {
  return (
    <>
      <Outlet />
      <ProductLists
        title="Tất cả sản phẩm"
      />
      <ImgBanner />
      {/* <SimpleSlider /> */}
    </>
  )
}

export default ClientPage