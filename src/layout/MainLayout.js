import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", height: window.innerHeight - 70 }}>
        <Sidebar />
        <div style={{ width: "80%", height: "100%" }}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
