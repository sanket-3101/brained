import React, { useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Header from "../../Component/Headerfile";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { getQuizDetails } from "../../redux/action/QuizAction";
import { useState } from "react";
import axios from "axios";
import { quizPost } from "../../Constant/enpoint";
import { NotificationManager } from "react-notifications";
function Quiz(props) {
  const { quizDetails } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const [questionAnswer, setQuestionAnswer] = useState([]);
  useEffect(() => {
    dispatch(getQuizDetails());
  }, []);
  const { loader, sessionDetails } = useSelector((state) => state.session);
  const onSelect = (option) => {
    const {
      id,
      quiz_question_id
    } = option
    let temp = []
    let found = false
    temp = questionAnswer.map(item => {
      if (item.quiz_question_id === quiz_question_id) {
        found = true
        return option
      }
      return item
    })
    if (!found) {
      temp.push(option)
    }
    setQuestionAnswer(temp)
  }
  const onSubmit = () => {
    console.log('Details ===>', sessionDetails)
    if (sessionDetails) {
      const data = {
        session_id: sessionDetails.session_id,
        device_id: "",
        que_ans: questionAnswer.map((item) => {
          return {
            question_id: item.quiz_question_id,
            answer_id: item.id
          }
        })
      }
      console.log(data)
      axios.post(quizPost, data).then((res) => {
        NotificationManager.error("Quiz Submitted!!", true);
      }).catch((err) => NotificationManager.error("Quiz Failed!!"))
    } else {
      NotificationManager.error("No Session Available!!");
    }

  }
  console.log(quizDetails)
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
