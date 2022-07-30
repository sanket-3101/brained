import React, { Component } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
function EditDeleteSection({
  list,
  name,
  onChange,
  value,
  handleEdit,
  handleDelete,
  placeholder,
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="w-50 mt-10">
        <Form.Select
          onChange={onChange}
          value={value}
          aria-label="Default select example"
        >
          <option value=" ">Select {placeholder}</option>
          {list.map((item) => (
            <option value={name === "subject" ? item.id : ""}>
              {item.name}
            </option>
          ))}
        </Form.Select>
      </div>
      <Button
        style={{ width: "15%" }}
        onClick={handleEdit}
        className=""
        variant="primary"
      >
        <i class="fas fa-user-tie mr-2 "></i> Edit{" "}
      </Button>
      <Button
        style={{ width: "15%" }}
        onClick={handleDelete}
        className=""
        variant="warning"
      >
        <i class="fas fa-user-tie mr-2 "></i> Delete{" "}
      </Button>
    </div>
  );
}

export default EditDeleteSection;
