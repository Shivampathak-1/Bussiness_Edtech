import React from 'react'
import './Login.css'
import distance_learning from '../../assets/icons/distance-learning.png'

function Login() {
  return (
    <>
      <div className="container">
        <h1 id='heading'>Login Here</h1>
        <div className="box">
            <div className="icon">
                <img id='iconl' src={distance_learning} alt="logo" />
            </div>
            <div className="userna align">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='UserName'/>
            </div>
            <div className="passwor align">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Password'/>
            </div>
            <div className="remember">
                <div className="remMe">
                    <input type="checkbox" name="check" id="checked"/>
                    <label className='fontsz' htmlFor="checked">Remember Me</label>
                </div>
                {/* div for Forgot Password */}
                <div className="forgot">
                    <a href="/forgotpassword"><span>Forgot Password?</span></a>
                </div>
            </div>
            <div className="logBut">
                <button type='submit' id='button'>Login</button>
            </div>
            <div className="reg">
                <span className='fontsz'>Don't you have an account?<a href="/signup" className='regis'>Register Now!</a></span>
            </div>
            <div className="otherReG">
                <h2>_________ or _________</h2>
            </div>
        </div>
        <h1 id='bname'>Bussiness Edtech</h1>
      </div>
    </>
  )
}

export default Login
