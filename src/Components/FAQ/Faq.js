import React from "react";
import Logo from '../../Assets/5ENPAI_Logo_home_.png'


const FAQ = () => {
  return (
    <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
      <div className="logo container">
        <div className="w3-display-topleft w3-padding-large w3-xlarge" style={{"display" : "flex"}}>
          5ENPAI
          <img src={Logo} style={{"width" : "26%", "margin-left" : "3%"}}/>
        </div>
        <div className="w3-display-topright w3-padding-large w3-xlarge">
          <a href="faq">
            FAQs
          </a>
        </div>
      </div>
      <div className="w3-display-middle">
        <h1 className="w3-xxxlarge w3-animate-top">FAQ TEST</h1>
        <hr id="border1" className="w3-border-grey" />
        <p className="w3-large w3-center">Join our Beta Launch List 🚀</p>
        <div className="join-link">
          <a className="brk-btn" href="#" class="brk-btn">
            Join Now
          </a>
        </div>
      </div>
      <div className="w3-display-bottomleft w3-padding-large">
        Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3</a>
      </div>
    </div>
  );
};

export default FAQ;