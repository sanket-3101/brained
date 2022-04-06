import React from "react";

export default function DashBoardCard({color, title, img}) {
  return (
    <>
      <div
        style={{
          background: color,
          width: "30%",
          height: "40%",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "80%",
          }}
        >
          <img
            src={img}
            style={{ height: "50px", width: "50px", marginRight: "20px" }}
          />
          <div
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginTop: "25px",
              color: "white",
            }}
          >
            3
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
            {title}
        </div>
      </div>
    </>
  );
}
