import React from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
function SessionsAdd(props) {
  return (
    <>
      <div class="row" className="d-flex ">
        <div class="col-md-6">
          <h5 className="ml-5 mt-5">selected Sujects:</h5>
          <div>
            <Button className="ml-5 btn-md w-25" variant="info">
              Add Chapter
            </Button>
          </div>
          <div className="w-25 ml-5 mt-3">
            <Form.Select aria-label="Default select example">
              <option>select chapter</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div>
            <Button className="ml-5 mt-3 btn-md w-25" variant="info">
              Add Topic
            </Button>
          </div>
          <div className="w-25 ml-5 mt-3">
            <InputGroup>
              <FormControl placeholder="Enter Topic" />
            </InputGroup>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <Card style={{ width: "12rem" }}>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/user/c_v_r/100x100"
            />
            <Card.Body className="bg-info text-center">
              <Card.Title>AI</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-5">
      <Button className=" btn-md" variant="warning">
      <i class="fa-solid fa-circle-play"></i>start
            </Button>
        <Button className="ml-5" variant="warning">
          {" "}
          stop{" "}
        </Button>
        <Button className="ml-5" variant="danger">
          {" "}
          pause{" "}
        </Button>
      </div>
    </>
  );
}
export default SessionsAdd;
