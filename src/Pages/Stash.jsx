import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

const Stash = () => {
  return (
    <div className="canvas">
      <div className="banner">
        <Header />
      </div>

      <div className="container">
        <Menu />
        <div className="content">Will have Stash info here</div>
      </div>
    </div>
  );
};

export default Stash;
