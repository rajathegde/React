import React from "react";
import Car from "../../assets/Vector car.png";
import Logout from "../../assets/logout.png";
import Product from "../../assets/product.png";
import Masters from "../../assets/setting.png" 
import { Link } from "react-router-dom";
const SidebarData = [
  { name: "Products" , image: Product,  },
  { name: "Vehicle Mapping" , image: Car, path: "/VehicleMapping"},
  { name: "Masters" , image: Masters},

  
];

const Sidebar = ({ width, minHeight }) => {
  return (
    <div style={{ width: "20%", backgroundColor: "#1E4597", minHeight: minHeight - 70 , padding: "20px 0px" , boxSizing: "border-box" , display: "flex" , alignItems: "center" , flexDirection:"column"}}>
       <div>
        {SidebarData.map((item, i) => {
          return (
            <Link style={{display: "flex" , marginTop:"30px"  , color: "white"}} key={i} >
            <img src={item.image} style={{marginRight:15 , objectFit:"contain"}}/>
            <p style={{margin:0}}>{item.name}</p>
            </Link>
          );
        })}
  </div>
    </div>
  );
};

export default Sidebar;
