import { minHeight } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from '../VehicleMapping/Navbar';
import Sidebar from '../VehicleMapping/Sidebar';
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

      <div style={{ width: "100%", display: "flex",backgroundColor:"red" }}>
        <VehicleMappingBody
          width={dimensions.width}
          minHeight={dimensions.height}
        />
    </div>
  );
};

export default VehicleMapping;