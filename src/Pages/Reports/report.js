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
import {getAllSessions} from '../../redux/action/SessionAction'
import { getReportData, } from "../../Constant/enpoint";
import { useSelector, useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";
import ErrorHandler from "../../Component/helper/ErrorHandler";
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
  const { sessionDetails ,sessionsList} = useSelector((state) => state.session);
  const [graphData, setGraphData] = useState(null);
  const [sessionList, setSessionList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch( getAllSessions());
  }, []);

  const getReportsData = (e) => {
      axios
        .get(getReportData(e.target.value))
        .then((res) => {
          setGraphData(res.data.data);
        })
        .catch((err) => ErrorHandler(err));
   
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
            Report
          </Button>
          <div style={{width: '78vw'}} className="rightCard">
            <div className="w-100 mt-10">
            <Form.Control
          as="select"
                onChange={(e) => getReportsData(e)}
                aria-label="Default select example"
              >
                <option value=" ">Select Session</option>{}
                 {sessionsList &&
                sessionsList.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))} 
              </Form.Control>
            </div>
            <div>
              {graphData ? <Bar options={options} data={graphData} /> : ""}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Report;
