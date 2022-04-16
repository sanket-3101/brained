import React, { useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import Dashboard from "../../Component/Sidebar/index";
import { getDeviceById } from "../../Constant/enpoint";
import {
  getAllDevice,
  getAllDeviceById,
} from "../../redux/action/DeviceAction";
function Dashboardpage(props) {
  const dispatch = useDispatch();
  const { device } = useSelector(({ device }) => device);
  console.log(device);

  useEffect(() => {
    dispatch(getAllDevice());
  }, [dispatch]);

  const renderDeviceButton = (row) => {
    return (
      <Button
        className=""
        onClick={() => dispatch(getAllDeviceById(row.device_id))}
        variant="primary"
      >
        {" "}
        <i class="fas fa-user-tie  mr-2"></i>
        {row.name}
      </Button>
    );
  };

  return (
    <>
      <Dashboard />
      <Container className="dashboardpart">
        <Button className="my-3 btn-lg" variant="info">
          Connected devices{" "}
        </Button>
        <Card style={{ width: "50rem" }} className="mb-2">
          <Card.Body>
            <Button className=" btn-lg" variant="success">
              <i class="fas fa-mobile-alt mr-2"></i>Connected{" "}
            </Button>
            <div>
              {device &&
                device.map((row) => {
                  return renderDeviceButton(row);
                })}
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "50rem" }} className="mb-2">
          <Card.Body>
            <Button className=" btn-lg" variant="danger">
              {" "}
              <i class="fas fa-mobile-alt mr-2"></i>Disconnected{" "}
            </Button>
            <div>
              {device &&
                device.map((row) => {
                  return renderDeviceButton(row);
                })}
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "50rem" }} className="mb-2">
          <Card.Body>
            <Button className=" btn-lg" variant="warning">
              {" "}
              <i class="fas fa-mobile-alt mr-2"></i>Check fit{" "}
            </Button>
            <div>
              {device &&
                device.map((row) => {
                  return renderDeviceButton(row);
                })}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
const mapstatetoDispatch = () => ({
  getAllDevice,
});
export default connect(null, mapstatetoDispatch)(Dashboardpage);
