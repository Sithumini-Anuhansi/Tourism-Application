import React from "react";
import { Redirect } from "react-router-dom";
import { isAdmin } from "../../utils/auth";

const AdminRoute = ({ children }) => {
  if (!isAdmin()) {
    return <Redirect to="/admin/login" />;
  }
  return children;
};

export default AdminRoute;
