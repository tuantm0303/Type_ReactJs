import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

function ProductOutlet({}: Props) {
  return (
    <div>
      <header>HEADER</header>
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  )
}

export default ProductOutlet