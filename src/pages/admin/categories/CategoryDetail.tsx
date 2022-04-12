import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { read } from '../../api/category';
import type { categoryType } from '../../type';

type Props = {}

function CategoryDetail(props: Props) {
  const { id } = useParams()

  const [category, setCategory] = useState<categoryType>()

  const getCategoryDetail = async () => {
    const { data } = await read(id)
    setCategory(data)
  }

  useEffect(() => {
    getCategoryDetail()
  }, [])

  return (
    <div className='bg-red-500 text-center'>
      <Link to='../' className='border-2 border-blue-500 float-right rounded-lg font-bold text-blue-500 px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mb-5'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <h2>Name: {category?.name}</h2>
    </div>
  );
}

export default CategoryDetail