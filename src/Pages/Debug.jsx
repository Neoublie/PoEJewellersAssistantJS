import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

const Debug = () => {
  const [challenge, setChallenge] = useState([]);
  useEffect(() => {
    fetch(
      "https://poe-jewellersassistant-pkse.azurewebsites.net/api/poe-generate-challenge"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setChallenge(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const { code_verifier, code_challenge } = challenge;

  return (
    <div className="canvas">
      <h1>Development</h1>

      <div className="banner">
        <Header />
      </div>

      <div className="container">
        <Menu />
        <div className="content">
          <div>Debug</div>
          <div className="spacer"></div>
          <div className="results">
            <span className="label">Verifier:</span>
            <span className="length-wrap">{code_verifier}</span>
          </div>
          <div className="spacer"></div>
          <div className="results">
            <span className="label">Challenge:</span>
            <span>{code_challenge}</span>
          </div>
        </div>
      </div>

      {/* <div>
        <p>{generateCodeVerifier()}</p>
      </div> */}
    </div>
  );
};

export default Debug;
