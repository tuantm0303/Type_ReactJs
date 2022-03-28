import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

function ProductOutlet({}: Props) {
  return (
    <>
      <Outlet />
    </>
  )
}

export default ProductOutlet