import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

const Leagues = () => {
  return (
    <div className="canvas">
      <div className="banner">
        <Header />
      </div>

      <div className="container">
        <Menu />
        <div className="content">
          <div>Will have League info here</div>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
