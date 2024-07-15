import React, { useEffect } from "react";
// import bgimage from '../images/bg.jpg'
import bgimage from "../images/bgImage.jpg";
// import profileImage from '../images/profileImage.png'
import profileImage from "../images/mayurImage.png";
import AOS from 'aos';

import "./index.css";

const PageNavbar = () => {

  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, []);

  let downloadResume = () => {
    alert("cl");
    // let path = '/my-app/src/components/images/MayurResume.pdf'
    // let link = document.createComment('a')
    // link.href = path
    // link.setAttribute('download','MayurResume.pdf')
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)
  };

  return (
    <div className="nav">
      <img className="navimg" src={bgimage} />
      <div className="bioData">
        <img src={profileImage} />
        <h3 className='mainName' style={{ color: "violet" }} data-aos="zoom-out">Mayur Ashok Vishwakarma</h3>
        <h5 data-aos="zoom-in">I'm a Professional Mobile Application Devloper</h5>
        <a
          href="https://drive.google.com/file/d/16XueXJs7UOWyEH1pjCZKxHYyWMBbUSpn/view?usp=drivesdk"
          target="_blank"
          download="MayurResume.pdf"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default PageNavbar;
