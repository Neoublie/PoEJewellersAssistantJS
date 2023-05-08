import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

const Debug = () => {
  const [challenge, setChallenge] = useState([]);
  const [submitValue, setSubmitValue] = useState("");
  const [token, setToken] = useState("");

  const RetrieveChallenge = () => {
    fetch(
      "https://poe-jewellersassistant-pkse.azurewebsites.net/api/poe-generate-challenge"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    console.log("state updated:", challenge);
  }, [challenge]);

  const RetrieveToken = () => {
    fetch(
      "https://poe-jewellersassistant-pkse.azurewebsites.net/api/poe-authorize"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToken(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const PoEAuthorize = () => {
    const responseType = "code";
    const clientId = "poejewelersassistant";
    const redirectUri = "https://poejewellersassistant.netlify.app/success/";
    const scopes =
      "account:characters account:stashes account:profile account:league_accounts";
    const tmpchallengeCode = "Ekv-OBqjBaWWaFZlWeFOfmWWCyDlBdGZttfwMiXM1g4";
    const codeChallengeMethod = "S256";

    const state = "123";
    // let blorg = RetrieveChallenge().then(() => {
    //   const challengeCode = blorg.code_challenge;
    //   const codeChallengeMethod = "S256";

    //   console.log(challengeCode);
    // });

    fetch(
      "https://poe-jewellersassistant-pkse.azurewebsites.net/api/poe-generate-challenge"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToken(data);
      })
      .then(
        (window.location.href =
          "https://www.pathofexile.com/oauth/token?client_id=" +
          clientId +
          "&response_type=code&scope=" +
          scopes +
          "&state=" +
          state +
          "&redirect_uri=" +
          redirectUri +
          "&code_challenge=" +
          tmpchallengeCode + // token +
          "&code_challenge_method=" +
          codeChallengeMethod)
      )
      .catch((err) => {
        console.log(err.message);
      });

    // fetch(
    //   "https://www.pathofexiles.com/oauth/token?client_id=poejewelersassistant&response_type=code&scope=account:profile&state=10ceb8104963e91e47a95f4138448ecf&redirect_uri=https://poejewellersassistant.netlify.app/success/&code_challenge=fDudzsuAIi9PDgUdXrnjP_b64pHpidLEMe_W4_FnCWY&code_challenge_method=S256"
    // );
  };

  const { code_verifier, code_challenge } = challenge;

  return (
    <div className="canvas">
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
          <div className="results">
            <span className="label">Challenge:</span>
            <span className="length-wrap">{code_challenge}</span>
          </div>
          <br />
          <div>
            <button className="btn" onClick={RetrieveChallenge}>
              Get Challenge
            </button>
          </div>

          <div className="spacer"></div>

          <div className="authForm">
            <br />
            <h6>Enter access token</h6>
            <input type="text" placeholder="token"></input>
            <br />
            <br />
            <button className="btn" onClick={PoEAuthorize}>
              Submit
            </button>
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
