import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Give me your damn email!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);


function Home() {
  const [modalShow, setModalShow] = React.useState(false);

    return (
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white" id="Body-Home">
        <div className="w3-display-middle">
          <h1 className="w3-xxxlarge w3-animate-top">RETHINK BUYING</h1>
          <hr id="border1" className="w3-border-grey" />
          <p className="w3-large w3-center">Join our Beta Launch List 🚀</p>
          <div className="join-link">
            <a className="brk-btn" href="#" class="brk-btn" variant="primary" onClick={() => setModalShow(true)}>
              Join Now
            </a>
          </div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div className="w3-display-bottomleft w3-padding-large">
          Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3</a>
        </div>
      </div>
    );
  };

  export default Home;