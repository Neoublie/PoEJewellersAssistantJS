import React from "react";
import Header from "../Components/Header";
import Character from "../Components/Character";
import Menu from "../Components/Menu";

const Characters = () => {
  return (
    <div className="canvas">
      <h1>Development</h1>

      <div className="banner">
        <Header />
      </div>

      <div className="container">
        <Menu />
        <div className="content">
          <Character />
        </div>
      </div>
    </div>
  );
};

export default Characters;
