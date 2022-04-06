import React from "react";
import DashBoardCard from "../../Component/DashBoardCard";
import connected from '../../assets/connected.png'
import disconnected from '../../assets/disconnected.png'
import checkfit from '../../assets/checkfit.png'
export default function Dashboard() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "70%",
        display: "flex",
        padding: "15px 15px",
        justifyContent: "space-around",
      }}
    >
     <DashBoardCard color={'green'} title="CONNECTED" img={connected}/>
     <DashBoardCard color={'red'} title="DISCONNECTED" img={disconnected}/>
     <DashBoardCard color={'orange'} title="CHECK FIX" img={checkfit}/>
    </div>
  );
}
