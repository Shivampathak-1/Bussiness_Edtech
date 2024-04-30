import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menubar from "../../components/Menubar/Menubar";
import Carousel from "../../components/Carousel/Carousel";
import image6 from "../../assets/images/image6.png";
import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import carousel4 from "../../assets/images/carousel4.jpg";
import Footer from '../../components/Footer/Footer'
function Home() {
  const images = [carousel1, carousel2, carousel3, carousel4];

  return (
    <>
      <div className=" w-screen">
      <Navbar />
      <Menubar />
      <div className="page-1 h-screen">
        <Carousel images={images} height={"80vh"} />
      </div>
      <div className="rem" style={{ width: "100%", height: "auto" }}>
        <div className="page2 flex items-start justify-around">
          <div className="page2-l ml-24" style={{ width: "30vw" }}>
            <img src={image6} alt="" className="rounded-3xl" />
          </div>
          <div
            className="page2-r mr-44 ml-0 text-white"
            style={{ width: "40vw" }}
          >
            <h1 className=" font-bold text-6xl mb-8">Bussiness Edtech</h1>
            <p style={{ width: "25vw", fontSize:'1.4rem' }}>
            Choose the best coaching institution according to the previous records of the company and also by comparison of so many factors among the group of ED-tech Industries.
            </p>
          </div>
        </div>
        <div className="page3 flex flex-col items-center mt-24">
          <div className="flex font-bold text-7xl mb-8">
            <span className=" text-white">Top 3</span>
            <span className="ml-2 text-orange-700">Company</span>
          </div>
          <iframe
            title="powerbi"
            width="1200"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiYjY4YzQyOWItMDZiNy00NGY5LTgwOTQtMTFjMWMyYTJmMzcxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div className="page4 mt-20">
          <Carousel images={images} height={"20vh"} />
        </div>
        <div className="page5 flex items-center justify-center mt-24">
          <iframe
            title="third"
            width="1200"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiOWJlYzJiZWYtMDNjOS00ZWM4LThkYTYtNGYyZGVkMDdiY2EyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            frameborder="0"
            allowFullScreen="false"
          ></iframe>
        </div>
        <div className="page6 flex items-center justify-center mt-24">
          <iframe
            title="second"
            width="1200"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiMWI2MDk0ODYtODYyYi00NDBmLTkyYWQtYTRjMTRjODUzZmMzIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default Home;
