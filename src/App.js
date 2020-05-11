import React from 'react';
import NavBar from './Components/nav/NavBar';
// import EmailModal from "./Components/modal/EmailModal"
import ApplicationViews from "./Components/ApplicationViews";
import './App.css';
import './JoinButton.scss';
// import Button from './JoinButton';

function App() {
  return (
    <>
      <NavBar />
      {/* <EmailModal /> */}
      <ApplicationViews />
    </>
  );
}

export default App;
