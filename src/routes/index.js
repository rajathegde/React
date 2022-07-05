// import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import React, { Component, Fragment } from 'react';
import Dashboard from "../pages/Dashboard/index";
import Viewproduct from "../pages/Viewproduct/index";
import EditProduct from "../pages/EditProduct";
import Vehicle from "../pages/vehical";
import VehicleMapping from "../pages/VehicleMapping";
import Masters from "../pages/masters"


const MainRoutes = ({ isAuthenticated = true }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route path="/viewproduct" element={<Viewproduct />} />
      <Route path="/edit" element={<EditProduct />} />
      <Route path="/vehicle" element={<Vehicle/>} />
      <Route path="/vehiclemapping" element={<VehicleMapping/>} />
      <Route path="/masters" element={<Masters/>} />
      




    </Routes>
  );
};

export default MainRoutes;