import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

function AdminLayout({}: Props) {
  return (
    <div>
      <header>Admin Page</header>
      <div className="row">
        <div className="col-1">
          <aside>Aside</aside>
        </div>
        <div className="col-10">
          <main>
            Content
            <Outlet />
            {/* Day se la phan co su thay doi khi render */}
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout