import React from "react";

import Header from "../Components/Header";
import Menu from "../Components/Menu";
import PathOfExileAuth from "../Components/PathOfExileAuth";

const Home = () => {
  return (
    <>
      <h1>Development</h1>
      <div className="canvas">
        <div>
          <div className="banner">
            <Header />
          </div>
        </div>
        <div className="container">
          <Menu />
          {/* <Characters /> */}
          {/* <StashTab /> */}
          <PathOfExileAuth />
        </div>
      </div>
    </>
  );
};

export default Home;
