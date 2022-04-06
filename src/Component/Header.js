import React from "react";

export default function Header({ selectedNav }) {
  return (
    <div
      style={{
        height: "130px",
        diplay: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", height: "100%", width: "80%" }}>
        <div style={{ display: "flex", alignSelf: "flex-end" }}>
          <div style={{ fontWeight: "bold", fontSize: "2rem" }}>{selectedNav === 1 ? 'DASHBOARD' : selectedNav === 2 ? 'SESSIONS' : '' } </div>
          <div style={{ fontWeight: "bold", fontSize: "2rem", color: "blue" }}>
            {" "}
            - {selectedNav === 1 ? 'Connected Device' : selectedNav === 2 ? 'SELECT SUBJECT' : '' }
          </div>
        </div>
      </div>
    </div>
  );
}
