import React, { useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import Dashboard from "../../Component/Sidebar/index";
import { getAllDevice } from "../../redux/action/DeviceAction";
function Dashboardpage(props) {
  const dispatch = useDispatch();
  const { device } = useSelector(({ device }) => device);
console.log(device)

  useEffect(() => {
    dispatch(getAllDevice());
}, [dispatch]);
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
              <Button className="" variant="primary">
                {" "}
                <i class="fas fa-user-tie  mr-2"></i>device 1{" "}
              </Button>
              <Button className="" variant="primary">
                <i class="fas fa-user-tie  mr-2"></i> devices 2{" "}
              </Button>
              <Button className="" variant="primary">
                <i class="fas fa-user-tie mr-2 "></i> device 2{" "}
              </Button>
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
  );
}
const mapstatetoDispatch=()=>(
  {
    getAllDevice
  }
)
export default connect(null, mapstatetoDispatch)(Dashboardpage)
