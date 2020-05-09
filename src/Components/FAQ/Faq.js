import React from "react";
import "./Faq.css"


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const FAQ = () => {
  return (
    <div className="FAQ-Container">
      {/* <div className="logo container">
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
        <p className="w3-large w3-center">Join our Beta Launch Listsssssss 🚀</p>
        <div className="join-link">
          <a className="brk-btn" href="#" class="brk-btn">
            Join Now
          </a>
        </div>
      </div>
      <div className="w3-display-bottomleft w3-padding-large">
        Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3</a>
      </div> */}
      <h2>Collapsibles</h2>

      <p>A Collapsible:</p>
      <button type="button" class="collapsible">Open Collapsible</button>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <p>Collapsible Set:</p>
      <button type="button" class="collapsible">Open Section 1</button>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <button type="button" class="collapsible">Open Section 2</button>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <button type="button" class="collapsible">Open Section 3</button>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
};

export default FAQ;