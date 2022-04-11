import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../pages/api/product'
import { productType } from '../pages/type'

function DetailPage() {
  const [product, setProduct] = useState<productType>()
  const { id } = useParams()

  useEffect(() => {
    const getProduct = async (slug: any) => {
      const { data } = await read(slug)
      setProduct(data)
    }
    getProduct(id)
  }, [])

  return (
    <>
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10 my-10">
        <div className="img-product">
          <img src={product?.image} alt={product?.image} />
        </div>
        <div className="desc-product">
          <h1 className="my-3 font-semibold text-lg text-orange-500">{product?.title}</h1>
          <p>{product?.desc}</p>
          <div rel-script="product-price" className="product-prices flex my-5">
            <ins className="text-red-500 text-4xl pr-5">{product?.priceNew} VND</ins>
            <del>{product?.priceOld} VND</del>
            <span className="text-red-500 text-sm px-5">- {product?.sale} %</span>
          </div>
          <div className="addtocart flex">
            <input type="number" id="inputValue" className="m-2 p-2 input-quantity border-2 border-solid rounded-xl items-center h-10 w-14 leading-4" />
            <button id="btn-add-to-cart"
              className="btn m-2 border-2 border-solid border-red-400 rounded-xl bg-red-400 w-full text-white h-10 hover:opacity-90">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage