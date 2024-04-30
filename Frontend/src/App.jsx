import React from 'react'
import Home from  './pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Support from './pages/Support/Support'
function App() {
  const loggedIn = window.localStorage.getItem("IsloggedIn");
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path="/" element={loggedIn?<Home/>:<Login/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/aboutus" element={<About/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
