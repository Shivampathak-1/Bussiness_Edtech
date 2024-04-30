import {React, useState} from "react";
import distance_learning from "../../assets/icons/distance-learning.png";
import {Link, useNavigate} from 'react-router-dom'
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";


function Login() {

    const [credential, setCredential] = useState({ email: "", password: "" });
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataJs = {
      email: credential.email,
      password: credential.password,
    }
    const response = await fetch("http://127.0.0.1:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataJs),
    });
    const data = await response.json();
    console.log(data);
    if(data.message === "LoggedIn Successfully"){
        localStorage.setItem("token", data.authtoken);
        localStorage.setItem("IsloggedIn", true )
        
        navigator("/");
        window.location.reload();
    }
    else{
      alert("Invalid Credentials");
    }
  };

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
      };

  return (
    <>
      <Navbar/>
      <div className="container">
        <h1 id="heading">Login Here</h1>
        <form onSubmit={handleSubmit}>
        <div className="box">
          <div className="icon">
            <img id="iconl" src={distance_learning} alt="logo" />
          </div>
          <div className="userna align">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="email"
                value={credential.email}
                onChange={onChange} placeholder="UserName" />
          </div>
          <div className="passwor align">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"
                value={credential.password}
                onChange={onChange} placeholder="Password" />
          </div>
          <div className="remember">
            <div className="remMe">
              <input type="checkbox" name="check" id="checked" />
              <label className="fontsz" htmlFor="checked">
                Remember Me
              </label>
            </div>
            <div className="forgot">
              <a href="/forgotpassword">
                <span>Forgot Password?</span>
              </a>
            </div>
          </div>
          <div className="logBut">
            <button type="submit" id="button">
              Login
            </button>
          </div>
          <div className="reg">
            <span className="fontsz">
              Don't you have an account?
              <a href="/signup" className="regis">
                Register Now!
              </a>
            </span>
          </div>
          <div className="otherReG">
            <h2>_________ or _________</h2>
          </div>
        </div>
        </form>
        <h1 id="bname">Bussiness Edtech</h1>
      </div>
    </>
  );
}

export default Login;
