import React, { useState } from "react";
import Header from "../../Component/Header";
import SideNav from "../../Component/SideNav";
import Session from "../Session";
import Dashboard from "./Dashboard";
export default function Home() {
  const [selectedNav, setSelectedNav] = useState(1);
  const changeNav = (num) => {
    setSelectedNav(num)
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        background: "lightgrey",
      }}
    >
      <SideNav changeNav={changeNav} selectedNav={selectedNav} />
      <div style={{ width: "75vw", padding: "0px 15px" }}>
        <Header selectedNav={selectedNav}/>
        {
            selectedNav === 1 ? <Dashboard /> :selectedNav === 2 ? <Session/> : null 
        }
      </div>
    </div>
  );
}
