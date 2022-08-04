import React, { Component } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
function AddSubject({ handleSubjectChange, value, handleSave, isEdit, handleCancelEdit }) {
  return (
    <div className="addContainer">
      <div className="addSubContainer">
        <div className="addTitleContainer">
          <h3>{isEdit ? "Edit Subject" : "Add Subject"}</h3>
        </div>
        <InputGroup style={{ width: "50%" }}>
          <FormControl
            //   as="textarea"
            placeholder="Enter Subject Name"
            onChange={(e) => handleSubjectChange(e.target.value)}
            value={value}
          />
        </InputGroup>
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

export default AddSubject;
