import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menubar from "../../components/Menubar/Menubar";
import Footer from "../../components/Footer/Footer";
import shivam from '../../assets/images/shivamm.png';
import logo from '../../assets/images/logo.png';
import bharath from '../../assets/images/bharathh.png';
import nikhil from '../../assets/images/nikhill.png';
import utkarsh from '../../assets/images/utkarshh.png';
function About() {
  return (
    <>
      <Navbar />
      <Menubar />
      <div className="page h-auto text-white w-screen">
        <div className="page1 h-auto flex-col items-center justify-center w-full">
          <p className=" text-center mt-20 text-5xl">
            About Us
          </p>
          <p className="abcd text-center text-lg" style={{margin: '2vw 24vw'}}>
          Indian ED Tech Industry has grown rapidly  in the last decade since 2011 till the COVID pandemic, After that the majority of the companies encountered losses , So many companies lost its public attention from the people, so that hard for students to choose an ED Tech Company from among a group of companies, But with the help of our project student can able to choose the particular company by observing lot of factors. The final goal of this project is to develop software that can help the students to choose a desired coaching platform according to his/her own choice.          </p>
        </div>
        <div className="srcc flex justify-center items-center mt-24">
          <img src="https://imgs.search.brave.com/oHAEGnFm0cnZGrJ55_7gK5t9HzQJkuu0Di9HP1mG5hk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhldGVjaGVkdm9j/YXRlLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wMi9o/YWNrYXRob24tNjYw/eDQwMC5wbmc" alt="" />
        </div>
        
        <h1 className="abb mt-24 ml-64 text-2xl">Team Info:-</h1>
        <div className="teaminfo mt-6 ml-96">
          <div className="w-full">
            <div className="flex border w-64 rounded-full mb-4 items-center self-end">
              <img src={shivam} alt="" className="shivamm h-16 rounded-full"/>
              <div className="ml-4">
                <p>Shivam Kumar Pathak</p>
                <p>E22CSEU1097</p>
                <p>Frontend + Backend Developer</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex border w-64 rounded-full mb-4 items-center ml-96">
              <img src={bharath} alt="" className="shivamm h-16 rounded-full" style={{borderRadius:'2px solid white'}}/>
              <div className="ml-4">
                <p>Somala Bharath Sai</p>
                <p>E22CSEU1094</p>
                <p>Team Lead</p>
              </div>
            </div>
          </div><div className="w-full">
            <div className="flex border w-64 rounded-full mb-4 items-center self-end">
              <img src={nikhil} alt="" className="shivamm h-16 rounded-full"/>
              <div className="ml-2">
                <p>Deshmukh Nikhi Dipak</p>
                <p>E22CSEU1099</p>
                <p>DataAnalyst + UI/UX Designer</p>
              </div>
            </div>
          </div><div className="w-full">
            <div className="flex border w-64 rounded-full mb-4 items-center ml-96">
              <img src={utkarsh} alt="" className="shivamm h-16 rounded-full"/>
              <div className="ml-2">
                <p>Utkarsh Maurya</p>
                <p>E22CSEU1107</p>
                <p>Research</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bsnlogo flex justify-center mt-32">
          <img src={logo} alt=""/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
