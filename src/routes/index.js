import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard/index";
import ViewDetails from "../pages/Details/index";
import Viewproduct from "../pages/Viewproduct/index";
import EditProduct from "../pages/EditProduct";
import Vehicle from "../pages/vehical";
import VehicleMapping from "../pages/VehicleMapping";


const MainRoutes = ({ isAuthenticated = true }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/view" element={<ViewDetails />} />
      <Route path="/viewproduct" element={<Viewproduct />} />
      <Route path="/edit" element={<EditProduct />} />
      <Route path="/vehicle" element={<Vehicle/>} />
      <Route path="/vehiclemapping" element={<VehicleMapping/>} />




    </Routes>
  );
};

export default MainRoutes;