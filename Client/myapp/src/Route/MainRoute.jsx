import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "./../pages/Login";
import ProjectsList from "./../components/ProjectsList";
import ProjectCreate from "./../pages/ProjectCreate";

import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import NotFound from "./../NorFound";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dash"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/projectlist"
        element={
          <PrivateRoute>
            <ProjectsList />
          </PrivateRoute>
        }
      />

      <Route
        path="/projectcreate"
        element={
          <PrivateRoute>
            <ProjectCreate />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoute;
