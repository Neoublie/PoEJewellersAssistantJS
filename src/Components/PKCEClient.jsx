import React, { useEffect, useState } from "react";

const PKCEClient = () => {
  const [codeVerifier, setCodeVerifier] = useState("");
  const [codeChallenge, setCodeChallenge] = useState("");
  const [codeChallengeMethod, setCodeChallengeMethod] = useState("");
  const [authorizationCode, setAuthorizationCode] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState("");

  // Generate a random code verifier
  const generateCodeVerifier = () => {
    const codeVerifier = base64UrlEncode(generateRandomString(64));
    setCodeVerifier(codeVerifier);
  };

  // Generate a code challenge from the code verifier
  const generateCodeChallenge = () => {
    const codeChallenge = base64UrlEncode(sha256(codeVerifier));
    setCodeChallenge(codeChallenge);
    setCodeChallengeMethod("S256");
  };

  // Helper function to generate a random string
  const generateRandomString = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  // Helper function to base64Url encode a string
  const base64UrlEncode = (input) => {
    let base64 = btoa(input);
    return base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");
  };

  // Helper function to SHA-256 hash a string
  const sha256 = async (input) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const digest = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(digest));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  // Exchange the authorization code for an access token
  const exchangeAuthorizationCode = async () => {
    try {
      const response = await fetch("https://example.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: authorizationCode,
          redirect_uri: "https://example.com/callback",
          code_verifier: codeVerifier,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to exchange authorization code for access token"
        );
      }

      const data = await response.json();
      setAccessToken(data.access_token);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (authorizationCode && codeVerifier) {
      exchangeAuthorizationCode();
    }
  }, [authorizationCode]);

  return (
    <div>
      <button onClick={generateCodeVerifier}>Generate Code Verifier</button>
      <button onClick={generateCodeChallenge}>Generate Code Challenge</button>
      {codeVerifier && <div>Code Verifier: {codeVerifier}</div>}
      {codeChallenge && <div>Code Challenge: {codeChallenge}</div>}
      {codeChallengeMethod && (
        <div>Code Challenge Method: {codeChallengeMethod}</div>
      )}
      <button
        onClick={() =>
          (window.location.href =
            "https://example.com/authorize?client_id=my_client_id&response_type=code&redirect_uri=https://example.com/callback&code_challenge_method=S256&code_challenge=" +
            codeChallenge)
        }
      >
        Authorize
      </button>
      {authorizationCode && <div>Authorization Code: {authorizationCode}</div>}
      {accessToken && <div>Access Token: {accessToken}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default PKCEClient;
