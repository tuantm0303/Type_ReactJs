import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { add } from '../api/post'
import { postType } from '../type/post'
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputsName = {
  title: string,
  desc: string,
  author: string,
  category: string,
  thumbnail: string,
  status: string,
}

function AddPost() {
  const [posts, setPosts] = useState<postType[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputsName>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormInputsName> = async (post: any) => {
    const { data } = await add(post)
    setPosts([...posts, data])
    navigate('/post')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            placeholder='Title'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("title", { required: true, minLength: 5 })}
          />
          {errors.title && errors.title.type === 'required' && (<span style={{ color: "red" }}>This field is required</span>)}
          {errors.title && errors.title.type === 'minLength' && (<span style={{ color: "red" }}>Enter at least 5 characters</span>)}
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
          <input
            type="text"
            placeholder='Author'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("author", { required: true })}
          />
          {errors.author && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            placeholder='Category'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("category", { required: true })}
          />
          {errors.category && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            placeholder='Thumbnail'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("thumbnail", { required: true })}
          />
          {errors.thumbnail && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            placeholder='Status'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("status", { required: true })}
          />
          {errors.status && <span style={{ color: "red" }}>This field is required</span>}
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

export default AddPost