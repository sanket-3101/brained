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
import Header from "../../Component/Headerfile";
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
    <div className="mainContainer">
      <div>
        {" "}
        <Dashboard />
      </div>

      {loader && <LoaderComponent />}
      {!loader && device ? (
        <>
          <Container className="dashboardpart">
            <Header />
            <Button className="my-3 btn-lg btn-new" variant="info">
              Connected devices{" "}
            </Button>

            <Card
              style={{ width: "78vw" }}
              className="mb-2 cardWIdth rightCard"
            >
              <Card.Body>
                <Button className="btn-lg btn-new" variant="success">
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
                <Button className="btn-lg btn-new" variant="danger">
                  {" "}
                  <i class="fas fa-mobile-alt mr-2"></i>Disconnected{" "}
                </Button>
                <div>
                  {device
                    .filter((item) => item.status == 0)
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
                <Button className=" btn-lg btn-new" variant="warning">
                  {" "}
                  <i class="fas fa-mobile-alt mr-2"></i>Check fit{" "}
                </Button>
                <div>
                  {device
                    .filter((item) => item.status == 2)
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
