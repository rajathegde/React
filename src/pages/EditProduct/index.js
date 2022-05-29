import React, { useEffect, useState } from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import ProductImagel from "../../assets/image 5.png";
import ProductImager from "../../assets/image 6.png";
import ProductImageu from "../../assets/image 7.png";
import ProductImaged from "../../assets/image 8.png";
import ProductImagec from "../../assets/image 9.png";
import BrowserImage from "../../assets/log-out.png";
import { padding } from "@mui/system";

const EditProduct = () => {
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

  const data = [
    { name: "Product ID", value: "123456789" },
    { name: "Name", value: "Horn" },
    { name: "Make", value: "TVS" },
    { name: "Model", value: "2019" },
    { name: "ImageCount", value: "5" },
  ];

  const data1 = [
    { name: "Product ID", image: ProductImagel },
    { name: "Product ID", image: ProductImager },
    { name: "Product ID", image: ProductImageu },
    { name: "Product ID", image: ProductImaged },
    { name: "Product ID", image: ProductImagec },
  ];

  return (
    <div style={{ width: dimensions.width, height: dimensions.height }}>
      <Navbar />

      

        <div
          style={{
            width: "100%",
            minHeight: dimensions.height - 70,
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
            <h3>Edit Product</h3>
          </div>
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              outline: "none",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            
            <div
              style={{
                width: "100%",
                boxSizing: "border-box",
                outline: "none",
                display: "flex",
                alignItems: "center",
                padding: "0px 15px",
                backgroundColor: "white",
                marginTop: "15px",
                borderBottom: "1px solid lightgrey",
              }}
            >
              {data &&
                data.map((item, i) => {
                  return (
                    <div
                      style={{
                        width: "20%",
                        borderRight:
                          data.length - 1 !== i && "1px solid lightgrey",
                        paddingLeft: "15px",
                        paddingBottom: "20px",
                      }}
                    >
                      <p style={{ color: "black" }}>{item.name}</p>
                      <p>{item.value}</p>
                    </div>
                  );
                })}
            </div>
            <div
              style={{
                width: "100%",
                boxSizing: "border-box",
                outline: "none",
                display: "flex",
                alignItems: "center",
                padding: "20px 15px",
                backgroundColor: "white",
                justifyContent: "center",
              }}
            >
              {data1 &&
                data1.map((item, i) => {
                  return (
                    <div
                      style={{
                        padding: "15px",
                        height:"167px",
                        width:"120px",
                        border: "1px solid lightgrey",
                        marginRight: "20px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <input type="checkbox" style={{ cursor: "pointer" }} />
                      <img src={item.image} />
                    </div>
                  );
                })}
            </div>

            <div
              style={{
                width: "100%",
                backgroundColor:"white",
                padding:"20px 20px",
                boxSizing: "border-box",

              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px 15px",
                  backgroundColor: "white",
                  justifyContent: "center",
                  flexDirection: "column",
                  border: "1px dashed grey",
                  boxSizing: "border-box",
                }}
              >
                {/* Add Image Here */}
                <img alt="image" src={BrowserImage} />

                {/* Add color to p tag */}

                <p style={{ margin: 0, marginTop: 5, color: "#AAAAAA" }}>
                  Drag and drop the image or{" "}
                  <span style={{ color: " #1E4597", fontWeight: "600" }}>
                    browse
                  </span>
                </p>
                <p style={{ margin: 0, marginTop: 5, color: "#AAAAAA" }}>
                  (.png & .jpp are allowed)
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              disabled={true}
              style={{
                backgroundColor: "#1E4597",
                width: "200px",
                height: "50px",
                border: "1px solid #1E4597",
                color: "#FFFFFF",
                cursor: "pointer",
                opacity: 0.5,
              }}
            >
              Upload
            </button>

            <button
              style={{
                backgroundColor: "#1E4597",
                width: "200px",
                height: "50px",
                border: "1px solid #1E4597",
                marginLeft: "20px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default EditProduct;