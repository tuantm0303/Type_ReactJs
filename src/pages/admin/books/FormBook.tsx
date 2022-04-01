import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { add, read, update } from '../../api/book'
import { bookType } from '../../type'
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputsName = {
  categoryId: number,
  name: string,
  price: number
}

function FormBook() {
  const [boos, setBooks] = useState<bookType[]>([])
  const { register, reset, handleSubmit, formState: { errors } } = useForm<FormInputsName>()
  const navigate = useNavigate()
  const { id } = useParams()

  // thêm DL mới
  const addBook = async (book: any) => {
    const { data } = await add(book)
    setBooks([...boos, data])
    navigate('/admin/book')
  }

  // lấy DL cũ
  const readBook = async (id: any) => {
    const { data } = await read(id)
    reset(data)
  }

  // sửa DL mới
  const updateBook = async (book: any) => {
    const { data } = await update(book)
    setBooks([...boos, data])
    navigate('/admin/book')
  }

  useEffect(() => {
    if (id) {
      readBook(id)
    }
  }, [id])

  const onSubmit: SubmitHandler<FormInputsName> = async (book: any) => {
    if (id) {
      return updateBook(book);
    }
    return addBook(book);
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
            {...register("name", { required: true, minLength: 6 })}
          />
          {errors.name && errors.name.type === 'required' && (<span style={{ color: "red" }}>This field is required</span>)}
          {errors.name && errors.name.type === 'minLength' && (<span style={{ color: "red" }}>Enter at least 6 characters</span>)}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            placeholder='Price'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <select {...register("categoryId", { required: true, valueAsNumber: true })} id="categoryId" className='form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-400 border-0 border-b-2 border-gray-500 bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:text-gray-700 text-sm focus:bg-white focus:border-blue-600 focus:outline-none'>
            <option value="">CategoryId</option>
            <option value="1">Giáo dục</option>
            <option value="2">Truyện</option>
            <option value="3">Kinh Tế</option>
          </select>
          {errors.categoryId && <span style={{ color: "red" }}>This field is required</span>}
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

export default FormBook