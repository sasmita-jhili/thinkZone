import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="cloak__wrapper">
      <div className="cloak__container">
        <div className="cloak"></div>
      </div>
      <div className="info">
        <h1>404</h1>
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but it seems to have gone
          missing. We do apologize on its behalf.
        </p>
        <button onClick={handleRedirectHome}>Home</button>
      </div>
    </div>
  );
};

export default NotFound;
