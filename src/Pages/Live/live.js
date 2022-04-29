import React, { useEffect, useState } from "react";
import { Button, Container, Card, OverlayTrigger, Popover } from "react-bootstrap";
import Header from "../../Component/Headerfile";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";
import { removeSession } from "../../redux/action/SessionAction";
function Dashboardpage(props) {
  const { sessionDetails, livedata, liveDataLoader } = useSelector(
    (state) => state.session
  );
  const dispatch = useDispatch();
  // const [liveData, setLiveData] = useState([]);
  const [showView, setShowView] = useState({
    low: true,
    high: true,
    average: true,
  });
  const [loader, setLoader] = useState(false);
  const [low, setLow] = useState([]);
  const [average, setAverage] = useState([]);
  const [high, setHigh] = useState([]);

  useEffect(() => {
    setLow(livedata.filter((data) => data.focus > 0 && data.focus <= 30));
    setAverage(livedata.filter((data) => data.focus > 30 && data.focus <= 80));
    setHigh(livedata.filter((data) => data.focus > 80 && data.focus <= 100));
  }, [livedata]);
  const checkBoxChange = (name, value) => {
    setShowView({
      ...showView,
      [name]: value,
    });
  };
  const stopSession = () => {
    if (sessionDetails) {
      dispatch(removeSession(sessionDetails.session_id));
    } else {
      NotificationManager.error("No Session Available!!");
    }
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        {/* <Button className="popOverBtn" variant="primary">Pause</Button>{' '} */}
        <Button onClick={stopSession} className="popOverBtn" variant="danger">Stop</Button>{' '}
        {/* <Button className="popOverBtn" variant="success">Start</Button>{' '} */}
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className="mainContainer">
        <div>
          {" "}
          <Dashboard />
        </div>
        <Container className="dashboardpart">
          <Header />
          <Button className="my-3 btn-lg btn-new" variant="info">
            Live
          </Button>

          <Card style={{ width: "78vw" }} className="mb-2 rightCard">
            {/* {!sessionDetails ? (
              <p>No Session Created....</p>
            ) : liveDataLoader ? (
              <p>Loading....</p>
            ) : ( */}
            {false ? (
              <p>No Session Created....</p>
            ) : false ? (
              <p>Loading....</p>
            ) : (
              <>
                <Card.Body>
                  <div className="d-flex">
                    <h2>
                      Select a <span style={{ color: "blue" }}>Criteria</span>{" "}
                    </h2>
                    <div class="custom-control custom-checkbox m-3">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="defaultUnchecked"
                        checked={showView.average}
                        onChange={(e) =>
                          checkBoxChange("average", !showView.average)
                        }
                      />
                      <label
                        class="custom-control-label"
                        for="defaultUnchecked"
                      >
                        Average
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox m-3">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="defaultUnchecked2"
                        checked={showView.high}
                        onChange={(e) => checkBoxChange("high", !showView.high)}
                      />
                      <label
                        class="custom-control-label"
                        for="defaultUnchecked2"
                      >
                        High
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox m-3">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="defaultUnchecked3"
                        checked={showView.low}
                        onChange={(e) => checkBoxChange("low", !showView.low)}
                      />
                      <label
                        class="custom-control-label"
                        for="defaultUnchecked3"
                      >
                        low
                      </label>
                    </div>
                  </div>
                  {showView.low ? (
                    <>
                      <Button className="btn-lg btn-new" variant="info">
                        <i class="fas fa-mobile-alt mr-2"></i>Low attention &
                        focused of all device{" "}
                      </Button>
                      <div>
                        {low.map((item) => (
                          <>
                            <Button className="" variant="primary">
                              {" "}
                              <i class="fas fa-user-tie  mr-2"></i>
                              {item.deviceid}{" "}
                            </Button>
                            <br />
                          </>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {showView.average ? (
                    <>
                      <Button className=" btn-lg btn-new" variant="info">
                        <i class="fas fa-mobile-alt mr-2"></i>Average attention
                        & focused of all device{" "}
                      </Button>
                      <div>
                        {average.map((item) => (
                          <>
                            <Button className="" variant="primary">
                              {" "}
                              <i class="fas fa-user-tie  mr-2"></i>
                              {item.deviceid}{" "}
                            </Button>
                            <br />
                          </>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {showView.high ? (
                    <>
                      <Button className="btn-lg btn-new" variant="info">
                        <i class="fas fa-mobile-alt mr-2"></i>High attention &
                        focused of all device{" "}
                      </Button>
                      <div>
                        {high.map((item) => (
                          <Button className="" variant="primary">
                            {" "}
                            <i class="fas fa-user-tie  mr-2"></i>
                            {item.deviceid}{" "}
                          </Button>
                        ))}
                      </div>
                    </>
                  ) : null}
                  <div className="popOver">
                    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                      <div className="cricleText"><h1>+</h1></div>
                    </OverlayTrigger>
                  </div>
                </Card.Body>

              </>
            )}
          </Card>
        </Container>
      </div>
    </>
  );
}
export default Dashboardpage;
