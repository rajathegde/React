import React, { useEffect, useState } from "react";
import Tvs from "../../assets/Rectangle 1Bg.png";
import TVSIMAGE from "../../assets/image 4Tvs.png";
import Logo from "../../assets/image 1.png";
import Mail from "../../assets/mail.png";
import Lock from "../../assets/lock.png";
import { Navigate, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div
      style={{
        display: "flex",
        width: dimensions.width,
        minHeight: dimensions.height,
        height: dimensions.height > 750 && dimensions.height,
        backgroundColor: "#1E4597",
      }}
    >
      <img
        src={Logo}
        style={{
          objectFit: "cover",
          position: "absolute",
          width: "150px",
          height: "60px",
          marginLeft: "50px",
          marginTop: "50px",
        }}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          backgroundImage: `url(${Tvs})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "90%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "100%",
            minWidth: 300,
            width: "50%",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",

            // padding: 2,
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "50px",
            }}
          >
            <p
              style={{
                fontSize: 22,
                margin: 0,
                padding: 0,
                marginTop: 0,
                fontWeight: "bold",
              }}
            >
              Hi, Welcome Back
            </p>
            <p
              style={{
                fontSize: 12,

                padding: 0,
                margin: 0,
                marginTop:10
              }}
            >
              
            </p>

            <div
              style={{
                border: "1px solid black",
                height: "50px",
                width: "98%",
                boxSizing: "border-box",
                outline: "none",
                marginTop: "60px",
                display: "flex",
                alignItems: "center",
                padding: "0px 15px",
              }}
            >
              <img src={Mail} style={{ objectFit: "contain" }} />
              <input
                type="text"
                placeholder="Enter your email"
                style={{
                  border: "0px solid black",
                  padding: "10px",
                  boxSizing: "border-box",
                  outline: "none",
                  width: "98%",
                  marginLeft: "10px"
                }}
              />
            </div>

            <div
              style={{
                border: "1px solid black",
                height: "50px",
                width: "98%",
                boxSizing: "border-box",
                outline: "none",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
                padding: "0px 15px",
              }}
            >
              <img src={Lock} style={{ objectFit: "contain" }} />
              <input
                type="text"
                placeholder="Enter your Password"
                style={{
                  border: "0px solid black",
                  padding: "10px",
                  boxSizing: "border-box",
                  outline: "none",
                  width: "98%",
                  marginLeft:10
                }}
              />
            </div>

            <button
              style={{
                height: 50,
                width: "98%",
                fontSize: 17,
                fontWeight: "bold",
                textAlign: "center",
                padding: 0,
                margin: 0,
                marginTop: 30,
                backgroundColor: "#1E4597",
                border: "0px",
                color: "#FFFFFF",
              }}
              onClick = {()=> navigate("/dashboard") }
            >
              Login
            </button>
          </div>
        </div>

        <div>
          <img src={TVSIMAGE} style={{ objectFit: "contain", width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Login;