import React from 'react';
import NavBar from './Components/nav/NavBar';
import ApplicationViews from "./Components/ApplicationViews";
import './App.css';
import './JoinButton.scss';
// import Button from './JoinButton';

function App() {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
}

export default App;
