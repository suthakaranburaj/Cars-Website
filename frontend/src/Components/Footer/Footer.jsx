import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-col">
          <h2>Logo</h2>
          <p className="footer-para">
            Thank you for choosing The Metal Company for your metal manufacturing needs. Let's shape your vision into reality."
          </p>
        </div>
        <div className="footer-col">
          <h3 className="text-office">
            Office
            <div className="underline"><span></span></div>
          </h3>
          <p>Street No 5</p>
          <p>Gulistan Colony</p>
          <p>Faisalabad Punjab, India</p>
          <p className="email">info.finegap@gmail.com</p>
          <p className="phone">+92 304 110 0028</p>
        </div>
        <div className="footer-col">
          <h3>
            Menu
            <div className="underline"><span></span></div>
          </h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>
            Newsletter
            <div className="underline"><span></span></div>
          </h3>
          {/* <form action="">
            <i className="fa-solid fa-envelope"></i>
            <input type="text" placeholder="Enter Company Email" />
            <a href=""><i className="fa-solid fa-arrow-right"></i></a>
          </form> */}
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-google-plus"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
