import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/index";
import Viewproduct from "../pages/Viewproduct/index";
import EditProduct from "../pages/EditProduct";
import Vehicle from "../pages/vehical";
import VehicleMapping from "../pages/VehicleMapping";


const MainRoutes = ({ isAuthenticated = true }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route path="/viewproduct" element={<Viewproduct />} />
      <Route path="/edit" element={<EditProduct />} />
      <Route path="/vehicle" element={<Vehicle/>} />
      <Route path="/vehiclemapping" element={<VehicleMapping/>} />




    </Routes>
  );
};

export default MainRoutes;