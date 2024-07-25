import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AuthCallback from "./AuthCallback";
import Reels from "./Reels";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </Router>
  );
};

export default App;
