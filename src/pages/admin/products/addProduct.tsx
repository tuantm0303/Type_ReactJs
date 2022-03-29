import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { add } from '../../api/product'
import { productType } from '../../type'
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputsName = {
  name: string,
  price: number,
}

function AddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputsName>()
  const [products, setProducts] = useState<productType[]>([])
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormInputsName> = async (product: any) => {
    const { data } = await add(product)
    setProducts([...products, data])
    navigate('/admin/product')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            placeholder='Name'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("name", { required: true })}
          />
          {errors.name && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            placeholder='Price'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("price", { required: true, valueAsNumber: true })} //valueAsNumber convert number
          />
          {errors.price && <span style={{ color: "red" }}>This field is required</span>}
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
