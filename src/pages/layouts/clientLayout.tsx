import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

function ClientLayout({ }: Props) {
  return (
    <div>
      <header>Client Website</header>
      <main>
        Content
        <Outlet />
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default ClientLayout