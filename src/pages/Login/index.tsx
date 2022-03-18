import React, { useState } from 'react'

type Login = {
  username: string,
  password: string
}

function Login(login: Login) {
  const [userName, setUserName] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')
  const handleSubmit = (): any => {
    const data = {
      userName: userName,
      passWord: passWord,
    }
    console.log(data)
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder='username'
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder='username'
          onChange={(e) => setPassWord(e.target.value)}
        />
        <button type="submit" onClick={() => handleSubmit()}></button>
      </form>
    </div>
  )
}

export default Login