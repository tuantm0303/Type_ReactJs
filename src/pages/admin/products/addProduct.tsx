import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { add } from '../../api/product'
import type { categoryType } from '../../type'
import { useForm, SubmitHandler } from "react-hook-form";
import { listCate } from '../../api/category';
import { toast } from 'react-toastify';

type FormInputsName = {
  title: string,
  image: string,
  priceNew: number,
  priceOld: number,
  sale: string,
  desc: string,
  status: number,
  categoryId: string
}

function AddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputsName>()
  const navigate = useNavigate()
  const [categories, setCategories] = useState<categoryType[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await listCate()
      setCategories(data)
    })()
  }, [])

  const onSubmit: SubmitHandler<FormInputsName> = async (product: any) => {
    try {
      const { data } = await add(product)
      navigate('/admin/product');
      (() => toast.success("Thêm sản phẩm thành công!!"))()
    } catch (error: any) {
      console.log(error.response.data.error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link to='../' className='border-2 border-blue-500 float-right rounded-lg font-bold text-blue-500 px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mb-5'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <h2 className='text-3xl font-semibold text-center text-gray-800'>Add Products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            placeholder='Title'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("title", { required: true, minLength: 5 })}
          />
          {errors.title && errors.title.type === 'required' && <span style={{ color: "red" }}>This field is required</span>}
          {errors.title && errors.title.type === 'minLength' && <span style={{ color: "red" }}>Enter at least 5 characters</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            multiple
            placeholder='Image'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("image", { required: true })}
          />
          {errors.title && errors.title.type === 'required' && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            placeholder='PriceOld'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("priceOld", { valueAsNumber: true })} //valueAsNumber convert number
          />
          {errors.priceOld && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            placeholder='PriceNew'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("priceNew", { required: true, valueAsNumber: true })} //valueAsNumber convert number
          />
          {errors.priceNew && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            placeholder='Sale'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("sale", { valueAsNumber: true })} //valueAsNumber convert number
          />
          {errors.sale && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            placeholder='Description'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("desc", { required: true })}
          />
          {errors.desc && <span style={{ color: "red" }}>This field is required</span>}
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <select id="status" {...register("status", { required: true, valueAsNumber: true })} className='form-select appearance-none block w-full px-3 py-1.5 font-normal text-gray-400 border-0 border-b-2 border-gray-500 bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:text-gray-700 text-sm focus:bg-white focus:border-blue-600 focus:outline-none'>
                <option value="">Status</option>
                <option value="1">Kích hoạt</option>
                <option value="2" >Chưa kích hoạt</option>
              </select>
              {errors.status && <span style={{ color: "red" }}>This field is required</span>}
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <select {...register("categoryId", { required: true })} id="categoryId" className='form-select appearance-none block w-full px-3 py-1.5 font-normal text-gray-400 border-0 border-b-2 border-gray-500 bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:text-gray-700 text-sm focus:bg-white focus:border-blue-600 focus:outline-none'>
                <option value="">CategoryId</option>
                {categories.map((category, index) => (
                  <option key={index} value={category._id}>{category.name}</option>
                ))}
              </select>
              {errors.categoryId && <span style={{ color: "red" }}>This field is required</span>}
            </div>
          </div>
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ADD
        </button>
      </form>
    </div>
  )
}

export default AddProduct
