import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

const Success = () => {
  return (
    <div className="canvas">
      <h1>Development</h1>

      <div className="banner">
        <Header />
      </div>

      <div className="container">
        <Menu />
        <div className="content">Success from api Url Redirect</div>
      </div>
    </div>
  );
};

export default Success;
