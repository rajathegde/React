import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import EnhancedTable from "../VehicleMapping/EnhancedTable";
import { makeStyles } from "@emotion/styled";

const VehicleMappingBody = ({ width, height }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div
      style={{
        width: "80%",
        height: height - 70,
        padding: "10px 50px",
        boxSizing: "border-box",
        backgroundColor: "#E5E5E5",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Part No. Mapping</h3>
      </div>

      {/* stepper */}

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            position: "relative",
            borderTop: "1px solid lightgrey",
            zindex: -1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              height: 50,
              width: 50,
              borderRadius: 50,
              zIndex: 1,
              fontSize: "18px",
              color: "white",
              backgroundColor: "#1E4597",
              marginTop: -25,
            }}
          >
            1
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 50,
              zIndex: 1,
              fontSize: "18px",
              color: currentStep === 0 ? "black" : "white",
              marginTop: -25,
              backgroundColor: "white",
            }}
          >
            2
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 50,
              zIndex: 1,
              fontSize: "18px",
              color: currentStep === 0 || currentStep === 1 ? "black" : "white",
              marginTop: -25,
              backgroundColor: "white",
            }}
          >
            3
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <h4>Filter Part Details</h4>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "10px 15px",
            backgroundColor: "white",
            borderRadius: "10px",
            height: "60px",
            width: "40%",
          }}
        >
          <p style={{ fontSize: "10px", margin: 0 }}>Enter Modal</p>
          <input
            placeholder="Enter Modal"
            style={{
              outline: "none",
              border: "0px",
              backgroundColor: "white",
              height: "25px",
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "10px 15px",
            backgroundColor: "white",
            borderRadius: "10px",
            height: "60px",
            width: "40%",
            marginLeft: "10px",
          }}
        >
          <p style={{ fontSize: "10px", margin: 0 }}>Enter Vehicle No.</p>
          <input
            placeholder="Enter Modal"
            style={{
              outline: "none",
              border: "0px",
              backgroundColor: "white",
              height: "25px",
            }}
          />
        </div>

        <button
          style={{
            backgroundColor: "#1E4597",
            width: "120px",
            height: "50px",
            border: "1px solid #1E4597",
            marginLeft: "10px",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          Filter
        </button>
        <button
          style={{
            width: "120px",
            height: "50px",
            border: "1px solid #1E4597",
            color: "#1E4597",
            cursor: "pointer",
            backgroundColor: "white",
            marginLeft: "10px",
          }}
          onClick={() => {}}
        >
          Clear
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <EnhancedTable />
      </div>
    </div>
  );
};

export default VehicleMappingBody;
