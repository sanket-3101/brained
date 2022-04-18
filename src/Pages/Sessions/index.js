import React, { useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Dashboard from "../../Component/Sidebar/index";
import Sessionslist from "./Sessionlist";
import SessionsAdd from "./SessionsAdd";
import { setLoader, getAllSubject } from "../../redux/action/SubjectAction";
import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
} from "react-router-dom";
import Header from "../../Component/Headerfile";
function Sessions(props) {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);
  const { loader, subject, error } = useSelector((state) => state.subject);
  const dispatch = useDispatch();
  let navigate = useNavigate(); 
  useEffect(() => {
    dispatch(setLoader());
    dispatch(getAllSubject())
  }, []);
  const loaderShow = () => {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };
  const onClick =(data) => {
    navigate(`/sessions/${data.id}`);
  }
  console.log('subject ===>', subject)
  return (
    <>
      <div style={{ display: "flex" }}>
      <div>
        {" "}
        <Dashboard />
      </div>
      <Container>
      <Header/>
        <Button className="my-3 btn-lg" variant="info">
          Sessions{" "}
        </Button>
        {loader && loaderShow()}
        {!loader && subject ? (
          <>
            <Card style={{ width: "80rem" }} className="">
              {/* {show ? (
                <Sessionslist data={subject} handleShow={onClick} />
              ) : (
                <SessionsAdd />
              )} */}
                   <Sessionslist data={subject} handleShow={onClick} />
            </Card>
          </>
        ) : null}
      </Container>
      </div>
    </>
  );
}
export default Sessions;
