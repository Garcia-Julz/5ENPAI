import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import FAQ from "./FAQ/Faq";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

      <Route
        path="/faq"
        render={props => {
          return <FAQ />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;