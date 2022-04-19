import React, { useEffect, useState } from "react";
import Dashboard from "../../Component/Sidebar/index";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Header from "../../Component/Headerfile";
import axios from "axios";
import { getReportData } from "../../Constant/enpoint";
import { useSelector, useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
    //   text: 'Chart.js Bar Chart',
    // },
  },
};

const labels = ["Device 1", "Device 2", "Device 3", "Device 4", "Device 5"];

export const data = {
  labels,
  datasets: [
    {
      label: "Attention",
      data: [300, 500, 400, 100, 50],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Focus",
      data: [100, 200, 300, 80, 70],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Marks",
      data: [100, 200, 300, 250, 350],
      backgroundColor: "orange",
    },
  ],
};

function Report(props) {
  const { sessionDetails } = useSelector((state) => state.session);
  const [graphData, setGraphData] = useState(null);
  const [sessionList, setSessionList] = useState([])
  useEffect(() => {
    getReportsData();
  }, []);

  const getReportsData = () => {
    if (sessionDetails) {
      axios
        .get(getReportData(1))
        .then((res) => {
          setGraphData(res.data.data);
        })
        .catch((err) => console.log(err));
    } else {
      NotificationManager.error("No Current Session");
    }
  };
  const handleSessionChange = () => {}
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {" "}
          <Dashboard />
        </div>
        <Container className="dashboardpart">
          <Header />
          <Button className="my-3 btn-lg" variant="info">
            Report
          </Button>
          <div>
            <Form.Label>Select Session</Form.Label>
          </div>
          <div className="w-100 mt-10">
            <Form.Select
              onChange={(e) => handleSessionChange(e)}
              aria-label="Default select example"
            >
              <option value=" ">Select Session</option>
              {/* {sessionList &&
                sessionList.map((item) => (
                  <option value={item.subject_id}>{item.name}</option>
                ))} */}
            </Form.Select>
          </div>
          <div style={{ height: "200px" }}>
            {graphData ? <Bar options={options} data={graphData} /> : ""}
          </div>
        </Container>
      </div>
    </>
  );
}
export default Report;
