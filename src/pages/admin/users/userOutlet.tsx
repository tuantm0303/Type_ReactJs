import { Outlet } from 'react-router-dom'

type Props = {}

function UserOutlet({ }: Props) {
  return (
    <>
      <Outlet />
    </>
  )
}

export default UserOutlet