import React, { Component } from "react";
import {
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
function AddChapter({ handleChapterChange, value, handleSave }) {
  return (
    <div className="addContainer">
      <div className="addSubContainer">
        <div className="addTitleContainer">
          <h1>Add Chapter</h1>
        </div>
        <InputGroup style={{ width: "50%" }}>
          <FormControl
            //   as="textarea"
            placeholder="Enter Chapter"
            onChange={(e) => handleChapterChange(e.target.value)}
            value={value}
          />
        </InputGroup>
        <Button
          style={{ width: "20%", marginTop: '5%' }}
          onClick={handleSave}
          className=""
          variant="primary"
        >
          <i class="fas fa-user-tie mr-2 "></i> Save{" "}
        </Button>
      </div>
    </div>
  );
}

export default AddChapter;
