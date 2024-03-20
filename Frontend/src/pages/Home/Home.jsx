import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Hero from '../../components/Hero/Hero'
function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default Home
