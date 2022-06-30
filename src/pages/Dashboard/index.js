import React, { useEffect, useState } from 'react'
import DashboardChildren from './DashboardChildren';
import Navbar from '../VehicleMapping/Navbar';
import Sidebar from '../VehicleMapping/Sidebar';

const Dashboard = () => {

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const updateWindowDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);
  return (

      <div style={{ width: '100%', display: 'flex', height: "inherit" }}>
        <DashboardChildren width={dimensions.width} height={dimensions.height} />

      </div>


  )
}

export default Dashboard