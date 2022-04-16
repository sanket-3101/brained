import React, { useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Dashboard from "../../Component/Sidebar/index";
import Sessionslist from "./Sessionlist";
import SessionsAdd from "./SessionsAdd";
import { setLoader, getAllChapter } from "../../redux/action/SubjectAction";
import { useSelector, useDispatch } from "react-redux";

function Sessions(props) {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);
  const { loader, subject, error } = useSelector((state) => state.subject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader());
  }, []);
  return (
    <>
      <Dashboard />
      <Container>
        <Button className="my-3 btn-lg" variant="info">
          Sessions{" "}
        </Button>
        {!loader && subject ? (
          <>
            <Card style={{ width: "80rem" }} className="">
              {show ? (
                <Sessionslist handleShow={handleShow} />
              ) : (
                <SessionsAdd />
              )}
            </Card>
          </>
        ) : null}
      </Container>
    </>
  );
}
export default Sessions;
