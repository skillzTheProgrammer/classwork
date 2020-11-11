import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

function ProtectedRoute({ path, component }) {

  if (JSON.parse(sessionStorage.getItem("user")).isLoggedIn === true) {
    return <Route path={path} component={component} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default ProtectedRoute;
