import React from "react";
import "./Faq.css"
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              !
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default FAQ;