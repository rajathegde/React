import React from "react";
import Profile from "../../assets/profile.png";
import Logout from "../../assets/logout.png";
import Product from "../../assets/product.png";
 
const SidebarData = [
  { name: "Products" , image: Product },
  { name: "User Management" , image: Profile},
  { name: "Logout" , image: Logout},
];

const Sidebar = ({ width, height }) => {
  return (
    <div style={{ width: "20%", backgroundColor: "#1E4597", height: height - 70 , padding: "20px 0px" , boxSizing: "border-box" , display: "flex" , alignItems: "center" , flexDirection:"column"}}>
       <div>
        {SidebarData.map((item, i) => {
          return (
            <div style={{display: "flex" , marginTop:"30px"  , color: "white"}} key={i} >
            <img src={item.image} style={{marginRight:15 , objectFit:"contain"}}/>
            <p style={{margin:0}}>{item.name}</p>
            </div>
          );
        })}
  </div>
    </div>
  );
};

export default Sidebar;
