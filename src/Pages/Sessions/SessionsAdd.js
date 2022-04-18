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
import {
  setChapterLoader,
  chapterById,
  getAllChapter,
} from "../../redux/action/ChapterAction";
import Dashboard from "../../Component/Sidebar";
import Header from "../../Component/Headerfile";
function SessionsAdd(props) {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { loader, subjectDetails, error } = useSelector(
    (state) => state.subject
  );
  const { cloader, chapterDetails, c_error, chapter } = useSelector(
    (state) => state.chapter
  );
  console.log(chapter);

  //get chapter
  useEffect(() => {
    dispatch(setLoader());
    dispatch(subjectById(id));
    dispatch(getAllChapter());
  }, []);
  const handleChapterChange = (e) => {
    dispatch(setChapterLoader());
    dispatch(chapterById(e.target.value));
  };
  console.log("Id ===>", id);
  console.log("subject details ===>", subjectDetails);
  console.log("chapter details ===>", chapterDetails);
  return (
    <>
 <div style={{ display: "flex" }}>
      <div>
        {" "}
        <Dashboard />
      </div>      <Container>
      <Header/>
        <Button className="my-3 btn-lg" variant="info">
          Sessions{" "}
        </Button>

        <>
          <Card style={{ width: "80rem" }} className="">
            <div class="row" className="d-flex ">
              <div class="col-md-6">
                <h5 className="ml-5 mt-5">selected Sujects:</h5>
                <div>
                  <Button className="ml-5 btn-md w-25" variant="info">
                    Add Chapter
                  </Button>
                </div>
                <div className="w-25 ml-5 mt-3">
                  <Form.Select
                    onChange={handleChapterChange}
                    aria-label="Default select example"
                  >
                    <option>select chapter</option>
                    {chapter &&
                      chapter.map((item) => (
                        <option value={item.subject_id}>{item.name}</option>
                      ))}
                  </Form.Select>
                </div>
                <div>
                  <Button className="ml-5 mt-3 btn-md w-25" variant="info">
                    Add Topic
                  </Button>
                </div>
                <div className="w-25 ml-5 mt-3">
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
                </div>
                <div className="w-25 ml-5 mt-3">
                  <InputGroup>
                    <FormControl placeholder="Enter Topic" />
                  </InputGroup>
                </div>
              </div>
              <div class="col-md-6 mt-5">
                <Card style={{ width: "13rem" }}>
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
              <Button className="" variant="warning">
                <i class="fas fa-user-tie mr-2 "></i> Start{" "}
              </Button>
              <Button className="" variant="primary">
                <i class="fas fa-user-tie mr-2 "></i> Pause{" "}
              </Button>
              <Button className="" variant="primary">
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
