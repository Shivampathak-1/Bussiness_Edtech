import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menubar from "../../components/Menubar/Menubar";
import Footer from '../../components/Footer/Footer';

function Support() {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <Menubar />
        <div className="container mt-2">
          <h1 className="text-4xl font-bold mb-6 text-white">Support</h1>
          <p className="text-lg mb-4 text-white">
            Welcome to our support page! If you have any questions, concerns, or feedback, please feel free to reach out to us using one of the following methods:
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <a href="tel:+1234567890" className="text-blue-500 hover:underline">Call us: +1234567890</a>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <a href="mailto:support@example.com" className="text-blue-500 hover:underline">Email us: support@b-edtech.com</a>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <span className="text-gray-700">Live Chat (coming soon)</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Support;
