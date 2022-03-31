import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { read } from '../../api/product';
import { productType } from '../../type';

type Props = {}

function ProductDetail(props: Props) {
  const { id } = useParams()

  const [product, setProduct] = useState<productType>()

  const getProductDetail = async () => {
    const { data } = await read(id)
    setProduct(data)
  }

  useEffect(() => {
    getProductDetail()
  }, [])
  
  return (
    <div className='bg-red-500 text-center'>
      <h2>Name: {product?.title}</h2>
      <h2>Price: {product?.priceOld}</h2>
      <h2>Description: {product?.desc}</h2>
    </div>
  );
}

export default ProductDetail