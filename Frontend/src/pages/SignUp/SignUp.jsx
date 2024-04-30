import {React, useState} from "react";
import distance_learning from "../../assets/icons/distance-learning.png";
import {Link, useNavigate} from 'react-router-dom'
import "./SignUp.css";
import Navbar from "../../components/Navbar/Navbar";


function SignUp() {

  const [credential, setCredential] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPass: "",
  });

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataJs = {
      name: credential.name,
      email: credential.email,
      mobile: credential.mobile,
      password: credential.password,
      confirmPass: credential.confirmPass,
      profile_image: "http://127.0.0.1:3001/image/user.png",
    };
    const response = await fetch("http://127.0.0.1:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataJs),
    });
    const data = await response.json();
    console.log(data);
    if (data.message === "Registered Successfully") {
      // localStorage.setItem("token", data.authtoken);
      // localStorage.setItem("IsloggedIn", true )
      alert("Registered Successfully");
      navigator("/login");
      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
  };


  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar/>
      <div className="cont">
        <h1 className="heading">Create an account</h1>
        <form onSubmit={handleSubmit}>
          <div className="regbox">
            <div className="icon">
              <img id="iconr" src={distance_learning} alt="logo" />
            </div>
            <div className="name regalign">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={credential.name}
                onChange={onChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="email regalign">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={credential.email}
                onChange={onChange}
                placeholder="Enter your username"
              />
            </div>
            <div className="contact regalign">
              <label htmlFor="contact">Phone No.</label>
              <input
                type="number"
                id="contact"
                name="mobile"
                value={credential.mobile}
                onChange={onChange}
                placeholder="Phone No."
              />
            </div>
            <div className="passw regalign">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="regpassword"
                name="password"
                  value={credential.password}
                  onChange={onChange}
                placeholder="Enter your password"
              />
            </div>
            <div className="confpass regalign">
              <label htmlFor="conpswd">Confirm Password</label>
              <input
                type="text"
                id="conpswd"
                name="confirmPass"
                  value={credential.confirmPass}
                  onChange={onChange}
                placeholder="Re-enter your password"
              />
            </div>
            <div className="subm">
              <button type="submit" id="regBtn">
                Register
              </button>
            </div>
            <div className="already">
              Already have an account?<a href="/login"> Login here</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
