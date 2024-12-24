import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component, isLoginRoute }) => {
  const isLoggedIn = localStorage.getItem("login") === "true"; 

  if (isLoginRoute && isLoggedIn) {
    return <Navigate to="/home"  />;
  }

  if (!isLoginRoute && !isLoggedIn) {
    return <Navigate to="/"  />;
  }

  return <Component />;
};

export default ProtectedRoute;
