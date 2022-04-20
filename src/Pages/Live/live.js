import React, { useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Header from "../../Component/Headerfile";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { NotificationManager } from "react-notifications";
function Dashboardpage(props) {
  const { sessionDetails } = useSelector((state) => state.session);
  const [liveData, setLiveData] = useState([]);
  const [loader, setLoader] = useState(true);
  const setNewData = (focusval) => {
    console.log("focus data ==>", focusval, liveData);
    let temp = liveData;
    const index = liveData.findIndex(
      (item) => item.deviceid === focusval.deviceid
    );
    console.log("index ==>", index);
    if (index != -1) {
      temp[index] = focusval;
    } else {
      if (temp.length === 0) {
        temp.push(focusval);
      } else {
        temp[temp.length] = focusval;
      }
    }
    setLiveData([...temp]);
  };

  useEffect(() => {
    console.log("Effect Called ===>", sessionDetails);
    let socket;
    if (sessionDetails) {
      console.log("url ==>", sessionDetails.url);
      socket = io(sessionDetails.url);
      // console.log(socket);

      socket.on("connect", function () {
        console.log("Socket Connected ==>", socket.connected); // true
      });

      // To join the room
      socket.emit("join", {
        username: "Sejpalsinh",
        room: sessionDetails.session_id,
      });
      // Will get data in {'deviceid': deviceid,'sessionid': sessionid,'focus':focus} format
      socket.on("focusval", (focusval) => {
        setLoader(false);
        setNewData(focusval);
      });
      return () => {
        socket.on("disconnect", () => {
          console.log(socket.connected); // false
        });
      };
      // conosle.log('Ses')
    } else {
      setLoader(false);
      NotificationManager.error("No Session Available!!");
    }
  }, []);

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
            Live
          </Button>

          <Card style={{ width: "78vw" }} className="mb-2 rightCard">
            {loader ? (
              <>
              Loading....
              </>
            ) : (
              <>
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
                      />
                      <label
                        class="custom-control-label"
                        for="defaultUnchecked3"
                      >
                        low
                      </label>
                    </div>
                  </div>
                  <Button className=" btn-lg" variant="info">
                    <i class="fas fa-mobile-alt mr-2"></i>Low attention &
                    focused of all device{" "}
                  </Button>
                  <div>
                    {liveData
                      .filter((data) => data.focus > 0 && data.focus <= 30)
                      .map((item) => (
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

                  <Button className=" btn-lg" variant="info">
                    <i class="fas fa-mobile-alt mr-2"></i>Average attention &
                    focused of all device{" "}
                  </Button>
                  <div>
                    {liveData
                      .filter((data) => data.focus > 30 && data.focus <= 80)
                      .map((item) => (
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

                  <Button className=" btn-lg" variant="info">
                    <i class="fas fa-mobile-alt mr-2"></i>High attention &
                    focused of all device{" "}
                  </Button>
                  <div>
                    {liveData
                      .filter((data) => data.focus > 80 && data.focus <= 100)
                      .map((item) => (
                        <Button className="" variant="primary">
                          {" "}
                          <i class="fas fa-user-tie  mr-2"></i>
                          {item.deviceid}{" "}
                        </Button>
                      ))}
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
