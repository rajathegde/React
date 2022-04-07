import React from "react";
import Profile from "../../assets/profile.png";
import Logout from "../../assets/logout.png";
import Product from "../../assets/product.png";

import { Link } from "react-router-dom";
const SidebarData = [
  { name: "Products", image: Product, path: "/dashboard" },
  { name: "User Management", image: Profile, path: "" },
  { name: "Logout", image: Logout },
];

const Sidebar = ({ width, height }) => {
  return (
    <div style={{ width: "20%", backgroundColor: "#1E4597", padding: "20px 0px", boxSizing: "border-box", display: "flex", alignItems: "center", flexDirection: "column" }}>
      <div>
        {SidebarData.map((item, i) => {
          return (
            <div style={{ display: "flex", marginTop: "30px", color: "white" }} key={i} >
              <img src={item.image} style={{ marginRight: 15, objectFit: "contain" }} />
              <Link
                to={{
                  pathname: item.path,

                }}
                style={{ textDecoration: "none" }}
              ><p style={{ margin: 0, color: "white" }}>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
