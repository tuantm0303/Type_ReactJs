import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import ProductLists from '../../components/ProductLists'
import ImgBanner from '../../components/ImgBanner'
import SlickSlider from '../../components/SlickSlider'

function ClientPage() {
  return (
    <>
      {/* <div className="relative"> */}

      <Header />
      {/* </div> */}
      {/* <div className="relative"> */}
      <Banner />

      {/* </div> */}
      {/* <div className="relative"> */}
      <ProductLists />

      {/* </div> */}
      {/* <div className="relative"> */}
      <ImgBanner />

      {/* </div> */}
      <SlickSlider />
      {/* <div className='relative'>  */}
      <Footer />
      {/* </div> */}

    </>
  )
}

export default ClientPage