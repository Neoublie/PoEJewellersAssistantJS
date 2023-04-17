import React, { useState } from "react";
import styled from "styled-components";
// import { Redirect } from "react-router-dom";

const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

function userInput(defaultValue) {
  const [value, setValue] = useState("");
  // const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange };
}

const PATH_OF_EXILE_OAUTH_URL = "https://www.pathofexile.com/oauth/authorize";
// const CLIENT_ID = "REPLACE_WITH_MY_ID"; // Replace with your actual client ID
const CLIENT_ID = { value }; //"poejewelersassistant";
const REDIRECT_URI = "https://poejewellersassistant.netlify.app/success/"; // Replace with your actual redirect URI
const SCOPES = "profile"; // Replace with the desired scope(s) for the API

const PathOfExileAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const [debugClientID, setDebugClientID] = useState("");

  const handleLogin = () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    const state = generateRandomState();

    // Store the code verifier and state in session storage for later use in callback
    sessionStorage.setItem("codeVerifier", codeVerifier);
    sessionStorage.setItem("state", state);

    // Redirect to the Path of Exile OAuth authorization endpoint with PKCE parameters
    window.location.href = `${PATH_OF_EXILE_OAUTH_URL}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&code_challenge=${codeChallenge}&code_challenge_method=S256&state=${state}`;
  };

  const handleCallback = async () => {
    // Retrieve the authorization code and state from the callback URL
    const params = new URLSearchParams(window.location.search);
    const authorizationCode = params.get("code");
    const state = params.get("state");

    // Retrieve the stored code verifier and state from session storage
    const codeVerifier = sessionStorage.getItem("codeVerifier");
    const storedState = sessionStorage.getItem("state");

    // Verify the state parameter to prevent CSRF attacks
    if (state !== storedState) {
      console.error("State parameter mismatch");
      return;
    }

    // Exchange the authorization code for an access token
    const response = await fetch("https://www.pathofexile.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        code: authorizationCode,
        code_verifier: codeVerifier,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Store the access token and other data in local storage for later use
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("expiresAt", Date.now() + data.expires_in * 1000);
      setIsAuthenticated(true);
    } else {
      console.error("Failed to obtain access token:", response.status);
    }
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />; // Redirect to authenticated dashboard
  // }
  const inputProps = userInput();

  return (
    <div className="poe-auth">
      <h4>Login with Path of Exile</h4>

      <div className="debug_client_id">
        <StyledInput {...inputProps} placeholder="Type in here" />
        <span>Value: {inputProps.value}</span>
      </div>

      <button onClick={handleLogin} className="btn">
        Login
      </button>
      {window.location.href.includes("callback") && (
        <button onClick={handleCallback}>Callback</button>
      )}
    </div>
  );
};

// Helper functions for PKCE
const generateCodeVerifier = () => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  const verifier = Array.from(
    { length: 64 },
    () => charset[Math.floor(Math.random() * charset.length)]
  ).join("");
  return verifier;
};

const generateCodeChallenge = (code) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  return base64UrlEncode(hash(data));
};

const base64UrlEncode = (data) => {
  let base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(data)));
  return base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");
};

const hash = (data) => {
  return window.crypto.subtle.digest("SHA-256", data);
};

const generateRandomState = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export default PathOfExileAuth;

// Note: Please replace the `YOUR_CLIENT_ID` with your actual client ID obtained from
// Path of Exile API. Also, update the `REDIRECT_URI` with the actual URI where your
// application is running, and make sure to register that URI as a valid redirect URI
// in your Path of Exile API application settings.

// This component sets up the PKCE parameters, initiates the authorization process by
// redirecting the user to the Path of Exile OAuth authorization endpoint, handles the
// callback URL to exchange the authorization code for an access token using the PKCE
// parameters, and stores the access token and other data in local storage for later use.

// You can use this component in your React application as a login page to authenticate
// with the Path of Exile API using PKCE for secure authorization.
