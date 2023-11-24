import React from 'react'
import AddAvatar from "../img/addAvatar.png"

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">LettuceChat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Login</button>
            </form>
            <p>Don't have a patch? Create!</p>
        </div>
    </div>
  )
}

export default Login;