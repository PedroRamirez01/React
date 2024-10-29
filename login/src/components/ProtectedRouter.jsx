import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export const ProtectedRouter = ({ children }) => {
  const user = auth.currentUser;
  return user ? children : <Navigate to="/" replace/>;
};
