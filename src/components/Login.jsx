import React from 'react'

const Login = () => {
  return (
    <p>
        <div className="form-group">
            <label htmlFor="">
                Tài khoản
            </label>
            <input type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="">
                Mật khẩu
            </label>
            <input type="text" />
        </div>
    </p>
  )
}

export default Login