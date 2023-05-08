import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

const Success = () => {
  return (
    <div className="canvas">
      <div className="banner">
        <Header />
      </div>

      <div className="container">
        <Menu />
        <div className="content">
          <h5>Success from api Url Redirect</h5>
        </div>
      </div>
    </div>
  );
};

export default Success;
