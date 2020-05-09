import React from "react";


const Home = () => {
  return (
    <div className="bgimg w3-display-container w3-animate-opacity w3-text-white" id="Body-Home">
      <div className="w3-display-middle">
        <h1 className="w3-xxxlarge w3-animate-top">RETHINK BUYING</h1>
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

export default Home;