import React from "react";

import Header from "../Components/Header";
import Menu from "../Components/Menu";
import About from "../Components/About";

function generateCodeVerifier() {
  const codeVerifierLength = 64;
  const codeVerifierCharset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let codeVerifier = "";

  for (let i = 0; i < codeVerifierLength; i++) {
    codeVerifier += codeVerifierCharset.charAt(
      Math.floor(Math.random() * codeVerifierCharset.length)
    );
  }
  return codeVerifier;
}

const Home = () => {
  return (
    <div className="canvas">
      <h1>Development</h1>

      <div className="banner">
        <Header />
      </div>

      <div className="container">
        <Menu />
        <About />
      </div>

      {/* <div>
        <p>{generateCodeVerifier()}</p>
      </div> */}
    </div>
  );
};

export default Home;
