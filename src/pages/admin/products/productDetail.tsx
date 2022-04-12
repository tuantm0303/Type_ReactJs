import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { read } from '../../api/product';
import { productType } from '../../type';

type Props = {}

function ProductDetail(props: Props) {
  const { id } = useParams()

  const [product, setProduct] = useState<productType>()

  const getProductDetail = async (slug: any) => {
    const { data } = await read(slug)
    setProduct(data)
  }

  useEffect(() => {
    getProductDetail(id)
  }, [])

  return (
    <div className='bg-red-500 text-center'>
      <Link to='../' className='border-2 border-blue-500 float-right rounded-lg font-bold text-blue-500 px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mb-5'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <h2>Name: {product?.title}</h2>
      <h2>Price: {product?.priceOld}</h2>
      <h2>Description: {product?.desc}</h2>
    </div>
  );
}

export default ProductDetail