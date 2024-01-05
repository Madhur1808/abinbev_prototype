import React from "react";
import SalesNavBar from "./SalesNavBar";

const SalesDashboard = () => {
  const imageStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    marginTop: "75px",
  };

  const imgSrc = "../public/assets/SalesDashboard.png";

  return (
    <>
      <SalesNavBar />
      <div style={imageStyles}>
        <img
          src={imgSrc}
          alt="Sales Dashboard Image"
          style={{ width: "100%", height: "90%", objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default SalesDashboard;
