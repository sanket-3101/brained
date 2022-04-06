import React from "react";
import AI from "../../assets/AI.jpeg";
export default function SelectChapter({
  setSelectedSubject
}) {
  const actionButton = (name, color) => (
    <button
      style={{
        width: "80px",
        height: "40px",
        border: 0,
        backgroundColor: color,
        color: "white",
        borderRadius: "5px",
      }}
    >
      {name}
    </button>
  );
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "75%",
        padding: "15px 35px",
      }}
    >
      <div
      onClick={() => setSelectedSubject('0')}
        style={{
          fontSize: "1.2rem",
          color: "blue",
          fontWeight: "bold",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Go Back
      </div>
      <div
        style={{
          display: "flex",
          height: "90%",
          width: "100%",
        }}
      >
        <div style={{ width: "65%", height: "100%" }}>
          <div
            style={{
              fontSize: "1rem",
              color: "black",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            ADD Chapter
          </div>
          <select
            style={{
              height: "40px",
              width: "70%",
              backgroundColor: "lightgrey",
              marginBottom: "40px",
            }}
            name="cars"
            id="cars"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <div
            style={{
              fontSize: "1rem",
              color: "black",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            ADD Topic
          </div>
          <textarea
            style={{
              backgroundColor: "lightgrey",
              marginBottom: "20px",
            }}
            id="w3review"
            name="w3review"
            rows="5"
            cols="50"
          ></textarea>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            width: "35%",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <img src={AI} style={{ height: "140px", width: "140px" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {actionButton("Start", "green")}
            {actionButton("Pause", "orange")}
            {actionButton("Stop", "red")}
          </div>
        </div>
      </div>
    </div>
  );
}
