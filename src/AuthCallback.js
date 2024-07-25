import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async (code) => {
      try {
        const response = await axios.post(
          'https://api.instagram.com/oauth/access_token',
          new URLSearchParams({
            client_id: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
            client_secret: process.env.REACT_APP_INSTAGRAM_CLIENT_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: process.env.REACT_APP_INSTAGRAM_REDIRECT_URI,
            code: code,
          }).toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        const accessToken = response.data.access_token;
        localStorage.setItem("accessToken", accessToken);
        navigate("/reels");
      } catch (error) {
        console.error("Failed to get access token", error);
        alert("Failed to authenticate with Instagram");
      }
    };

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      fetchAccessToken(code);
    } else {
      alert("Authorization code not found");
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;
