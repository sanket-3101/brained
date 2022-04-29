import React, { useEffect } from "react";
import { Button, Container, Card, Form } from "react-bootstrap";
import Header from "../../Component/Headerfile";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { getQuizDetails } from "../../redux/action/QuizAction";
import { useState } from "react";
import axios from "axios";
import { quizPost } from "../../Constant/enpoint";
import { NotificationManager } from "react-notifications";
import { getAllDevice } from "../../redux/action/DeviceAction";
function Quiz(props) {
  const { quizDetails } = useSelector((state) => state.quiz);
  const { device, error } = useSelector((state) => state.device);

  const dispatch = useDispatch();
  const [deviceId, setDeviseId] = useState("");

  const [questionAnswer, setQuestionAnswer] = useState([]);
  useEffect(() => {
    dispatch(getQuizDetails());
    dispatch(getAllDevice());
  }, []);
  const { loader, sessionDetails } = useSelector((state) => state.session);
  const onSelect = (option) => {
    const { id, quiz_question_id } = option;
    let temp = [];
    let found = false;
    temp = questionAnswer.map((item) => {
      if (item.quiz_question_id === quiz_question_id) {
        found = true;
        return option;
      }
      return item;
    });
    if (!found) {
      temp.push(option);
    }
    setQuestionAnswer(temp);
  };
  const onSubmit = () => {
    if (true) {
      const data = {
        // session_id: sessionDetails.session_id,
        device_id: deviceId,
        que_ans: questionAnswer.map((item) => {
          return {
            question_id: item.quiz_question_id,
            answer_id: item.id,
          };
        }),
      };
      axios
        .post(quizPost, data)
        .then((res) => {
          NotificationManager.success("Quiz Submitted!!", true);
          setDeviseId("");
        })
        .catch((err) => {
          NotificationManager.error("Quiz Failed!!");
          setDeviseId("");
        });
    } else {
      NotificationManager.error("No Session Available!!");
      setDeviseId("");
    }
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
                <div className="w-100 mt-10">
                  <Form.Control
                    as="select"
                    onChange={(e) => {
                      setDeviseId(e.target.value);
                    }}
                    aria-label="Default select example"
                  >
                    <option value=" ">Select Device</option>
                    {}
                    {device &&
                      device.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </Form.Control>
                </div>
                {quizDetails &&
                  quizDetails?.map((item) => {
                    return (
                      <>
                        <h2>{item.question}</h2>
                        {item.options.map((option) => {
                          return (
                            <div className="custom-control custom-radio m-3">
                              <input
                                type="radio"
                                class="custom-control-input"
                                name={option.quiz_question_id}
                                id={option.id}
                                // checked={option.id == questionAnswer}
                                onChange={(e) => onSelect(option)}
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

                <Button onClick={onSubmit} className="" variant="primary">
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
