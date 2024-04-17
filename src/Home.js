import React from 'react';
import { BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import './Home.css';

function Home() {
  return (
    <div className="main-wrapper">
      <div className="layer hero"></div>
      <div className="layer overlay"></div>
      <span className="main-text">UNDER CONSTRUCTION</span>
      <div className="bottom-bar">
        <div className="site-info">
          <span>ALL RIGHTS RESERVED</span>
          <span>₢</span>
          <span>2024</span>
          <span style={{ fontWeight: 500 }}>ALAN CARLOS ARQUITETO</span>
        </div>
        <div className="contact-info">
          <a href="https://wa.me/5545998022377" target="_blank" rel="noopener noreferrer">45 99802-2377</a>
          <div>
            <a href="https://www.instagram.com/alancarlosarq">
              <BiLogoInstagram size={30} />
            </a>
            <a href="https://www.facebook.com/alan.gomes.94695">
              <BiLogoFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
