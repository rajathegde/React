import React from 'react'
import Logo from "../../assets/image 1.png";

const Navbar = () => {
  return (
    <div style={{
      width: '100%', height: '70px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      boxShadow: "0px 2px 5px #e8e2e1", padding: "0px 20px", boxSizing: "border-box"
    }}>
      <img
        src={Logo}
        style={{
          objectFit: "contain",
          width: "100px",
          height: "40px",
        }}
      />

      <div style={{ display: "flex", alignItems: 'center' }}>
        {/* <div style={{
          width: "40px",
          height: "40px", backgroundColor: "#1E4597", borderRadius: "60px", marginRight: "15px"
        }}>

        </div> */}
        {/* <div style={{
          color: "#AAAAAA", fontWeight: 600, fontSize: "16px"
        }}>Welcome Johnson</div> */}
      </div>
    </div>
  )
}

export default Navbar