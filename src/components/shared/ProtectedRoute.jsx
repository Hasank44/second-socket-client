import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

    if (!user) {
      return <Navigate to="/user/login" replace />;
    }
  return children;
};

export const PublicRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export const AccessRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) return <Navigate to="/user/login" replace />;

  return children;
};

