import React, { useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { getAllDevice, setLoader, deviceById } from "../../redux/action/DeviceAction";
function Dashboardpage(props) {
  const { loader, device, error } = useSelector((state) => state.device);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader());
    dispatch(getAllDevice());
  }, []);

  
  const getDeviceDetails = (data) => {
    dispatch(deviceById(data.device_id));
  }
  return (
    <>
      <Dashboard />
      {!loader && device ? (
        <>
          <Container className="dashboardpart">
            <Button className="my-3 btn-lg" variant="info">
              Connected devices{" "}
            </Button>
            <Card style={{ width: "50rem" }} className="mb-2">
              <Card.Body>
                <Button className=" btn-lg" variant="success">
                  <i class="fas fa-mobile-alt mr-2"></i>Connected{" "}
                </Button>
                {device
                  .filter((item) => item.status == 1)
                  .map((data) => (
                    <>
                      <div onClick={() => getDeviceDetails(data)}>
                        <Button className="" variant="primary">
                          {" "}
                          <i class="fas fa-user-tie  mr-2"></i>{data.name}{" "}
                        </Button>
                     
                      </div>
                    </>
                  ))}
              </Card.Body>
            </Card>
            <Card style={{ width: "50rem" }} className="mb-2">
              <Card.Body>
                <Button className=" btn-lg" variant="danger">
                  {" "}
                  <i class="fas fa-mobile-alt mr-2"></i>Disconnected{" "}
                </Button>
                <div>
                  <Button className="" variant="primary">
                    <i class="fas fa-user-tie mr-2"></i> device 4{" "}
                  </Button>
                  <Button className="" variant="primary">
                    <i class="fas fa-user-tie mr-2"></i> device 5{" "}
                  </Button>
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
                  <Button className="" variant="primary">
                    <i class="fas fa-user-tie mr-2"></i> device 4{" "}
                  </Button>
                  <Button className="" variant="primary">
                    <i class="fas fa-user-tie mr-2"></i> device 5{" "}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </>
      ) : null}
    </>
  );
}
export default Dashboardpage;
