import React, { useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../Component/Headerfile";
import EditDeleteSection from "../../Component/EditDelete";
import AddSubject from "./AddSubject";
import { setLoader, getAllSubject } from "../../redux/action/SubjectAction";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import {
  putSubjectById,
  postSubject,
  deleteSubjectById,
} from "../../Constant/enpoint";
function Subject(props) {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const { loader, subject, error } = useSelector((state) => state.subject);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    getInitialList();
  }, []);

  const getInitialList = () => {
    dispatch(setLoader());
    dispatch(getAllSubject());
  };
  const loaderShow = () => {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };
  const handleEdit = () => {
    if (selectedSubject != "") {
      setIsEdit(true);
      setSubjectText(
        subject.filter((item) => item.id == selectedSubject)[0].name
      );
    }
  };
  const handleCancelEdit = () => {
    setSubjectText("");
    setIsEdit(false);
  };

  const handleSave = () => {
    if (subjectText != "") {
      let url = isEdit ? putSubjectById(selectedSubject) : postSubject;
      let data = { name: subjectText };
      if (isEdit) {
        data.id = selectedSubject;
      }
      axios({
        url: url,
        method: isEdit ? "PUT" : "POST",
        data: data,
      })
        .then((res) => {
          NotificationManager.success(
            isEdit ? "Subject Updated" : "Subject Added"
          );
          setSelectedSubject("");
          dispatch(getAllSubject());
          setIsEdit(false);
          setSubjectText("");
        })
        .catch((err) => NotificationManager.error("Failed"));
    }
  };
  const handleDelete = () => {
    if (selectedSubject != "") {
      axios
        .delete(deleteSubjectById(selectedSubject))
        .then((res) => {
          NotificationManager.success("Subject Deleted Successfully");
          setSelectedSubject("");
          dispatch(getAllSubject());
          setIsEdit(false);
          setSubjectText("");
        })
        .catch((err) => NotificationManager.error("Failed to Delete"));
    }
  };
  return (
    <>
      <div className="mainContainer">
        <div>
          {" "}
          <Dashboard />
        </div>
        <Container>
          <Header />
          <Button className="my-3 btn-lg btn-new" variant="info">
            Subject{" "}
          </Button>
          {loader && loaderShow()}
          {!loader && subject ? (
            <Card
              style={{ width: "78vw", padding: "3%" }}
              className="rightCard"
            >
              <EditDeleteSection
                name="subject"
                list={subject}
                placeholder="Subject"
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setIsEdit(false);
                  setSubjectText("");
                }}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
              <AddSubject
                value={subjectText}
                handleSubjectChange={setSubjectText}
                isEdit={isEdit}
                handleCancelEdit={handleCancelEdit}
                handleSave={handleSave}
              />
            </Card>
          ) : null}
        </Container>
      </div>
    </>
  );
}
export default Subject;
