import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Protected = () => {
  const { signedIn } = useContext(UserContext);

  if (!signedIn) {
    return <Navigate to="/admin/loginpage" replace />;
  }
  return <Outlet />;
};

export default Protected;
