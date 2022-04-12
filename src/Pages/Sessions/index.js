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
        <Button className="m-2" variant="primary">
          Sessions{" "}
        </Button>
        <Card style={{ width: "80rem" }} className="m-5">
          {show ? <Sessionslist handleShow={handleShow} /> : <SessionsAdd />}
        </Card>
      </Container>
    </>
  );
}
export default Sessions;
