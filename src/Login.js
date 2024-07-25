import axios from "axios";
import React from "react";
// import InstagramLogin from 'react-instagram-login';


// const INSTAGRAM_AUTH_URL = "https://www.instagram.com/oauth/authorize?client_id=1825445621276297&redirect_uri=http://localhost:3000/auth/callback&response_type=code&scope=business_basic%2Cbusiness_manage_messages%2Cbusiness_manage_comments%2Cbusiness_content_publish"
const INSTAGRAM_AUTH_URL = `https://api.instagram.com/oauth/authorize`;

const Login = () => {
  
  // const responseInstagram = (response) => {
  //   console.log(response);
  // }
  const handleLogin = () => {
    const clientId = process.env.REACT_APP_INSTAGRAM_CLIENT_ID;
    const redirectUri =process.env.REACT_APP_INSTAGRAM_REDIRECT_URI;
    const authUrl = `${INSTAGRAM_AUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=business_basic%2Cbusiness_manage_messages%2Cbusiness_manage_comments%2Cbusiness_content_publish&response_type=code`;

    window.location.href = authUrl;
    // axios.get(authUrl).then(data=>console.log(data)).catch(error=>console.log(error))
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Insta Reels Viewer</h1>
      <button style={styles.button} onClick={handleLogin}>
        Login with Instagram
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#3897f0",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;
