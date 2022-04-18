import React, { useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import Dashboard from "../../Component/Sidebar/index";
import {
  getAllDevice,
  setLoader,
  deviceById,
} from "../../redux/action/DeviceAction";
import LoaderComponent from "../../Component/helper/LoaderComponent";
function Dashboardpage(props) {
  const { loader, device, error } = useSelector((state) => state.device);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader());
    dispatch(getAllDevice());
  }, []);

  const getDeviceDetails = (data) => {
    dispatch(deviceById(data.device_id));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        {" "}
        <Dashboard />
      </div>

      {loader && <LoaderComponent />}
      {!loader && device ? (
        <>
          <Container className="dashboardpart">
            <Button className="my-3 btn-lg" variant="info">
              Connected devices{" "}
            </Button>
            <Card style={{ width: "50rem" }} className="mb-2 cardWIdth">
              <Card.Body>
                <Button className=" btn-lg" variant="success">
                  <i class="fas fa-mobile-alt mr-2"></i>Connected{" "}
                </Button>
                <div>
                  {device
                    .filter((item) => item.status == 1)
                    .map((data) => (
                      <>
                        <Button
                          className=""
                          variant="primary"
                          onClick={() => getDeviceDetails(data)}
                        >
                          {" "}
                          <i class="fas fa-user-tie  mr-2"></i>
                          {data.name}{" "}
                        </Button>
                      </>
                    ))}
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "50rem" }} className="mb-2 cardWIdth">
              <Card.Body>
                <Button className=" btn-lg" variant="danger">
                  {" "}
                  <i class="fas fa-mobile-alt mr-2"></i>Disconnected{" "}
                </Button>
                <div>
                  {device
                    .filter((item) => item.status == 1)
                    .map((data) => (
                      <>
                        <Button
                          className=""
                          variant="primary"
                          onClick={() => getDeviceDetails(data)}
                        >
                          {" "}
                          <i class="fas fa-user-tie  mr-2"></i>
                          {data.name}{" "}
                        </Button>
                      </>
                    ))}
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "50rem" }} className="mb-2 cardWIdth">
              <Card.Body>
                <Button className=" btn-lg" variant="warning">
                  {" "}
                  <i class="fas fa-mobile-alt mr-2"></i>Check fit{" "}
                </Button>
                <div>
                  {device
                    .filter((item) => item.status == 1)
                    .map((data) => (
                      <>
                        <Button
                          className=""
                          variant="primary"
                          onClick={() => getDeviceDetails(data)}
                        >
                          {" "}
                          <i class="fas fa-user-tie  mr-2"></i>
                          {data.name}{" "}
                        </Button>
                      </>
                    ))}
                </div>
              </Card.Body>
            </Card>
          </Container>
        </>
      ) : null}
    </div>
  );
}
const mapstatetoDispatch = () => ({
  getAllDevice,
});
export default connect(null, mapstatetoDispatch)(Dashboardpage);
