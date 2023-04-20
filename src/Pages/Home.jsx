import React from "react";

import Header from "../Components/Header";
import Menu from "../Components/Menu";
import About from "../Components/About";

const Home = () => {
  return (
    <div className="canvas">
      <h1>Development</h1>

      <div className="banner">
        <Header />
      </div>

      <div className="container">
        <Menu />
        <div className="content">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
