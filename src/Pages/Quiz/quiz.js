import React, { useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Header from "../../Component/Headerfile";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { getQuizDetails } from "../../redux/action/QuizAction";
import { useState } from "react";

function Quiz(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuizDetails());
  }, []);
  const [questionAnswer, setQuestionAnswer] = useState([]);

  const { quizDetails } = useSelector((state) => state.quiz);
  const checkBoxChange = (e) => {
    setQuestionAnswer(e.target.value);
  };

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
            Quiz
          </Button>

          <Card style={{ width: "78vw" }} className="mb-2 rightCard">
            <>
              <Card.Body>
                {quizDetails &&
                  quizDetails.map((item) => {
                    return (
                      <>
                        <h2>{item.question}</h2>
                        {item.options.map((option) => {
                          return (
                            <div class="custom-control custom-checkbox m-3">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id={option.id}
                                checked={option.id == questionAnswer}
                                onChange={(e) => checkBoxChange(e)}
                              />
                              <label
                                class="custom-control-label"
                                for={option.id}
                              >
                                {option.option}
                              </label>
                            </div>
                          );
                        })}
                      </>
                    );
                  })}

                <Button className="" variant="primary">
                  Submit
                </Button>
              </Card.Body>
            </>
          </Card>
        </Container>
      </div>
    </>
  );
}
export default Quiz;
