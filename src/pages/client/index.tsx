import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import ProductLists from '../../components/ProductLists'
import ImgBanner from '../../components/ImgBanner'
import SimpleSlider from '../../components/SimpleSlider'

function ClientPage() {
  return (
    <>
      <Header />
      <Banner />
      <ProductLists />
      <ImgBanner />
      {/* <SimpleSlider /> */}
      <Footer />
    </>
  )
}

export default ClientPage