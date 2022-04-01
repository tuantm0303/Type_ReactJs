import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { read } from '../../api/book';
import { bookType } from '../../type';

type Props = {}

function BookDetail(props: Props) {
  const { id } = useParams()

  const [book, setBook] = useState<bookType>()

  const getBookDetail = async () => {
    const { data } = await read(id)
    setBook(data)
  }

  useEffect(() => {
    getBookDetail()
  }, [])
  
  return (
    <div className='bg-red-500 text-center'>
      <h2>Name: {book?.name}</h2>
      <h2>Price: {book?.price}</h2>
      <h2>CategoryId: {book?.categoryId}</h2>
    </div>
  );
}

export default BookDetail