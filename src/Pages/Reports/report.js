import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import Dashboard from "../../Component/Sidebar/index";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
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
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Bar Chart',
      // },
    },
  };
  
  const labels = ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Attention',
        data: [300,500,400,100,50],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Focus',
        data: [100,200,300, 80,70],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Marks',
        data: [100,200,300, 250, 350],
        backgroundColor: 'orange',
      },
    ],
  };
function Report(props) {
  return (
    <>
      <Dashboard />
      <Container className="dashboardpart">
        <Button className="my-3 btn-lg" variant="info">
          Report
        </Button>
        <div style={{height: '200px'}}>
        <Bar options={options} data={data} />;
        </div>
       
      </Container>
    </>
  );
}
export default Report;
