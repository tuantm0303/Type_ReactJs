import { Outlet } from 'react-router-dom'

type Props = {}

function BookOutlet({ }: Props) {
  return (
    <>
      <Outlet />
    </>
  )
}

export default BookOutlet