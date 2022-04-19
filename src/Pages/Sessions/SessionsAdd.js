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
} from "../../redux/action/ChapterAction";
import {
  postSession,
  setSessionLoader,
  removeSession,
} from "../../redux/action/SessionAction";
import Dashboard from "../../Component/Sidebar";
import Header from "../../Component/Headerfile";
function SessionsAdd(props) {
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedChapter, setSelectedChapter] = useState("");
  const [topic_name, setTopicName] = useState("");
  const { subjectDetails } = useSelector((state) => state.subject);
  const { chapter } = useSelector((state) => state.chapter);
  const { device } = useSelector((state) => state.device);

  const { loader, sessionDetails } = useSelector((state) => state.session);

  //get chapter
  useEffect(() => {
    dispatch(setLoader());
    dispatch(subjectById(id));
    dispatch(getAllChapter());
  }, []);
  const handleChapterChange = (e) => {
    setSelectedChapter(e.target.value);
    // dispatch(setChapterLoader());
    // dispatch(chapterById(e.target.value));
  };
  const handleBack = () => {
    navigate(`/sessions`);
  };
  const hanldeSessionStart = () => {
    let deviceid = [];
    device
      .filter((item) => item.status == 1)
      .map((item) => deviceid.push(item.device_id));
    if (topic_name == "") {
      alert("Topic Name is Required");
    } else if (selectedChapter == "") {
      alert("Please Select Chapter");
    } else if (deviceid.length < 1) {
      alert("Cannot find device id redirecting to dashboard and try again !");
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
      dispatch(removeSession(sessionDetails.id));
    } else {
      alert("No Session Available!!");
    }
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {" "}
          <Dashboard />
        </div>{" "}
        <Container>
          <Header />
          <Button className="my-3 btn-lg" variant="info">
            Sessions{" "}
          </Button>

          <>
            <Card style={{ width: "65rem" }} className="">
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
                  <div className="w-100 mt-10">
                    <Form.Select
                      onChange={handleChapterChange}
                      aria-label="Default select example"
                    >
                      <option value=" ">Select chapter</option>
                      {chapter &&
                        chapter.map((item) => (
                          <option value={item.subject_id}>{item.name}</option>
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
                <div className="d-flex justify-content-center col-md-6 mt-5">
                  <Card style={{ width: "13rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://source.unsplash.com/user/c_v_r/100x100"
                    />
                    <Card.Body className="bg-info text-center">
                      <Card.Title>
                        {subjectDetails ? subjectDetails.name : ""}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3 mr-3 mb-5">
                <Button
                  onClick={hanldeSessionStart}
                  className=""
                  variant="warning"
                >
                  <i class="fas fa-user-tie mr-2 "></i> Start{" "}
                </Button>
                <Button className="" variant="primary">
                  <i class="fas fa-user-tie mr-2 "></i> Pause{" "}
                </Button>
                <Button onClick={stopSession} className="" variant="primary">
                  <i class="fas fa-user-tie mr-2 "></i> Stop{" "}
                </Button>
              </div>
            </Card>
          </>
        </Container>
      </div>
    </>
  );
}
export default SessionsAdd;
