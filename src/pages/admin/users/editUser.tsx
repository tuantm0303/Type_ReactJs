import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { read, update } from "../../api/user";
import type { userType } from "../../type";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type FormInputsName = {
  role: number;
};

function EditUser() {
  const [user, setUser] = useState<userType[]>([]);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsName>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const readProduct = async (id: number | string | undefined) => {
      const { data } = await read(id);
      reset(data);
    };
    readProduct(id);
  }, []);

  const onSubmit: SubmitHandler<FormInputsName> = async (product) => {
    const { data } = await update(product);
    setUser([...user, data]);
    navigate("/admin/user");
    (() => toast.success("Sửa sản phẩm thành công!!"))();
  };

  return (
    <div className="max-w-2xl mx-auto">
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
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        Edit Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 mb-6 w-full group">
          <select
            id="status"
            {...register("role", { required: true, valueAsNumber: true })}
            className="form-select appearance-none block w-full px-3 py-1.5 font-normal text-gray-400 border-0 border-b-2 border-gray-500 bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:text-gray-700 text-sm focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="">Role</option>
            <option value="1">Admin</option>
            <option value="0">Client</option>
          </select>
          {errors.role && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          UPDATE
        </button>
      </form>
    </div>
  );
}

export default EditUser;
