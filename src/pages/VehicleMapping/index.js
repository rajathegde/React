import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import VehicleMappingBody from "./VehicleMappingBody";

const VehicleMapping = () => {
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
    <div style={{ width: dimensions.width, minHeight: dimensions.height }}>
      <Navbar />

      <div style={{ width: "100%", display: "flex" }}>
        <Sidebar width={dimensions.width} minHeight={dimensions.height} />
        <VehicleMappingBody
          width={dimensions.width}
          minHeight={dimensions.height}
        />
      </div>
    </div>
  );
};

export default VehicleMapping;