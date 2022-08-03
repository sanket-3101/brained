import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoader, subjectById } from "../../redux/action/SubjectAction";
import { useNavigate } from "react-router-dom";
import {
  setChapterLoader,
  chapterById,
  getAllChapter,
  chapterId,
} from "../../redux/action/ChapterAction";
import {
  postSession,
  setSessionLoader,
  removeSession,
} from "../../redux/action/SessionAction";
import Dashboard from "../../Component/Sidebar";
import Header from "../../Component/Headerfile";
import { NotificationManager } from "react-notifications";
function SessionsAdd({ data }) {
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedChapter, setSelectedChapter] = useState("");
  const [topic_name, setTopicName] = useState("");
  const { subjectDetails } = useSelector((state) => state.subject);
  const { chapter } = useSelector((state) => state.chapter);
  const { device } = useSelector((state) => state.device);
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const { loader, sessionDetails } = useSelector((state) => state.session);

  //get chapter
  useEffect(() => {
    // dispatch(setLoader());
    // dispatch(getAllChapter());
  }, []);

  useEffect(() => {
    if (selectedSubjectId != "") {
      dispatch(chapterId(selectedSubjectId));
    }
  }, [selectedSubjectId]);
  const handleChapterChange = (e) => {
    setSelectedChapter(e.target.value);
    // dispatch(setChapterLoader());
    // dispatch(chapterById(e.target.value));
  };
  const handleBack = () => {
    navigate(`/sessions`);
  };
  const hanldeSessionStart = async () => {
    let deviceid = [];
    await device
      .filter((item) => item.status == 1)
      .map((item) => deviceid.push(item.device_id));
    if (topic_name == "") {
      NotificationManager.error("Topic Name is Required");
    } else if (selectedChapter == "") {
      NotificationManager.error("Please Select Chapter");
    } else if (deviceid.length < 1) {
      NotificationManager.error(
        "Cannot find device id redirecting to dashboard and try again !"
      );
      navigate("/dashboardpage");
    } else {
      const data = {
        topic_name: topic_name,
        chapter_id: selectedChapter,
        devices_list: deviceid.join(","),
      };
      dispatch(setSessionLoader());
      dispatch(postSession(data, navigate));
    }
  };
  const stopSession = () => {
    if (sessionDetails) {
      dispatch(removeSession(sessionDetails.session_id));
    } else {
      NotificationManager.error("No Session Available!!");
    }
  };
  return (
    <>
      <div className="mainContainer">
        <div> {/* <Dashboard /> */}</div>{" "}
        <Container>
          {/* <Header />
          <Button className="my-3 btn-lg btn-new" variant="info">
            Sessions{" "}
          </Button> */}

          <>
            {/* <Card style={{ width: "78vw" }} className="rightCard"> */}
            <div class="row" className="d-flex ">
              <div class="col-md-6">
                <h5
                  onClick={handleBack}
                  style={{ color: "blue", textAlign: "left" }}
                  className="mt-5 mb-3"
                >
                  {"Go Back"}
                </h5>
                <div>
                  <Form.Label>Select Subject</Form.Label>
                </div>
                <div className="w-100 mt-10 mb-10">
                  <Form.Select
                    onChange={(e) => setSelectedSubjectId(e.target.value)}
                    value={selectedSubjectId}
                    aria-label="Default select example"
                  >
                    <option value=" ">Select Subject</option>
                    {data &&
                      data.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </Form.Select>
                </div>
                <div style={{marginTop: '10px'}}>
                  <Form.Label>Select Chapter</Form.Label>
                </div>
                <div className="w-100 mt-10">
                  <Form.Select
                    onChange={handleChapterChange}
                    value={selectedChapter}
                    aria-label="Default select example"
                    disabled={selectedSubjectId == ""}
                  >
                    <option value=" ">Select chapter</option>
                    {chapter &&
                      chapter.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </Form.Select>
                </div>
                <div className="mt-3">
                  <Form.Label>Topic</Form.Label>

                  {/* <Button className="ml-5 mt-3 btn-md w-25" variant="info">
                    Add Topic
                  </Button> */}
                </div>
                <InputGroup>
                  <FormControl
                    style={{ height: "100px" }}
                    as="textarea"
                    placeholder="Enter Topic"
                    onChange={(e) => setTopicName(e.target.value)}
                  />
                </InputGroup>
                {/* <div className="w-25 ml-5 mt-3">
                  <Form.Select aria-label="Default select example">
                    <option>select Topic</option>
                    {chapterDetails && !cloader ? (
                      <>
                        {chapterDetails.topics.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </>
                    ) : null}
                  </Form.Select>
                </div> */}
                {/* <div className="w-25 ml-5 mt-3">
                  <InputGroup>
                    <FormControl placeholder="Enter Topic" />
                  </InputGroup>
                </div> */}
              </div>
              {/* <div className="d-flex justify-content-center col-md-6 mt-5">
                <Card style={{ width: "13rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "80%" }}
                    src={
                      subjectDetails?.name.toLowerCase() === "maths"
                        ? "https://sjcit.ac.in/wp-content/uploads/2022/03/mathematics-png.jpg"
                        : subjectDetails?.name.toLowerCase() === "science"
                        ? "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?size=626&ext=jpg "
                        : subjectDetails?.name.toLowerCase() === "ai"
                        ? "https://image.shutterstock.com/image-illustration/cybernetic-brain-electronic-chip-form-260nw-540433660.jpg"
                        : "https://source.unsplash.com/user/c_v_r/100x100"
                    }
                  />
                  <Card.Body className="bg-info text-center">
                    <Card.Title>
                      {subjectDetails ? subjectDetails.name : ""}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div> */}
            </div>
            <div
              style={{ marginRight: "16%" }}
              className="d-flex justify-content-start mt-3  mb-5"
            >
              <Button
                onClick={hanldeSessionStart}
                className=""
                variant="warning"
              >
                <i class="fas fa-user-tie mr-2 "></i> Start{" "}
              </Button>
              {/* <Button className="" variant="primary">
                  <i class="fas fa-user-tie mr-2 "></i> Pause{" "}
                </Button> */}
              {/* <Button onClick={stopSession} className="" variant="primary">
                <i class="fas fa-user-tie mr-2 "></i> Stop{" "}
              </Button> */}
            </div>
            {/* </Card> */}
          </>
        </Container>
      </div>
    </>
  );
}
export default SessionsAdd;
