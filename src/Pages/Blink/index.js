import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Dashboard from "../../Component/Sidebar";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Header from "../../Component/Headerfile";
import { useSelector, useDispatch } from "react-redux";
import {
  Sparklines,
  SparklinesLine,
  SparklinesNormalBand,
} from "react-sparklines";
// import { Sparklines, SparklinesLine } from 'react-sparklines';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   //   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: [100, 200, 300, 400, 500],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     // {
//     //   label: "Dataset 2",
//     //   data: [600, 700, 800, 900, 100],
//     //   borderColor: "rgb(53, 162, 235)",
//     //   backgroundColor: "rgba(53, 162, 235, 0.5)",
//     // },
//   ],
// };
function Blink(props) {
  const { blinkDetails, loader } = useSelector((state) => state.blink);
  const { sessionDetails, sessionsList } = useSelector(
    (state) => state.session
  );
  const [plots, setPlots] = useState(null);
  const [dropDownList, setDropDownList] = useState([]);
  const [selectedDeviceId, setSelectedId] = useState("");

  useEffect(() => {
    if (blinkDetails) {
      let temp = dropDownList;
      const index = dropDownList.findIndex(
        (item) => item.deviceid === blinkDetails.deviceid
      );
      console.log("index ==>", index);
      if (index != -1) {
        temp[index] = blinkDetails;
      } else {
        if (temp.length === 0) {
          temp.push(blinkDetails);
        } else {
          temp[temp.length] = blinkDetails;
        }
      }
      console.log("Temp ===>", temp);
      setDropDownList(temp);
      updatePlots(blinkDetails);
    }
  }, [blinkDetails]);

  const updatePlots = (data) => {
    console.log("Plots ===>", plots);
    let details = plots ? [...plots, data] : [data];

    if (selectedDeviceId != "") {
      details = details.filter((item) => item.deviceid === selectedDeviceId);
    }
    setPlots(details);
  };

  const handleDeviceIdChange = (value) => {
    let filter = plots.filter((item) => item.deviceid === value);
    setPlots([...filter]);
    setSelectedId(value);
  };
  return (
    <>
      <div className="mainContainer">
        <div>
          {" "}
          <Dashboard />
        </div>

        <Container className="dashboardpart">
          <Header />
          <Button className="my-3 btn-lg" variant="info">
            Blink
          </Button>
          <div style={{ width: "78vw" }} className="rightCard">
            <Form.Control
              as="select"
              onChange={(e) => {
                handleDeviceIdChange(e.target.value);
              }}
              aria-label="Default select example"
            >
              <option value=" ">Select Device</option>
              {}
              {dropDownList &&
                dropDownList.map((item) => (
                  <option value={item.deviceid}>{item.deviceid}</option>
                ))}
            </Form.Control>
            <div>
              {plots ? (
                <Sparklines
                  data={plots.map((item) => item.data)}
                  limit={5}
                  width={100}
                  height={20}
                  margin={5}
                >
                  <SparklinesLine color="blue" />
                  <SparklinesNormalBand />
                </Sparklines>
              ) : null}
            </div>
            {/* <div>{plots ? <Line options={options} data={plots} /> : null}</div> */}
          </div>
        </Container>
      </div>
    </>
  );
}
export default Blink;
