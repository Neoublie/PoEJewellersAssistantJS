import React from "react";

import Header from "../Components/Header";
import Menu from "../Components/Menu";

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
          <div>
            <p>{generateCodeVerifier()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
