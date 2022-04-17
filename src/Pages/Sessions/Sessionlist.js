import React from "react";
import { Button, Card } from "react-bootstrap";

function Sessionslist(props) {
  const { data } = props;
  console.log("data ===>", props)
  return (
    <>
      <h5 className="m-5">Please select Subjects:</h5>
      <div class="row" className="d-flex text-center">
        {data.map((item) => {
          return (
            <>
              <div onClick={() => props.handleShow(item)} key={item.id} class="col-md-4">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://source.unsplash.com/user/c_v_r/100x100"
                  />
                  <Card.Body className="bg-info">
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <div className="text-center m-3">
        <Button
          className=""
          variant="primary"
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
