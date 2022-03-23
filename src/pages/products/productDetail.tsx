import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { read } from '../api/product';
import { productType } from '../type/product';

type Props = {}

function ProductDetail(props: Props) {
  const { id } = useParams()

  const [product, setProduct] = useState<productType>()

  const getProductDetail = async () => {
    const { data } = await read(id)
    console.log()
    setProduct(data)
  }

  useEffect(() => {
    getProductDetail()
  }, [])
  
  return (
    <div>
      <h2>{product?.name}</h2>
      <h2>{product?.price}</h2>
      <h2>{product?.desc}</h2>
    </div>
  );
}

export default ProductDetail