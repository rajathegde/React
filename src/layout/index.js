import React from "react";
import MainLayout from "./MainLayout";

const Layout = ({ children }) => {
  return (
    <div>
      <MainLayout>{children}</MainLayout>
    </div>
  );
};

export default Layout;
