import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { add, read, update } from '../../api/category'
import { categoryType } from '../../type'
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputsName = {
  name: string,
}

function FormCategory() {
  const [categories, setCategories] = useState<categoryType[]>([])
  const { register, reset, handleSubmit, formState: { errors } } = useForm<FormInputsName>()
  const navigate = useNavigate()
  const { id } = useParams()

  // thêm DL mới
  const addCategory = async (category: any) => {
    const { data } = await add(category)
    setCategories([...categories, data])
    navigate('/admin/category')
  }

  // lấy DL cũ
  const readCategory = async (id: any) => {
    const { data } = await read(id)
    reset(data)
  }

  // sửa DL mới
  const updateCategory = async (category: any) => {
    const { data } = await update(category)
    setCategories([...categories, data])
    navigate('/admin/category')
  }

  useEffect(() => {
    if (id) {
      readCategory(id)
    }
  }, [id])
  
  const onSubmit: SubmitHandler<FormInputsName> = async (category: any) => {
    if (id) {
      return updateCategory(category);
    }
    return addCategory(category);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className='text-3xl font-semibold text-center text-gray-800'>Form Categories</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            placeholder='Name'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("name", { required: true, minLength: 5 })}
          />
          {errors.name && errors.name.type === 'required' && (<span style={{ color: "red" }}>This field is required</span>)}
          {errors.name && errors.name.type === 'minLength' && (<span style={{ color: "red" }}>Enter at least 5 characters</span>)}
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormCategory