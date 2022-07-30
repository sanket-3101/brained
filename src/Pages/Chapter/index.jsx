import React, { useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../Component/Headerfile";
import EditDeleteSection from "../../Component/EditDelete";
import AddChapter from "./AddChapter";
function Chapter(props) {
  const [show, setShow] = useState(true);
  const { loader, subject, error } = useSelector((state) => state.subject);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loaderShow = () => {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };
  const onClick = (data) => {
    navigate(`/sessions/${data.id}`);
  };
  return (
    <>
      <div className="mainContainer">
        <div>
          {" "}
          <Dashboard />
        </div>
        <Container>
          <Header />
          <Button className="my-3 btn-lg btn-new" variant="info">
            Chapter{" "}
          </Button>

          <Card style={{ width: "78vw", padding: "3%" }} className="rightCard">
            <EditDeleteSection placeholder="Chapter" />
            <AddChapter />
          </Card>
        </Container>
      </div>
    </>
  );
}
export default Chapter;
