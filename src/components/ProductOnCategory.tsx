import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { readProOnCate } from "../pages/api/category";
import type { categoryType, productType } from "../pages/type/index";
import { formatter } from "../utils/formatterPrice";

function ProductOnCategory() {
  const { id } = useParams();

  const [categories, setCategories] = useState<categoryType>();
  const [products, setProduct] = useState<productType[]>([]);

  const getProOnCate = async () => {
    const { data } = await readProOnCate(id);
    setCategories(data.categoryId);
    setProduct(data.products);
  };

  useEffect(() => {
    getProOnCate();
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-4xl pb-5">
        {categories?.name}
      </h1>
      <div className="product-show flex pb-10 relative">
        {products.map((product) => (
          <div
            key={product._id}
            className="group products p-1 pb-5 border-2 border-solid border-gray-400 m-3 w-[275px] rounded-lg shadow-2xl relative"
          >
            <div className="product-img relative">
              <div className="product-reviews flex justify-between w-full absolute z-20">
                <div className="star-quantily flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 mx-1 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 mx-1 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 mx-1 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 mx-1 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 mx-1 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <div className="quantily">
                    <span className="text-red-500 text-sm">(5)</span>
                  </div>
                </div>
                <button className="tags border-2 rounded-xl h-7 w-11 bg-red-500 text-white-500">
                  New
                </button>
              </div>
              <div className="pro-img ">
                <Link to={`/detail/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.image}
                    className="w-[385px] h-[270px] object-cover"
                  />
                </Link>
              </div>
              <div className="group-hover:translate-y-[-50px] w-[95%] product-btn relative translate-y-[60px] duration-100 mx-auto">
                <button className="btn border-2 overflow-hidden border-solid border-blue-500 rounded-xl bg-blue-500 w-full h-10">
                  <a href="#">Mua ngay</a>
                </button>
              </div>
              <div className="product-heading pl-2 relative bg-white py-5">
                <h3 className="product-title font-semibold text-sm">
                  {product.title}
                </h3>
                <div className="product-price">
                  <div
                    rel-script="product-price"
                    className="product-prices flex"
                  >
                    <ins className="text-red-500 text-sm pr-5">
                      {formatter.format(product.priceNew)}
                    </ins>
                    <del className="text-xs">
                      {formatter.format(product.priceOld)}
                    </del>
                    <span className="text-red-500 text-sm px-5">
                      {product.sale}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-full"></div>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default ProductOnCategory;
