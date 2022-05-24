import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";
import React from "react";

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgb(29, 45, 68, 0.6);
  -webkit-tap-highlight-color: transparent;
`;

function CustomModal({ children, open, onClose }) {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        BackdropComponent={Backdrop}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "0px solid gray",
        }}
      >
        {children}
      </Modal>
    </>
  );
}

export default CustomModal;
