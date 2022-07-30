import React, { Component } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
function AddChapter({
  handleChapterChange,
  value,
  handleSave,
  onSubjectSelect,
  subjectValue,
  subjectList,
  isEdit,
  handleCancelEdit
}) {
  return (
    <div className="addContainer">
      <div className="addSubContainer">
        <div className="addTitleContainer">
          <h1>{isEdit ? "Edit Chapter" : "Add Chapter"}</h1>
        </div>
        <div style={{ display: "flex" }}>
          <div className="w-50 mt-10 mr-5">
            <Form.Select
              onChange={onSubjectSelect}
              value={subjectValue}
              aria-label="Default select example"
            >
              <option value=" ">Select Subject</option>
              {subjectList.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </Form.Select>
          </div>
          <InputGroup style={{ width: "50%" }}>
            <FormControl
              //   as="textarea"
              placeholder="Enter Chapter"
              onChange={(e) => handleChapterChange(e.target.value)}
              value={value}
            />
          </InputGroup>
        </div>
        <Button
          style={{ width: "20%", marginTop: "5%" }}
          onClick={handleSave}
          className=""
          variant="primary"
        >
          <i class="fas fa-user-tie mr-2 "></i> {isEdit ? "Update" : "Save"}{" "}
        </Button>
        {isEdit && (
          <Button
            style={{ width: "28%", marginTop: "3%" }}
            onClick={handleCancelEdit}
            className=""
            variant="primary"
          >
            <i class="fas fa-user-tie mr-2 "></i> {'Cancel Edit'}{" "}
          </Button>
        )}
      </div>
    </div>
  );
}

export default AddChapter;
