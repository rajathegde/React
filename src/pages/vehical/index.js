import React, { useEffect, useState } from 'react'
import DashboardChildren from './DashboardChildren';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Vehicle = () => {

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
    <div style={{width:dimensions.width , height: dimensions.height}}>
        <Navbar />

        <div style={{width: '100%' , display: 'flex'}}>
          <Sidebar width={dimensions.width} height={dimensions.height} />
          <DashboardChildren  width={dimensions.width} height={dimensions.height}/>
           
        </div>


    </div>
  )
}

export default Vehicle