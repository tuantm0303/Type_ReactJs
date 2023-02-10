import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { add, read, update } from "../../api/category";
import type { categoryType } from "../../type";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type FormInputsName = {
  name: string;
};

function FormCategory() {
  const [categories, setCategories] = useState<categoryType[]>([]);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsName>();
  const navigate = useNavigate();
  const { id } = useParams();

  // thêm DL mới
  const addCategory = async (category: any) => {
    const { data } = await add(category);
    setCategories([...categories, data]);
    navigate("/admin/category");
    (() => toast.success("Thêm danh mục thành công!!"))();
  };

  // lấy DL cũ
  useEffect(() => {
    const readCategory = async (id: number | string | undefined) => {
      const { data } = await read(id);
      reset(data);
    };
    readCategory(id);
  }, [id]);

  // sửa DL mới
  const updateCategory = async (category: categoryType) => {
    const { data } = await update(category);
    setCategories([...categories, data]);
    navigate("/admin/category");
    (() => toast.success("Sửa danh mục thành công!!"))();
  };

  const onSubmit: SubmitHandler<FormInputsName> = async (category: any) => {
    if (id) {
      return updateCategory(category);
    }
    return addCategory(category);
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
        Form Categories
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            placeholder="Name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            {...register("name", { required: true, minLength: 5 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span style={{ color: "red" }}>Enter at least 5 characters</span>
          )}
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormCategory;
