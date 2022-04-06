import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SimpleSlider() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  const settings = {
    fade: true,
    speed: 500, // ms
    autoplay: false,
    initialSlide: 2,
    lazyLoad: true,
    autoplaySpeed: 3000,
  }

  const hotelCards = [
    {
      imageSrc: 'https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/4-130x87.png'
    },
    {
      imageSrc: 'https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/2-130x87.png'
    },
    {
      imageSrc: 'https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/1-130x87.png'
    },
    {
      imageSrc: 'https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/7-130x87.png'
    },
    {
      imageSrc: 'https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/5-130x87.png'
    },
    {
      imageSrc: 'https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/6-130x87.png'
    }
  ]

  return (
    <div className='content w-[1400px] mx-auto my-20'>
      {/* <div className="controls">
        <button onClick={sliderRef?.slickPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Caret Back</title><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z" /></svg>
        </button>
        <button onCLick={sliderRef?.slickNext}>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Caret Forward</title><path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" /></svg>
        </button>
      </div> */}
      <Slider ref={setSliderRef} {...sliderSettings} className="w-[1000px]">
        {hotelCards.map((card, index) => (
          <div key={index} className="w-[100px]">
            <img alt={card.title} src={card.imageSrc} />
          </div>
        ))}
      </Slider>
    </div>
  )
}