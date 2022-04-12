import React from "react";
import { Button, Card } from "react-bootstrap";

function Sessionslist(props) {
  return (
    <>
      <h5 className="m-5">Please select Subjects:</h5>
      <div class="row" className="d-flex text-center">
        <div class="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/user/c_v_r/100x100"
            />
            <Card.Body className="bg-info">
              <Card.Title>MATHS</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/user/c_v_r/100x100"
            />
            <Card.Body className="bg-info">
              <Card.Title>Science</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/user/c_v_r/100x100"
            />
            <Card.Body className="bg-info">
              <Card.Title>align</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="text-center m-3">
        <Button
          className=""
          variant="info"
          size="lg"
          onClick={() => props.handleShow()}
        >
          Continue{" "}
        </Button>
      </div>
    </>
  );
}
export default Sessionslist;
