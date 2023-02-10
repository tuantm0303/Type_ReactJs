import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { read } from "../../api/product";
import { productType } from "../../type";

type Props = {};

function ProductDetail(props: Props) {
  const { id } = useParams();

  const [product, setProduct] = useState<productType>();

  const getProductDetail = async (slug: any) => {
    const { data } = await read(slug);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail(id);
  }, []);

  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        Detail Product
      </h2>
      <Link
        to="../"
        className="border-2 border-blue-500 float-right rounded-lg font-bold text-blue-500 px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mb-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Link>
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10 my-10">
        <div className="img-product">
          <img src={product?.image} alt={product?.image} />
        </div>
        <div className="desc-product">
          <h1 className="my-3 font-semibold text-lg text-orange-500">
            {product?.title}
          </h1>
          <p>{product?.desc}</p>
          <div rel-script="product-price" className="product-prices flex my-5">
            <ins className="text-red-500 text-4xl pr-5">
              {product?.priceNew} VND
            </ins>
            <del>{product?.priceOld} VND</del>
            <span className="text-red-500 text-sm px-5">
              - {product?.sale} %
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
