import React, { useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import Dashboard from "../../Component/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../Component/Headerfile";
import EditDeleteSection from "../../Component/EditDelete";
import AddChapter from "./AddChapter";
import { getAllSubject, setLoader } from "../../redux/action/SubjectAction";
import {
  getAllChapter,
  setChapterLoader,
} from "../../redux/action/ChapterAction";
import {
  deleteChapterById,
  postChapter,
  putChapterById,
} from "../../Constant/enpoint";
import axios from "axios";
import { NotificationManager } from "react-notifications";

function Chapter(props) {
  const [show, setShow] = useState(true);
  const { loader, subject, error } = useSelector((state) => state.subject);
  const { cloader, chapter, c_error } = useSelector((state) => state.chapter);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [chapterValue, setChapterValue] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    getInitialList();
  }, []);

  const getInitialList = () => {
    dispatch(setLoader());
    dispatch(getAllSubject());
    dispatch(setChapterLoader());
    dispatch(getAllChapter());
  };
  const loaderShow = () => {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };
  const onClick = (data) => {
    navigate(`/sessions/${data.id}`);
  };

  const handleSave = () => {
    console.log("Selected Chapter ==>", selectedChapter);
    console.log("Selected Subject ==>", selectedSubject);
    console.log("Chapter value ==>", chapterValue);
    if (selectedSubject != "" && chapterValue != "") {
      let url = isEdit ? putChapterById(selectedChapter) : postChapter;
      let data = { name: chapterValue };
      data.subject_id = selectedSubject;
      axios({
        url: url,
        method: isEdit ? "PUT" : "POST",
        data: data,
      })
        .then((res) => {
          NotificationManager.success(
            isEdit ? "Chapter Updated" : "Chapter Added"
          );
          resetData();
        })
        .catch((err) => NotificationManager.error("Failed"));
    }
  };

  const resetData = () => {
    setIsEdit(false);
    setSelectedChapter("");
    setSelectedSubject("");
    setChapterValue("");
    dispatch(getAllSubject());
    dispatch(getAllChapter());
  };
  const handleEdit = () => {
    if (selectedChapter != "") {
      const temp = chapter.filter((item) => item.id == selectedChapter)[0];
      setIsEdit(true);
      setSelectedSubject(
        subject.filter((item) => item.id == temp.subject_id)[0].id
      );
      setChapterValue(temp.name);
    }
  };
  const handleDelete = () => {
    if (selectedChapter != "") {
      axios
        .delete(deleteChapterById(selectedChapter))
        .then((res) => {
          NotificationManager.success("Chapter Deleted Successfully");
          resetData();
        })
        .catch((err) => NotificationManager.error("Failed to Delete"));
    }
  };
  const handleCancelEdit = () => {
    setIsEdit(false);
    setSelectedChapter("");
    setSelectedSubject("");
    setChapterValue("");
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
            Chapter{" "}
          </Button>

          <Card style={{ width: "78vw", padding: "3%" }} className="rightCard">
            <EditDeleteSection
              name="chapter"
              list={chapter}
              placeholder="Chapter"
              value={selectedChapter}
              onChange={(e) => {
                setSelectedChapter(e.target.value);
                setIsEdit(false);
                setSelectedSubject("");
                setChapterValue("");
              }}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            <AddChapter
              onSubjectSelect={(e) => setSelectedSubject(e.target.value)}
              subjectValue={selectedSubject}
              subjectList={subject}
              handleChapterChange={setChapterValue}
              value={chapterValue}
              handleSave={handleSave}
              isEdit={isEdit}
              handleCancelEdit={handleCancelEdit}
            />
          </Card>
        </Container>
      </div>
    </>
  );
}
export default Chapter;
