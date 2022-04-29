import React from "react";
import { Button, Card } from "react-bootstrap";

function Sessionslist(props) {
  const { data } = props;
  return (
    <div className="rightCard">
      <h5 className="m-5">Please Select Subjects:</h5>
      <div class="row" className="d-flex text-center">
        {data.map((item) => {
          return (
            <>
              <div onClick={() => props.handleShow(item)} key={item.id} class="col-md-4">
                <Card style={{ width: "12rem", borderTopLeftRadius: '15px', borderTopRightRadius: '15px', border: 'none', background: '#0dcaf0' }}>
                  <Card.Img
                    variant="top"
                    src={item.name.toLowerCase() === 'science' ? 'https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?size=626&ext=jpg ' : item.name.toLowerCase() === 'ai' ? 'https://image.shutterstock.com/image-illustration/cybernetic-brain-electronic-chip-form-260nw-540433660.jpg' : "https://source.unsplash.com/user/c_v_r/100x100"}
                  />
                  <Card.Body style={{ width: "12rem", borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', bacground: '#0dcaf0' }} className="">
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
      {/* <div className="text-center m-3">
        <Button
          className=""
          variant="primary"
          size="lg"
          onClick={() => props.handleShow()}
        >
          Continue{" "}
        </Button>
      </div> */}
    </div>
  );
}
export default Sessionslist;
