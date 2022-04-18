import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import Header from "../../Component/Headerfile";
import Dashboard from "../../Component/Sidebar/index";
function Dashboardpage(props) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {" "}
          <Dashboard />
        </div>
        <Container className="dashboardpart">
        <Header/>
          <Button className="my-3 btn-lg" variant="info">
            Live
          </Button>
          <Card style={{ width: "50rem" }} className="mb-2">
            <Card.Body>
              <div className="d-flex">
                <h2>
                  Select a <span style={{ color: "blue" }}>critearea</span>{" "}
                </h2>
                <div class="custom-control custom-checkbox m-3">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked"
                  />
                  <label class="custom-control-label" for="defaultUnchecked">
                    Average
                  </label>
                </div>
                <div class="custom-control custom-checkbox m-3">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked2"
                  />
                  <label class="custom-control-label" for="defaultUnchecked2">
                    High
                  </label>
                </div>
                <div class="custom-control custom-checkbox m-3">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked3"
                  />
                  <label class="custom-control-label" for="defaultUnchecked3">
                    low
                  </label>
                </div>
              </div>
              <Button className=" btn-lg" variant="info">
                <i class="fas fa-mobile-alt mr-2"></i>Average attention &
                focused of all device{" "}
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
              <Button className=" btn-lg" variant="info">
                <i class="fas fa-mobile-alt mr-2"></i>High attention & focused
                of all device{" "}
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
              <Button className=" btn-lg" variant="info">
                <i class="fas fa-mobile-alt mr-2"></i>Low attention & focused of
                all device{" "}
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
      </div>
    </>
  );
}
export default Dashboardpage;
