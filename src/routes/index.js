import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard/index";

const MainRoutes = ({ isAuthenticated = true }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default MainRoutes;