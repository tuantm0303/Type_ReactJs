import { Outlet } from 'react-router-dom'

type Props = {}

function CategoryOutlet({ }: Props) {
  return (
    <>
      <Outlet />
    </>
  )
}

export default CategoryOutlet