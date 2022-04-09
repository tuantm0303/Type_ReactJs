import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
      <h2>Name: {category?.name}</h2>
    </div>
  );
}

export default CategoryDetail