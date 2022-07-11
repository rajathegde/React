import React from "react";
import Profile from "../assets/profile.png";
import Product from "../assets/product.png";
import Car from "../assets/Vector car.png";
import Masters from "../assets/setting.png" ;
import { Link, useLocation } from "react-router-dom";

const SidebarData = [
  { name: "Products", image: Product, pathName: "/dashboard" },
  { name: "Vehicle Mapping", image: Car, pathName: "/vehiclemapping" },
  { name: "Masters", image: Masters, pathName: "/masters" },
];

const Sidebar = ({ width, minHeight}) => {
  const location = useLocation();
  return (
    <div
      style={{
        width: "20%",
        backgroundColor: "#1E4597",
        minHeight:minHeight - 70,
        padding: "20px 0px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        {SidebarData.map((item, i) => {
          return (
            <Link
              to={item?.pathName}
              style={{
                display: "flex",
                marginTop: "30px",
                color: "white",
                opacity: location.pathname === item.pathName ? 1 : 0.5,
                textDecoration: "none",
              }}
              key={i}
            >
              <img
                src={item.image}
                style={{ marginRight: 15, objectFit: "contain" }}
              />
              <p style={{ margin: 0 }}>{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
