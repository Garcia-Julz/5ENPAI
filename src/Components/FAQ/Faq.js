import React from "react";
import "./Faq.css"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => {
  return (
    <div className="bgimg w3-display-container w3-animate-opacity">
      <div>
        <div className="FAQ-Title">
          <center><h1 className="w3-xxxlarge w3-animate-top">FAQ</h1></center>
        </div>
      </div>
      <div className="FAQ-Container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              How do you pronounce 5ENPAI?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>It’s pronounce senpai.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              What can 5ENPAI do for me?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>5ENPAI is a consultant service in which we give users privacy from all those pesky sponsored products, target marketing ads and the power to shop in Amazon with the power of Prime without the commitment of the subscription.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Why are you called 5ENPAI?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>5ENPAI is just another way to say senpai. In Japanese culture, a senpai is an upperclassman who would mentor an underclassman. This term is used more broadly to mean “teacher”.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              What does the question above have to do with this company?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>That’s easy! Here at 5ENPAI, we act as your upperclassman and have your back when you want to shop online.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Why is there a waiting list?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Because we want to make sure we have the appropriate needs handled before opening the flood gates. Last thing we want is over crowded servers.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              How do I sign up?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>On the home page, there is button the register your email to our list. Our team will contact you once you have access to our beta</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              Can I get earlier access?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>As of now, we do not have a referral program set up yet. If we do decide to have this added, we will let our community know!</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              How do you make money?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>Our revenue model is pretty simple. each transaction will only cost you 25 cents per transaction.
                Cheap? Yeah. We know.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              Why should I use 5ENPAI?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>If you value your privacy and are looking to have an extra filter of screening where a big company does not have your house under their 👁🔍, than this service is perfect for you!</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
              When will I have access to the beta version?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body>Once when we have a clear idea of when we are looking to send out email invitations, we will let our users in the community know!</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;