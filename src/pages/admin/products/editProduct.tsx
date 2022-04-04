import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { read, update } from '../../api/product'
import type { categoryType, productType } from '../../type'
import { useForm, SubmitHandler } from "react-hook-form";
import { listCate } from '../../api/category';

type FormInputsName = {
  title: string,
  image: string,
  priceOld: number,
  priceNew: number,
  sale: string,
  desc: string,
  status: number,
  categoryId: number
}

function EditProduct() {
  const [products, setProducts] = useState<productType[]>([])
  const { reset, register, handleSubmit, formState: { errors } } = useForm<FormInputsName>()
  const navigate = useNavigate()
  const { id } = useParams()

  const [categories, setCategories] = useState<categoryType[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await listCate()
      setCategories(data)
    })()
  }, [])

  useEffect(() => {
    const readProduct = async (id: number | string | undefined) => {
      const { data } = await read(id)
      reset(data)
    }
    readProduct(id)
  }, [])

  const onSubmit: SubmitHandler<FormInputsName> = async (product) => {
    console.log(product)
    const { data } = await update(product)
    setProducts([...products, data])
    navigate('/admin/product')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className='text-3xl font-semibold text-center text-gray-800'>Edit Product</h2>
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
          UPDATE
        </button>
      </form>
    </div>
  )
}

export default EditProduct
