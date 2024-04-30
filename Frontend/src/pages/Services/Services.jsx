import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menubar from "../../components/Menubar/Menubar";
import Footer from "../../components/Footer/Footer";
import image from '../../assets/images/Group6.png'
function Services() {
  const companyInfo = {
    "BYJU'S": "About: BYJU'S is an Indian educational technology and online tutoring firm founded in 2011 by Byju Raveendran. The company offers learning programs for students in grades K-12 and competitive exams like JEE, NEET, CAT, and IAS. Scope: BYJU'S has a wide scope in the education sector, providing interactive and adaptive learning solutions to students across India. Its innovative approach to education has gained popularity among students and parents alike. Reason Behind Downfall: Despite its initial success, BYJU'S faced criticism for its high pricing and aggressive marketing tactics. Additionally, the company encountered challenges in maintaining quality standards and addressing the diverse learning needs of students.",
    "Unacademy": "Unacademy, founded in 2015 by Gaurav Munjal, Hemesh Singh, and Roman Saini, is one of India's leading online learning platforms. Initially focused on test preparation for competitive exams, it has expanded to offer a wide range of courses across various subjects and languages. Unacademy provides live classes, recorded lectures, and interactive sessions conducted by experienced educators. The platform leverages technology to make learning accessible and affordable for millions of students across India. With a mission to democratize education, Unacademy offers courses for exams like UPSC, SSC, banking, JEE, NEET, and many more. It also features specialized courses in skills such as programming, language learning, and personal development. Through its subscription-based model, Unacademy provides students with unlimited access to high-quality educational content. The platform has garnered widespread popularity and has become a go-to destination for learners seeking quality education outside traditional classrooms.",
    "Vedantu": "Information about Vedantu goes here...",
    "UpGrad": "Information about UpGrad goes here...",
    "Toppr": "Information about Toppr goes here...",
    "Simplilearn": "Information about Simplilearn goes here...",
    "Talentedge": "Information about Talentedge goes here..."
  };

  const [selectedCompany, setSelectedCompany] = useState('');

  const handleChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Menubar />
      <div className="page h-auto">
        <div className="pageserl-1 h-auto mt-24 flex items-center">
          <div className="left text-white flex-col ml-28" style={{width:"30vw"}}>
            <p className="text-5xl">Services</p>
            <p className=" text-lg mt-8 mb-8">Let`s explore the latest news going on the particular company by just clicking and choosing the company  below 
you can able to see the latest news and current tends and also the news related to the company.</p>
            <label htmlFor="services" className="text-xl">Choose Company:</label>
            <select 
              id="services" 
              value={selectedCompany} 
              onChange={handleChange} 
              style={{ 
                backgroundImage: 'linear-gradient(90deg, rgba(255,199,0,1) 0%, rgba(194,86,7,1) 100%)',
                color: 'black',
                marginLeft:"1vw",
                borderRadius:'15px'
              }}
            >
              <option value="">Select</option>
              {Object.keys(companyInfo).map((company, index) => (
                <option key={index} value={company}>{company}</option>
              ))}
            </select>
          </div>
          <div className="right ml-64">
            <img src={image} alt="" className=" border-solid-black" />
          </div>
        </div>
        <div className="content mt-32 flex items-center justify-center text-white">
          {selectedCompany && (
            <div className="company-info">
              <h2 className="text-2xl">{selectedCompany}</h2>
              <p style={{width:'40vw'}}>{companyInfo[selectedCompany]}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
