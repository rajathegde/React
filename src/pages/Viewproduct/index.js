import React, { useEffect, useState } from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../VehicleMapping/Sidebar";
import ProductImagel from "../../assets/image 5.png";
import ProductImager from "../../assets/image 6.png";
import ProductImageu from "../../assets/image 7.png";
import ProductImaged from "../../assets/image 8.png";
import ProductImagec from "../../assets/image 9.png";
import Modal from "@mui/material/Modal";

const Viewproduct = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const updateWindowDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };
  const [openModal, setOpenModal] = useState(false);

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
    { name: "Image Count", value: "5" },
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

      <div style={{ width: "100%", display: "flex" }}>
        <Sidebar width={dimensions.width} height={dimensions.height} />

        <div
          style={{
            width: "80%",
            height: dimensions.height - 70,
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
            <h3>View Product</h3>
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
                        height:"167px",
                        width:"120px",
                        padding:"15px",
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
              style={{
                backgroundColor: "#1E4597",
                width: "200px",
                height: "50px",
                border: "1px solid #1E4597",
                color: "#FFFFFF",
                cursor: "pointer",
                
              }}
              //onClick={() => setOpenModal(true)}
            >
              Edit
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
              onClick={() => setOpenModal(true)}
            >
              Delete All
            </button>
          </div>
        </div>
      </div>

      {openModal && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "0px solid gray",
          }}
        >
          <div
            style={{
              width: "500px",
              boxSizing: "border-box",
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              height: "200px",
              flexDirection: "column",
              padding: "15px"
            }}
          >
               

            <div style={{width: "100%" }}>
                <p>Delete Images?</p>
                <p>Are you sure you want to delete all images?</p>
            </div>
            <div>
            <button
              style={{
                width: "200px",
                height: "50px",
                border: "1px solid #1E4597",
                color: "#1E4597",
                cursor: "pointer",
                backgroundColor: "white",
              }}
              onClick={() => setOpenModal(true)}
            >
              Yes
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
              No
            </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Viewproduct;
