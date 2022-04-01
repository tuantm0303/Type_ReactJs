import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { read } from '../../api/post';
import { postType } from '../../type';

type Props = {}

function PostDetail(props: Props) {
  const { id } = useParams()

  const [post, setPost] = useState<postType>()

  const getPostDetail = async () => {
    const { data } = await read(id)
    setPost(data)
  }

  useEffect(() => {
    getPostDetail()
  }, [])
  
  return (
    <div className='bg-red-500 text-center'>
      <h2>Title: {post?.title}</h2>
      <h2>Description: {post?.desc}</h2>
      <h2>Author: {post?.author}</h2>
      <h2>Category: {post?.category}</h2>
      <h2>Thumbnail: {post?.thumbnail}</h2>
      <h2>Status: {post?.status}</h2>
    </div>
  );
}

export default PostDetail