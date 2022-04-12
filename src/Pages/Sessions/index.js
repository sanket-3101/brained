import React, { useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Dashboard from "../../Component/Sidebar/index";
import Sessionslist from "./Sessionlist";
import SessionsAdd from "./SessionsAdd";
function Sessions(props) {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);

  return (
    <>
      <Dashboard />
      <Container>
        <Button className="my-3 btn-lg" variant="info">
          Sessions{" "}
        </Button>
        <Card style={{ width: "80rem" }} className="">
          {show ? <Sessionslist handleShow={handleShow} /> : <SessionsAdd />}
        </Card>
      </Container>
    </>
  );
}
export default Sessions;
