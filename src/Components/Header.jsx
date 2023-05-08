import React from "react";
import logo from "../assets/cruciblelogo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="crucible" />
      <h3>PoE Jewellers Assistant</h3>
      <h5>Assisting you with your stats since 2023</h5>
    </div>
  );
};

export default Header;
