import React from 'react';
import './Footer.css'; // Import CSS file for styling
import img from '../../assets/images/logo.png'
function Footer() {
  return (
    <footer className="footer mt-24">
      <div className="w-screen">
        <div className="footer-content">
          <div className="footer-left">
            <img src={img} alt="Company Logo" style={{"width":"50%" ,"marginTop": "20px", marginLeft:"3vw"}}/>
          </div>
          <div className="footer-right">
            <div>
              <h3>Quick Links</h3>
              <ul className="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-left">
            <div>
              <h3>More Links</h3>
              <ul className="footer-menu">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 bussiness-edtech.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;