import React from "react";
import Math from "../../assets/Math.jpeg";
import Science from "../../assets/Science.jpeg";
import AI from "../../assets/AI.jpeg";
export default function SelectSubject({setSelectedSubject}) {
  const SubjectCard = (img, id) => (
    <div
    onClick={() => setSelectedSubject(id)}
      style={{
        height: "180px",
        width: "200px",
        cursor: 'pointer'
      }}
    >
      <img src={img} style={{ height: "100%", width: "100%" }} />
    </div>
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
        style={{
          fontSize: "1.2rem",
          color: "black",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        PLEASE SELECT SUBJECT
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
      {SubjectCard(Math, '1')}
      {SubjectCard(Science, '2')}
      {SubjectCard(AI, '3')}
      </div>

    </div>
  );
}
