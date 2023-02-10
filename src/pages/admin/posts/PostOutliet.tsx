import { Outlet } from 'react-router-dom'

type Props = {}

function PostOutlet({ }: Props) {
  return (
    <>
      <Outlet />
    </>
  )
}

export default PostOutlet