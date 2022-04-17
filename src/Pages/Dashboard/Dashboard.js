import React, { useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import Dashboard from "../../Component/Sidebar/index";
import {
  getAllDevice,
  getAllDeviceById,
} from "../../redux/action/DeviceAction";
function Dashboardpage(props) {
  const dispatch = useDispatch();
  const { device, loader } = useSelector(({ device }) => device);
  console.log(loader);

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
  const loaderShow = () => {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };

  return (
    <>
      <Dashboard />
      <Container className="dashboardpart">
        <Button className="my-3 btn-lg" variant="info">
          Connected devices{" "}
        </Button>
        <Card  className="mb-2">
          <Card.Body>
            <Button className=" btn-lg" variant="success">
              <i class="fas fa-mobile-alt mr-2"></i>Connected{" "}
            </Button>
            <div>
              {loader && (
                 loaderShow()
              )}
              {device &&
                device.map((row) => {
                  return renderDeviceButton(row);
                })}
            </div>
          </Card.Body>
        </Card>
        <Card  className="mb-2">
          <Card.Body>
            <Button className=" btn-lg" variant="danger">
              {" "}
              <i class="fas fa-mobile-alt mr-2"></i>Disconnected{" "}
            </Button>
            <div>
            {loader && (
                 loaderShow()
              )}
              {device &&
                device.map((row) => {
                  return renderDeviceButton(row);
                })}
            </div>
          </Card.Body>
        </Card>
        <Card  className="mb-2">
          <Card.Body>
            <Button className=" btn-lg" variant="warning">
              {" "}
              <i class="fas fa-mobile-alt mr-2"></i>Check fit{" "}
            </Button>
            <div>
            {loader && (
                 loaderShow()
              )}
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
