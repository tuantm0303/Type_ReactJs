import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../pages/api/user'
import { userType } from '../pages/type'

type InputValue = {
  name: string,
  email: string,
  password: string
}

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<InputValue>()
  const [users, setUsers] = useState<userType[]>([])
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<InputValue> = async (user: any) => {
    const { data } = await signup(user)
    localStorage.setItem("user", JSON.stringify(data.user));
    setUsers([...users, data])
    navigate("/")
  }

  return (
    <div className='grid grid-cols-12'>
      <div className="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
        <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="row-span-4 row-start-2 text-4xl">
            Sign Up
            <div className="pt-10 pr-20">
              <label className="text-sm font-sans font-medium">Username</label>
              <input
                type="text"
                placeholder="Write your username"
                className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="pt-2 pr-20">
              <label className="text-sm font-sans font-medium">Email</label>
              <input
                type="email"
                placeholder="Write your email"
                className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="pt-2 pr-20">
              <label className="text-sm font-sans font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Write your password"
                className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
              <button
                className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="banner col-span-8 text-white font-sans font-bold">
        <img className='bg-cover bg-no-repeat h-full' src="https://s1.1zoom.me/b6058/448/Dogs_Svetlana_Shelemeteva_Hug_Little_girls_568770_1920x1080.jpg" alt="" />
      </div>
    </div>
  )
}

export default SignUp