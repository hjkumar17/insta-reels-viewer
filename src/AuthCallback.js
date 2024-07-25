import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
  
      if (code) {
        axios
          .post('http://13.201.29.22/auth/instagram/exchange', { code })
          .then((response) => {
            console.log('Access Token:', response.data.accessToken);
            console.log('Instagram User:', response.data.instagramUser);
          })
          .catch((error) => {
            console.error('Error exchanging code for access token:', error.response.data);
          });
      }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;
