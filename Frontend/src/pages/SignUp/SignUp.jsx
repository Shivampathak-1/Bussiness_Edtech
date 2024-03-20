import React from "react";
import distance_learning from '../../assets/icons/distance-learning.png'
import "./SignUp.css";
function SignUp() {
  return (
    <>
      <div className="cont">
        <h1 className="heading">Create an account</h1>
        <div className="regbox">
          <div className="icon">
            <img id="iconr" src={distance_learning} alt="logo" />
          </div>
          <div className="name regalign">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="email regalign">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your username" />
          </div>
          <div className="contact regalign">
            <label htmlFor="contact">Phone No.</label>
            <input type="number" id="contact" placeholder="Phone No." />
          </div>
          <div className="passw regalign">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="regpassword"
              placeholder="Enter your password"
            />
          </div>
          <div className="confpass regalign">
            <label htmlFor="conpswd">Confirm Password</label>
            <input
              type="text"
              id="conpswd"
              placeholder="Re-enter your password"
            />
          </div>
          <div className="subm">
            <button type="submit" id="regBtn">Register</button>
          </div>
          <div className="already">
            Already have an account?<a href="/login"> Login here</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
