import React from 'react'
import './SignUp.css'
function SignUp() {
  return (
    <>
      <div className="cont">
        <h1>Create an account</h1>
        <div className="regbox">
            <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Enter your name'/>
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder='Enter your username'/>
            </div>
            <div className="contact">
                <label htmlFor="contact">Phone No.</label>
                <input type="number" id='contact' placeholder='Phone No.' />
            </div>
            <div className="passw">
                <label htmlFor="password">Password</label>
                <input type="password" id='regpassword' placeholder='Enter your password' />
            </div>
            <div className="confpass">
                <label htmlFor="conpswd">Confirm Password</label>
                <input type="text" id='conpswd' placeholder='Re-enter your password' />
            </div>
            <div className="subm">
                <button type='submit'>Register</button>
            </div>
            <div className="already">
                Already have an account?<a href="/login"> Login here</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
